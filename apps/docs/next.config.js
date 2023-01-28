/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["@hu/ui", "@hu/icons"],
  modularizeImports: {
    "@hu/icons": {
      transform: "@hu/icons/dist/{{member}}",
      preventFullImport: true,
    },
    "@hu/ui": {
      transform: "@hu/ui/src/{{member}}",
      skipDefaultConversion: true,
      preventFullImport: true,
    },
  },
};

module.exports = config;
