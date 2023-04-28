{ import('next').NextConfig }

const webpack = require("webpack");

const nextConfig = {
  
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    )
    return config;
  },

  i18n: {

    locales: ['en', 'am', 'ru'],
    defaultLocale: 'am',
    localeDetection: false
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: 'https',
        hostname: '**.weflex.am',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'apimall.weflex.am',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'apimall.weflex.am',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'weflex.am',
        port: '',
        pathname: '/**',
      },
    ],
  },


}

module.exports = nextConfig
