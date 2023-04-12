import React from 'react';
import { withThemeByDataAttribute } from '@storybook/addon-styling';
import { Preview } from '@storybook/react';
import '../src/styles/tailwind.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      grid: {
        cellSize: 4,
        opacity: 0.5,
        cellAmount: 5,
      },
    },
    pseudo: false,
  },
  globals: {
    pseudo: false,
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-mode',
    }),
    (Story) => (
      <div className="font-sans">
        <Story />
      </div>
    ),
  ],
};
export default preview;
