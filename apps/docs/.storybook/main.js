module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  refs: {
    web: {
      title: "Web App",
      url: "http://localhost:6007",
    },
    ui: {
      title: "Design System",
      url: "http://localhost:6008",
    },
    shop: {
      title: "Shop",
      url: "https://634983abe48e036f18c3faeb-iyvehnzayu.chromatic.com",
    },
  },
};
