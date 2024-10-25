/** @type {import('next').NextConfig} */

const NextFederationPlugin = require("@module-federation/nextjs-mf");
const routes = require("./src/routes/moduleRoutes.json");

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "bime_financeiro",
        remotes: {
          bime_vendas: `${process.env.NEXT_PRIVATE_LOCAL_BIMEVENDAS}${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          host: `${process.env.NEXT_PRIVATE_LOCAL_HOST}${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./pages/listaFinanceiro": `${routes?.baseDir}${routes?.dashboards?.listaFinanceiro}`,
        },
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
        force: true,
      })
    );

    return config;
  },
};
