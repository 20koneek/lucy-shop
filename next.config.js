/** @type {import('next').NextConfig} */
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.lucyinthesky.com',
                port: '',
                pathname: '/data/**',
            },
        ],
    },
    webpack: (config, {dev, isServer}) => {
        if (dev && !isServer) {
            config.plugins.push(new ForkTsCheckerWebpackPlugin())
        }

        return config
    },
}

module.exports = nextConfig
