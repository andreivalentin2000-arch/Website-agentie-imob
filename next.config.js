/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "Website-agentie-imob";

const nextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

module.exports = nextConfig;
