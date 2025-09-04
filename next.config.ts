import type { NextConfig } from 'next';


const nextConfig: NextConfig = {
  devIndicators: {
    position: 'bottom-right'
  },

  experimental: {
    cssChunking: 'strict',
    reactCompiler: true,
    viewTransition: true
  },

  // Defining localPatterns restricts allowed local paths; use a broad match to avoid breakage.
  images: {
    localPatterns: [
      {
        pathname: '/**'
      }
    ]
  },

  poweredByHeader: false,
  reactMaxHeadersLength: 1000,

  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true
    },
    incomingRequests: {
      ignore: [/\favicon\.ico/]
    }
  },

  typescript: {
    ignoreBuildErrors: true
  }
};


export default nextConfig;
