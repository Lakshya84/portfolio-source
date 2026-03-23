/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/react-app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#fdfcfb',
          100: '#f8f6f4',
          200: '#f0ede8',
          300: '#e5dfd7',
          400: '#d4cbc0',
          500: '#bfb3a5',
          600: '#a89989',
          700: '#8a7d6f',
          800: '#6b6158',
          900: '#4d453e',
        },
        lavender: {
          50: '#f9f8ff',
          100: '#f3f0ff',
          200: '#e9e4ff',
          300: '#d9cfff',
          400: '#c2b4ff',
          500: '#a895ff',
          600: '#8d75eb',
          700: '#7560d1',
          800: '#5d4ba8',
          900: '#4a3c85',
        },
        softpink: {
          50: '#fff8fa',
          100: '#ffeff4',
          200: '#ffdce8',
          300: '#ffc2d7',
          400: '#ff9dbf',
          500: '#ff74a3',
          600: '#e85585',
          700: '#c73f6a',
          800: '#9f3254',
          900: '#7d2844',
        },
        softgold: {
          50: '#fffcf5',
          100: '#fef8e8',
          200: '#fdefc7',
          300: '#fbe29d',
          400: '#f9cf6a',
          500: '#f7ba42',
          600: '#e09d28',
          700: '#bb7f1d',
          800: '#946319',
          900: '#744d15',
        },
        slate: {
          950: '#0a0a0f',
        }
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 0% 0%, rgba(157, 122, 255, 0.08) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(255, 102, 145, 0.08) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(251, 191, 36, 0.08) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(157, 122, 255, 0.08) 0px, transparent 50%)',
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      lineHeight: {
        'extra-tight': '1.1',
      }
    },
  },
  plugins: [],
};
