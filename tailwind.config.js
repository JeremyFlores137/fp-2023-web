/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: { roboto: ['Roboto Serif', 'serif'] },
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'white-xl': '0 35px 60px -15px rgba(255, 255, 255, 0.3)',
      },
      backgroundImage: {
        circularLight:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#FFF 5px,#FFF 100px)',

        circularDark:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#191919 8px,#191919 100px)',

        circularLightLg:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#FFF 5px,#FFF 80px)',

        circularDarkLg:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#191919 8px,#191919 80px)',

        circularLightMd:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#FFF 5px,#FFF 60px)',

        circularDarkMd:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#191919 8px,#191919 60px)',

        circularLightSm:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#FFF 5px,#FFF 40px)',

        circularDarkSm:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 40px)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        border: 'border 4s ease infinite',
      },
      keyframes: {
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
    },
    screens: {
      '3xl': { max: '10000px' },

      // => @media (max-width: 10000px) {...}

      '2xl': { max: '2500px' },

      // => @media (max-width: 1535px) {...}

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) {...}

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) {...}

      md: { max: '767px' },
      // => @media (max-width: 767px) {...}

      sm: { max: '639px' },
      // => @media (max-width: 639px) {...}

      xs: { max: '479px' },
      // => @media (max-width: 479px) {...}

      xxs: { max: '370px' },
    },
  },
  plugins: [],
};
