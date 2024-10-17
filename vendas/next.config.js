/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'vendas',
        remotes: {
          financas: `financas@http://localhost:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        force: true,
        shared: {
          '@chakra-ui/': {
            singleton: true,
            requiredVersion: false,
          },
          '@emotion/': {
            singleton: true,
            requiredVersion: false,
          },
          '@emotion/': {
            singleton: true,
            requiredVersion: false,
          }
        }
      }),
    );

    return config;
  },
};
