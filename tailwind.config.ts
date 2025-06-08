import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'poe-gold': '#C8AA6E',
        'poe-dark': '#0C0E0D',
        'poe-red': '#A93226',
        'poe-blue': '#1B5E7D',
      },
    },
  },
  plugins: [],
}
export default config