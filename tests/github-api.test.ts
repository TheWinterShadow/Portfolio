/**
 * Unit tests for GitHub API utilities
 * 
 * @fileoverview Tests for GitHub API functions including
 * repository fetching, error handling, and response parsing
 * @author The Winter Shadow
 * @since 1.0.0
 */

import { fetchGitHubRepo, fetchMultipleRepos } from '../src/lib/github-api';

// Mock fetch globally
const mockFetch = jest.fn();
global.fetch = mockFetch;

// Mock console.error to avoid noise in test output
const mockConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

/**
 * Test suite for GitHub API utilities
 */
describe('GitHub API Utilities', () => {
  beforeEach(() => {
    mockFetch.mockClear();
    mockConsoleError.mockClear();
  });

  afterAll(() => {
    mockConsoleError.mockRestore();
  });

  /**
   * fetchGitHubRepo function tests
   */
  describe('fetchGitHubRepo', () => {
    const mockRepoData = {
      name: 'test-repo',
      full_name: 'testuser/test-repo',
      description: 'A test repository',
      stargazers_count: 42,
      forks_count: 7,
      updated_at: '2023-01-01T00:00:00Z',
      html_url: 'https://github.com/testuser/test-repo',
      language: 'TypeScript',
      topics: ['test', 'typescript'],
    };

    test('fetches repository data successfully', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockRepoData,
      });

      const result = await fetchGitHubRepo('testuser', 'test-repo');

      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.github.com/repos/testuser/test-repo',
        { next: { revalidate: 3600 } }
      );
      expect(result).toEqual(mockRepoData);
    });

    test('returns null for non-ok response', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 404,
      });

      const result = await fetchGitHubRepo('testuser', 'nonexistent-repo');

      expect(result).toBeNull();
    });

    test('returns null and logs error on fetch failure', async () => {
      const fetchError = new Error('Network error');
      mockFetch.mockRejectedValueOnce(fetchError);

      const result = await fetchGitHubRepo('testuser', 'test-repo');

      expect(result).toBeNull();
      expect(mockConsoleError).toHaveBeenCalledWith(
        'Error fetching GitHub repo testuser/test-repo:',
        fetchError
      );
    });

    test('uses correct API endpoint format', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockRepoData,
      });

      await fetchGitHubRepo('TheWinterShadow', 'Portfolio');

      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.github.com/repos/TheWinterShadow/Portfolio',
        { next: { revalidate: 3600 } }
      );
    });

    test('includes proper caching configuration', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockRepoData,
      });

      await fetchGitHubRepo('testuser', 'test-repo');

      const [, options] = mockFetch.mock.calls[0];
      expect(options).toHaveProperty('next');
      expect(options.next).toHaveProperty('revalidate', 3600);
    });
  });

  /**
   * fetchMultipleRepos function tests
   */
  describe('fetchMultipleRepos', () => {
    const mockRepoData1 = {
      name: 'repo1',
      full_name: 'user1/repo1',
      description: 'First repository',
      stargazers_count: 10,
      forks_count: 2,
      updated_at: '2023-01-01T00:00:00Z',
      html_url: 'https://github.com/user1/repo1',
      language: 'JavaScript',
      topics: ['js'],
    };

    const mockRepoData2 = {
      name: 'repo2',
      full_name: 'user2/repo2',
      description: 'Second repository',
      stargazers_count: 25,
      forks_count: 5,
      updated_at: '2023-02-01T00:00:00Z',
      html_url: 'https://github.com/user2/repo2',
      language: 'TypeScript',
      topics: ['ts', 'web'],
    };

    test('fetches multiple repositories successfully', async () => {
      mockFetch
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockRepoData1,
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockRepoData2,
        });

      const repos = [
        { owner: 'user1', repo: 'repo1' },
        { owner: 'user2', repo: 'repo2' },
      ];

      const result = await fetchMultipleRepos(repos);

      expect(result).toBeInstanceOf(Map);
      expect(result.size).toBe(2);
      expect(result.get('user1/repo1')).toEqual(mockRepoData1);
      expect(result.get('user2/repo2')).toEqual(mockRepoData2);
    });

    test('handles mixed success and failure responses', async () => {
      mockFetch
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockRepoData1,
        })
        .mockResolvedValueOnce({
          ok: false,
          status: 404,
        });

      const repos = [
        { owner: 'user1', repo: 'repo1' },
        { owner: 'user2', repo: 'nonexistent' },
      ];

      const result = await fetchMultipleRepos(repos);

      expect(result).toBeInstanceOf(Map);
      expect(result.size).toBe(1);
      expect(result.get('user1/repo1')).toEqual(mockRepoData1);
      expect(result.get('user2/nonexistent')).toBeUndefined();
    });

    test('handles empty repository list', async () => {
      const result = await fetchMultipleRepos([]);

      expect(result).toBeInstanceOf(Map);
      expect(result.size).toBe(0);
      expect(mockFetch).not.toHaveBeenCalled();
    });

    test('handles all failed requests', async () => {
      mockFetch
        .mockResolvedValueOnce({
          ok: false,
          status: 404,
        })
        .mockRejectedValueOnce(new Error('Network error'));

      const repos = [
        { owner: 'user1', repo: 'nonexistent' },
        { owner: 'user2', repo: 'another-nonexistent' },
      ];

      const result = await fetchMultipleRepos(repos);

      expect(result).toBeInstanceOf(Map);
      expect(result.size).toBe(0);
    });

    test('makes concurrent requests', async () => {
      const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
      
      mockFetch
        .mockImplementationOnce(async () => {
          await delay(100);
          return {
            ok: true,
            json: async () => mockRepoData1,
          };
        })
        .mockImplementationOnce(async () => {
          await delay(100);
          return {
            ok: true,
            json: async () => mockRepoData2,
          };
        });

      const repos = [
        { owner: 'user1', repo: 'repo1' },
        { owner: 'user2', repo: 'repo2' },
      ];

      const startTime = Date.now();
      const result = await fetchMultipleRepos(repos);
      const endTime = Date.now();

      // Should complete in roughly 100ms (concurrent) rather than 200ms (sequential)
      expect(endTime - startTime).toBeLessThan(200);
      expect(result.size).toBe(2);
    });

    test('uses correct map keys for results', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockRepoData1,
      });

      const repos = [{ owner: 'TheWinterShadow', repo: 'Portfolio' }];
      const result = await fetchMultipleRepos(repos);

      expect(result.has('TheWinterShadow/Portfolio')).toBe(true);
      expect(result.get('TheWinterShadow/Portfolio')).toEqual(mockRepoData1);
    });
  });

  /**
   * Integration and edge case tests
   */
  describe('Integration and Edge Cases', () => {
    test('handles malformed JSON response', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => {
          throw new Error('Invalid JSON');
        },
      });

      const result = await fetchGitHubRepo('testuser', 'test-repo');

      expect(result).toBeNull();
      expect(mockConsoleError).toHaveBeenCalled();
    });

    test('handles repository names with special characters', async () => {
      const mockData = { name: 'repo-with-dashes_and_underscores' };
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      });

      const result = await fetchGitHubRepo('user', 'repo-with-dashes_and_underscores');

      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.github.com/repos/user/repo-with-dashes_and_underscores',
        { next: { revalidate: 3600 } }
      );
      expect(result).toEqual(mockData);
    });

    test('handles GitHub API rate limiting response', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 403,
        statusText: 'Forbidden',
      });

      const result = await fetchGitHubRepo('testuser', 'test-repo');

      expect(result).toBeNull();
    });

    test('validates return type structure', async () => {
      const incompleteData = {
        name: 'test-repo',
        // Missing some expected fields
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => incompleteData,
      });

      const result = await fetchGitHubRepo('testuser', 'test-repo');

      // Should return the data even if incomplete (API might change)
      expect(result).toEqual(incompleteData);
    });
  });
});