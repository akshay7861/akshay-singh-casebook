/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        page: '#F7F5F0',
        card: '#FFFFFF',
        ink: '#111827',
        body: '#4B5563',
        muted: '#6B7280',
        navy: '#102033',
        'navy-soft': '#1E3A5F',
        gold: '#B88746',
        border: '#E2E0DA',
        blue: '#DCE6F2',
        section: '#EEF1F4',
        positive: '#15803D',
        negative: '#B91C1C',
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 14px 38px rgba(17, 24, 39, 0.07)',
        lift: '0 18px 46px rgba(16, 32, 51, 0.12)',
      },
    },
  },
  plugins: [],
}
