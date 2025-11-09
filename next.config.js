/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Handle static assets properly
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // Enable public directory access
  trailingSlash: false,
  images: {
    unoptimized: true,
    domains: [
      'play.google.com',
      'www.gstatic.com',
      'lh3.googleusercontent.com',
      'ssl.gstatic.com',
      'www.google.com',
      'fonts.googleapis.com',
      'fonts.gstatic.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.google.com',
      },
      {
        protocol: 'https',
        hostname: '**.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      }
    ],
  },
  // Enable cross-origin headers for iframe content
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'unsafe-none',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig