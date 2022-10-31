/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withImages = require('next-images');

module.exports = withImages({
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
});

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
      },
    ],
  },
};
