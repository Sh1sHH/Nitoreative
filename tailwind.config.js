/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700', // Custom yellow
        dark: '#111111',    // Dark background
        light: '#FFFFFF',   // Light text
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        display: ['Monument Extended', 'sans-serif'],
      },
      fontSize: {
        'display-large': ['4.5rem', { lineHeight: '1.1' }],
        'display-medium': ['3.5rem', { lineHeight: '1.2' }],
        'display-small': ['2.5rem', { lineHeight: '1.3' }],
        'body-large': ['1.25rem', { lineHeight: '1.5' }],
      },
      gridTemplateColumns: {
        'portfolio': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float-1': 'float1 10s ease-in-out infinite',
        'float-2': 'float2 12s ease-in-out infinite',
        'float-3': 'float3 11s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'marquee-left': 'marquee-scroll-left 5s linear infinite',
        'marquee-right': 'marquee-scroll-right 5s linear infinite',
      },
      keyframes: {
        float1: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(10px, -10px)' },
          '50%': { transform: 'translate(15px, -5px)' },
          '75%': { transform: 'translate(5px, -12px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        float2: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-8px, 5px)' },
          '50%': { transform: 'translate(-15px, 12px)' },
          '75%': { transform: 'translate(-6px, 8px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        float3: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(8px, 7px)' },
          '50%': { transform: 'translate(10px, -8px)' },
          '75%': { transform: 'translate(5px, 5px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.5)' },
        },
        'marquee-scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-scroll-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
