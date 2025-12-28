export interface GitHubRepo {
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  html_url: string;
  language: string;
  topics: string[];
}

export async function fetchGitHubRepo(owner: string, repo: string): Promise<GitHubRepo | null> {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    
    if (!response.ok) {
      return null;
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching GitHub repo ${owner}/${repo}:`, error);
    return null;
  }
}

export async function fetchMultipleRepos(repos: Array<{ owner: string; repo: string }>): Promise<Map<string, GitHubRepo>> {
  const results = new Map<string, GitHubRepo>();
  
  await Promise.all(
    repos.map(async ({ owner, repo }) => {
      const data = await fetchGitHubRepo(owner, repo);
      if (data) {
        results.set(`${owner}/${repo}`, data);
      }
    })
  );
  
  return results;
}

