import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-designs',
    'storybook-addon-pseudo-states',
    '@storybook/addon-a11y',
    { name: '@storybook/addon-styling', options: { postCss: true } },
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  core: { disableTelemetry: true },
  // webpackFinal(config, options) {
  //   config.module?.rules?.push({
  //     test: /\.css$/,
  //     use: ['postcss-loader'],
  //   });
  //   return config;
  // },
};
export default config;
