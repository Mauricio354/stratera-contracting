import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  // Belt and suspenders: redirect any www.stateracontracting.com traffic
  // to the apex domain. Vercel's domain settings already handle this via
  // a 308 redirect, but this rule ensures consolidation even if the
  // Vercel config ever changes. permanent: true emits a 308.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.stateracontracting.com",
          },
        ],
        destination: "https://stateracontracting.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
