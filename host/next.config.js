/** @type {import('next').NextConfig} */

const NextFederationPlugin = require("@module-federation/nextjs-mf");
const routeConfig = require("./routes/routesModule.json");

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "host",
        remotes: {
          bime_vendas: `${process.env.NEXT_PRIVATE_LOCAL_BIMEVENDAS}${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          bime_financeiro: `${process.env.NEXT_PRIVATE_LOCAL_BIMEFINANCEIRO}${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./contexts/UserProvider": `${routeConfig.baseDir}${routeConfig.exposesRoutes.contexts.UserProvider}`,
          "./contexts/UserContextType": `${routeConfig.baseDir}${routeConfig.exposesRoutes.contexts.UserContextType}`,
        },
        force: true,
        shared: {
          "@chakra-ui/": {
            singleton: true,
            requiredVersion: false,
          },
          "@emotion/": {
            singleton: true,
            requiredVersion: false,
          },
          "@emotion/": {
            singleton: true,
            requiredVersion: false,
          },
        },
      })
    );

    return config;
  },
};
