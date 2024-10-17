/** @type {import('next').NextConfig} */

const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'financas',
        remotes: {
          vendas: `vendas@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './pages/dashboard': './src/pages/dashboard.tsx',          
        },
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
          },
        },
        force: true,
      }),
    );

    return config;
  },
};
