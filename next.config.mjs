const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repositoryBasePath = "/studio";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? repositoryBasePath : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? repositoryBasePath : "",
  },
};

export default nextConfig;
