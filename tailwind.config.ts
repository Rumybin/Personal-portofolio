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
        panel: '#0d1f1e',
        surface: '#0f1a19',
        foreground: '#f0f0f0',
        secondary: '#a3a3a3',
        accent: '#2dd4bf',
        'accent-hover': '#14b8a6',
        'accent-muted': '#0f3d38',
        border: {
          subtle: '#1a3532',
        },
      },
    },
  },
  plugins: [],
}

export default config

