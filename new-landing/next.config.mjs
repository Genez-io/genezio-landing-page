/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  distDir: "build",
  output: "export",
  trailingSlash: true
};

export default nextConfig;
