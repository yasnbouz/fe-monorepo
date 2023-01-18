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
    default: "Light",
    values: [
      {
        name: "Light",
        value: "#fefefe",
      },
      {
        name: "Dark",
        value: "#272727",
      },
    ],
    grid: {
      cellSize: 8,
      opacity: 0.5,
      cellAmount: 8,
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
