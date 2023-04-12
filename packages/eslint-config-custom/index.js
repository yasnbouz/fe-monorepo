module.exports = {
  extends: ['next/core-web-vitals', 'turbo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'prettier/prettier': 'error',
  },
};
