import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    colors: {
      primary: { dark: '#1a1a1a', light: '#f2eee8' },
      secondary: { dark: '#3d3d3d', light: '#ffffff' },
      travel: '#678cb1',
      education: '#ffcd22',
      work: '#2e8b57',
      home: '#5a2d81'
    },
    fontSize: {
      sm: ['0.65rem', '0.9rem'],
      base: ['1rem', '1.5rem'],
      xl: ['1.25rem', '1.75rem'],
      '2xl': ['1.5rem', '2rem']
    },
    letterSpacing: {
      normal: '0',
      wide: '0.05em',
      wider: '0.2em'
    },
    inset: {
      0: '0',
      50: '50px',
      90: '90px',
      130: '130px',
      170: '170px'
    },
    extend: {
      maxWidth: {
        140: '140px'
      }
    }
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ]
};
export default config;
