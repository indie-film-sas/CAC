import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cluster: {
          bg: '#120a28',
          panel: '#1b1238',
          border: '#3f2a70',
          text: '#f5f2ff',
          muted: '#b6a9d6',
          accentStart: '#ff2fa6',
          accentEnd: '#2f7bff'
        }
      },
      backgroundImage: {
        'cluster-gradient': 'linear-gradient(120deg, #ff2fa6 0%, #2f7bff 100%)'
      }
    }
  },
  plugins: []
}

export default config
