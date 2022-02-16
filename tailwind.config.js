const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#925add',
        secondary: '#C200FB',
        success: '#10b981',
        danger: '#FF331F',
        warning: '#F5B841',
        info: '#66C7F4',
      },
    },
    fontFamily: {
      serif: ['Sora', 'sans-serif'],
    },
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`);
      });
    }),
  ],
};
