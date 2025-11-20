/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Futuristic sci-fi theme with cyan and purple
        primary: {
          50: '#e6ffff',
          100: '#ccffff',
          200: '#99ffff',
          300: '#66ffff',
          400: '#33ffff',
          500: '#00FFFF', // Cyan glow
          600: '#00cccc',
          700: '#009999',
          800: '#006666',
          900: '#003333',
        },
        secondary: {
          50: '#f3e6ff',
          100: '#e6ccff',
          200: '#cc99ff',
          300: '#b366ff',
          400: '#9933ff',
          500: '#8000ff', // Purple
          600: '#6600cc',
          700: '#4d0099',
          800: '#330066',
          900: '#1a0033',
        },
        accent: {
          50: '#ffe6ff',
          100: '#ffccff',
          200: '#ff99ff',
          300: '#ff66ff',
          400: '#ff33ff',
          500: '#ff00ff', // Magenta
          600: '#cc00cc',
          700: '#990099',
          800: '#660066',
          900: '#330033',
        },
        dark: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          DEFAULT: '#111827',
        },
        surface: {
          light: '#ffffff',
          DEFAULT: '#f8f9fa',
          dark: '#e9ecef',
        },
        text: {
          primary: '#111827',
          secondary: '#4b5563',
          light: '#9ca3af',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3)',
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(0, 255, 255, 0.8), 0 0 60px rgba(0, 255, 255, 0.5)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 255, 255, 0.5)',
        'glow-lg': '0 0 30px rgba(0, 255, 255, 0.6), 0 0 60px rgba(0, 255, 255, 0.3)',
        'glow-xl': '0 0 40px rgba(0, 255, 255, 0.7), 0 0 80px rgba(0, 255, 255, 0.4)',
        'glow-purple': '0 0 20px rgba(128, 0, 255, 0.5)',
        'glow-purple-lg': '0 0 30px rgba(128, 0, 255, 0.6), 0 0 60px rgba(128, 0, 255, 0.3)',
      },
    },
  },
  plugins: [],
}


