module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#F5F0E8',
          surface: '#EDE7D9',
          'surface-elevated': 'rgba(255,252,245,0.7)',
          text: '#1C1C1C',
          'text-secondary': '#5C5648',
          gold: '#B8972A',
          'gold-light': '#D4AF5A',
          border: 'rgba(184,151,42,0.15)',
          shadow: 'rgba(28,28,28,0.08)',
        },
        dark: {
          bg: '#0F0E0C',
          surface: '#1A1814',
          'surface-elevated': 'rgba(30,28,22,0.8)',
          text: '#EDE7D9',
          'text-secondary': '#9C9080',
          gold: '#C9A84C',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out',
        'grain': 'grain 8s steps(10) infinite',
        'mesh': 'mesh 15s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px) blur(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0) blur(0)' },
        },
        grain: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '256px 256px' },
        },
        mesh: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      backgroundImage: {
        'grain': 'url("data:image/svg+xml,%3Csvg viewBox=%270 0 256 256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27 seed=%272%27 /%3E%3C/filter%3E%3Crect width=%27256%27 height=%27256%27 fill=%27%23F5F0E8%27 filter=%27url(%23noise)%27 opacity=%270.03%27/%3E%3C/svg%3E")',
      },
    }
  },
  plugins: [],
}
