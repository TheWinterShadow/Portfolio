/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Update basePath to match your GitHub repository name
  // For example: '/Portfolio' if your repo is 'Portfolio'
  // Leave empty string '' if deploying to custom domain
  basePath: '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Disable image optimization for static export
  assetPrefix: '',
}

module.exports = nextConfig

