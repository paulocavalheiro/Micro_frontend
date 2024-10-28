/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");
const route = require("./src/routes/module.Routes.json");
console.log(`${route.basePages}${route.exposedRoutes.dashboards}`);

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "bime_vendas",
        remotes: {
          bime_financeiro: `${process.env.NEXT_PRIVATE_LOCAL_BIMEFINANCEIRO}${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          host: `${process.env.NEXT_PRIVATE_LOCAL_HOST}${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./pages/dashboards/listaVendas": `./src/pages/dashboards/listaVendas.tsx`,
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
