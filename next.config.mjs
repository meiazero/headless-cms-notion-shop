/** @type {import('next').NextConfig} */
const nextConfig = {
  // Just to ensure that React is always on strict mode
  reactStrictMode: true,

  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  // We want to always enforce that SWC minifies the sources even during Development mode
  // so that bundles are minified on-the-go. SWF minifying is fast, and has almost no penalties
  swcMinify: true,

  // We don't use trailing slashes on URLs from the Node.js Website
  trailingSlash: false,

  // We don't want to redirect with trailing slashes
  skipTrailingSlashRedirect: true,

  typescript: { ignoreBuildErrors: true },

  eslint: { dirs: ["."], ignoreDuringBuilds: true },

  images: {
    remotePatterns: [
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "github.com" },
    ],
  },
}

export default nextConfig
