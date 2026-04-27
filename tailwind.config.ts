import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.08)',
      },
      colors: {
        brand: {
          600: '#1d4ed8',
          500: '#2563eb',
          400: '#3b82f6',
        },
      },
    },
  },
  plugins: [],
};

export default config;
