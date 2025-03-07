/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        black: '#240A17',
        primary: '#962467',
        secondary: '#680437',
        purple: {
          88: '#B592A4',
          90: '#F5D8E5',
          92: '#F7DEE9',
          94: '#F9E6ED',
          96: '#FBEFF1',
          98: '#FDF7F7',
        },
      },
      fontSize: {
        h1: [
          '64px',
          { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '700' },
        ],
        h2: [
          '40px',
          { lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '700' },
        ],
        h3: [
          '32px',
          { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '700' },
        ],
        h4: [
          '24px',
          { lineHeight: '1.5', letterSpacing: '-0.01em', fontWeight: '700' },
        ],
        'xl-140': ['20px', { lineHeight: '1.4' }],
        'xl-160': ['20px', { lineHeight: '1.6', letterSpacing: '-0.005em' }],
        lg: ['18px', { lineHeight: '1.45', letterSpacing: '-0.005em' }],
        'md-160': ['16px', { lineHeight: '1.6' }],
        'md-150': ['16px', { lineHeight: '1.5' }],
        sm: ['14px', { lineHeight: '1.4' }],
        xs: ['12px', { lineHeight: '1.35' }],
      },
    },
  },
  plugins: [],
}
