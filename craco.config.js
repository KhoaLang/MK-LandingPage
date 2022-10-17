const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#000", "admin-color": "#0050CE" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
