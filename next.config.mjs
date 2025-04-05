/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // Enable React Strict Mode
  reactStrictMode: true,
  // Add any image domains if needed
  images: {
    domains: [],
  },
  // Disable x-powered-by header
  poweredByHeader: false,
  // Disable ESLint during build
  eslint: {
    // Warning: this will completely disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  // Enable static exports
  output: 'export'
};

export default nextConfig; 