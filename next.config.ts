import type { NextConfig } from "next";

const repoName = "IndianInBelgium";
const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
