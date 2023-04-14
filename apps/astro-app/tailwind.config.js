import TwConfig from 'tailwind-config';

/** @type {import('tailwindcss').Config} */
const config = {
  ...TwConfig,
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
};
export default config;
