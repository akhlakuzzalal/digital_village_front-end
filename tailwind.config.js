const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2f9e11',
        secondary: '#54b139',
        success: '#40975f',
        warning: '#f55767',
        info: '#2563ff',
        error: '#ff2238',
        black: '#de1318',
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
