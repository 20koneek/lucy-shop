/** @type {import('next').NextConfig} */
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin())
    }

    return config
  },
}

module.exports = nextConfig
