const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

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
      transform: "@hu/ui/src/atoms/{{member}}",
      skipDefaultConversion: true,
      preventFullImport: true,
    },
  },
};

module.exports = withBundleAnalyzer(config);
