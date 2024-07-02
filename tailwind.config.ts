import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
  },
  daisyui: {
    themes: ['light', 'dark', 'forest'],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
export default config;
