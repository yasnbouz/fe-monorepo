import { fontFamily } from 'tailwindcss/defaultTheme';
import interMetrics from '@capsizecss/metrics/inter';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../packages/ui/src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
    },
    colors: {
      Neutral: {
        Black: '#212121',
        D_Grey: '#4d4d4d',
        Grey: '#717171',
        L_Grey: '#89939e',
        'Grey-blue': '#abbed1',
        Silver: '#f5f7fa',
        White: '#ffffff',
      },
      Primary: {
        D_Blue: '#0053ad',
        Navy: '#0663c7',
        M_Blue: '#0565CC',
        Azure: '#4196f0',
        Sky: '#dbedff',
        L_Blue: '#eef5fc',
      },
      Success: {
        D_Green: '#115b43',
        Forest: '#1b6e53',
        M_Green: '#009262',
        Herbal: '#32c997',
        Mint: '#84dfc1',
        L_Green: '#f1fbf8',
      },
      Warning: {
        D_Yellow: '#e48900',
        Lemon: '#ffa826',
        M_Yellow: '#ffb240',
        Straw: '#ffc670',
        Sand: '#ffd596',
        L_Yellow: '#fff8ec',
      },
      Danger: {
        D_Red: '#c33025',
        Scarlet: '#e01507',
        M_Red: '#e02b1d',
        Raspberry: '#ff5a4f',
        Rubicund: '#f0857d',
        L_Red: '#fff1f0',
      },
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.75rem',
      '3xl': '2.25rem',
      '4xl': '4rem',
    },
    fontMetrics: {
      sans: interMetrics,
    },
    boxShadow: {
      'Shadow/2px': '0px 2px 4px 0px rgba(171,190,209,0.6)',
      'Shadow/4px': '0px 4px 8px 0px rgba(171,190,209,0.4)',
      'Shadow/6px': '0px 6px 12px 0px rgba(171,190,209,0.3)',
      'Shadow/8px': '0px 8px 16px 0px rgba(171,190,209,0.4)',
    },
    borderRadius: {
      none: '0',
      xs: '0.05000000074505806rem',
      sm: '0.0625rem',
      default: '0.07500000298023224rem',
      lg: '0.125rem',
      xl: '0.15625rem',
      '2xl': '0.1875rem',
      '3xl': '0.25rem',
      '4xl': '0.3125rem',
      '5xl': '0.375rem',
      '6xl': '0.625rem',
      '7xl': '0.9375rem',
      '8xl': '1.25rem',
      '9xl': '3.125rem',
      full: '9999px',
    },
  },
  plugins: [import('tailwindcss-capsize')],
};
