import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0c0c0c',
        panel: '#0a1a06',
        surface: '#0d1f0a',
        foreground: '#f0f0f0',
        secondary: '#a3a3a3',
        accent: '#a3e635',
        'accent-hover': '#84cc16',
        'accent-muted': '#1a3a0a',
        border: {
          subtle: '#1e3a0f',
        },
      },
    },
  },
  plugins: [],
}

export default config

