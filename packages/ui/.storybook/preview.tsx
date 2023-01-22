import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
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
};
export const decorators = [
  (Story) => (
    <div className="font-sans">
      <Story />
    </div>
  ),
];
