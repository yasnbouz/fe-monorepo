const svgoConfig = {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
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
  svgProps: {
    'aria-hidden': 'true',
    focusable: 'false',
  },
  typescript: true,
};
