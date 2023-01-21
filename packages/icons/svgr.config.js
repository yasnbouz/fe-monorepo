// .svgrrc.js

const svgoConfig = {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          convertColors: {
            currentColor: true,
          },
        },
      },
    },
  ],
};
module.exports = {
  svgoConfig,
  typescript: true,
};
