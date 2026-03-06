import type { NextConfig } from 'next';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// ─── Security Headers ──────────────────────────────────────────────────────────
// Applied to ALL routes. These satisfy OWASP recommended headers.
const securityHeaders = [
  // DNS prefetching for external resources
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  // Prevent clickjacking
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  // Prevent MIME type sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Control referrer information
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
  // Only send over HTTPS (2 years, include subdomains, preload list)
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  // Permissions Policy — restrict unused browser features
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  // Content Security Policy
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://analytics.umami.is https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https: http:",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://analytics.umami.is https://vitals.vercel-insights.com https://*.upstash.io",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      'upgrade-insecure-requests',
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // Add other image domains here
    ],
  },
  experimental: {
    // next 15 defaults
  },
  async redirects() {
    return [
      {
        source: '/rss.xml',
        destination: '/feed.xml',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      // ─── Security headers on all routes ───────────────────────────────
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      // ─── Performance: immutable static assets ─────────────────────────
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      // ─── Performance: font files ──────────────────────────────────────
      {
        source: '/fonts/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      // ─── Performance: images ──────────────────────────────────────────
      {
        source: '/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=43200' },
        ],
      },
      // ─── Performance: API routes ──────────────────────────────────────
      {
        source: '/api/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=60, stale-while-revalidate=300' },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
