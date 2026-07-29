import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath = "/studyscore-calc";

const nextConfig: NextConfig = {
  output: isGitHubPagesBuild ? "export" : undefined,
  basePath: isGitHubPagesBuild ? githubPagesBasePath : "",
  assetPrefix: isGitHubPagesBuild ? githubPagesBasePath : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
