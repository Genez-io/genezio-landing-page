/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  distDir: "../public",
  output: "export",
  trailingSlash: true, // Optional: Adds trailing slashes to URLs
  images: {
    unoptimized: true // Prevents issues with Next.js Image component on static export
  }
};

export default nextConfig;
