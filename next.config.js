/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "react-icons"],
    // Enable modern JavaScript features
    serverActions: true,
    serverComponentsExternalPackages: [],
    // Removed: optimizeCss: true - causing build error with missing 'critters' module
    // Enable modern bundle splitting
    turbotrace: {
      logLevel: "error",
    },
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Enable SWC minification
  swcMinify: true,
  // Configure compression
  compress: true,
  // Add headers for better security and caching
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400, stale-while-revalidate=31536000",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)\\.(jpg|jpeg|png|webp|avif|ico|svg)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)\\.(js|css)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ]
  },
  // Add webpack configuration for bundle optimization
  webpack: (config, { dev, isServer }) => {
    // Production optimizations only
    if (!dev && !isServer) {
      // Split chunks more aggressively
      config.optimization.splitChunks = {
        chunks: "all",
        maxInitialRequests: 25,
        minSize: 20000,
        maxSize: 70000,
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            name: "framework",
            chunks: "all",
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler|next|@next)[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
            test(module) {
              return module.size() > 80000 && /node_modules[/\\]/.test(module.identifier())
            },
            name(module) {
              const rawRequest = module.rawRequest ? module.rawRequest : module.identifier()
              if (!rawRequest) return null

              const packageName = rawRequest
                .replace(/^@(\w+)[/\\]/, "$1-")
                .replace(/[/\\]/, "-")
                .replace(/.*[\\/]node_modules[\\/]/, "")
                .replace(/\.js$/, "")

              return `npm.${packageName}`
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          commons: {
            name: "commons",
            minChunks: 2,
            priority: 20,
          },
          shared: {
            name(module, chunks) {
              const crypto = require("crypto")
              const hash = crypto
                .createHash("sha1")
                .update(
                  chunks.reduce((acc, chunk) => {
                    return acc + chunk.name
                  }, ""),
                )
                .digest("hex")

              return hash
            },
            priority: 10,
            minChunks: 2,
            reuseExistingChunk: true,
          },
        },
      }

      // Add terser plugin options for better minification
      if (config.optimization.minimizer) {
        config.optimization.minimizer.forEach((minimizer) => {
          if (minimizer.constructor.name === "TerserPlugin") {
            minimizer.options.terserOptions = {
              ...minimizer.options.terserOptions,
              compress: {
                ...minimizer.options.terserOptions.compress,
                drop_console: true,
                pure_funcs: ["console.debug", "console.log", "console.info"],
              },
              mangle: {
                ...minimizer.options.terserOptions.mangle,
                safari10: true,
              },
            }
          }
        })
      }
    }

    return config
  },
}

module.exports = nextConfig
