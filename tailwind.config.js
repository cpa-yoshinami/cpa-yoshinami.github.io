/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  // Always generate common spacing utilities so they can be written directly in HTML
  // without requiring them to exist in source files before build.
  safelist: [
    {
      // padding and margin utilities (common spacing keys) + px
      pattern:
        /^(?:p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr)-(?:0|px|1|2|3|4|5|6|8|10|12|15|18|30|88)$/,
      variants: ['sm', 'md', 'lg', 'xl'],
    },
    {
      // negative margin variants
      pattern: /^-(?:m|mx|my|mt|mb|ml|mr)-(?:1|2|3|4|5|6|8|10|12|15|18|30|88)$/,
      variants: ['sm', 'md', 'lg', 'xl'],
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Noto Sans JP',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e6f3',
          200: '#b3cde3',
          300: '#8cb3d4',
          400: '#6699c4',
          500: '#4a6fa5',
          600: '#3d5a91',
          700: '#2f457d',
          800: '#233569',
          900: '#1a2554',
        },
        secondary: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        accent: {
          500: '#ff5722',
          600: '#f4511e',
          700: '#d84315',
        },
        surface: {
          DEFAULT: '#ffffff',
          dark: '#f5f5f5',
        },
        error: {
          500: '#d32f2f',
          600: '#c62828',
          700: '#b71c1c',
        },
      },
      boxShadow: {
        'material-1': '0 2px 4px rgba(0,0,0,0.12)',
        'material-2': '0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)',
        'material-3': '0 8px 16px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.08)',
        'material-4': '0 16px 32px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        material: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      spacing: {
        15: '3.75rem',
        18: '4.5rem',
        30: '7.5rem',
        88: '22rem',
      },
      borderRadius: {
        material: '4px',
        'material-lg': '8px',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      lineHeight: {
        tight: 1.3,
        normal: 1.6,
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.btn-material': {
          '@apply inline-flex items-center gap-2 px-6 py-3 rounded-material font-medium text-sm uppercase tracking-wide transition-all duration-150 ease-material':
            {},
        },
        '.btn-primary': {
          '@apply bg-primary-500 text-white shadow-material-1 hover:bg-primary-700 hover:shadow-material-2':
            {},
        },
        '.btn-outline': {
          '@apply bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-500':
            {},
        },
        '.btn-large': {
          '@apply px-8 py-4 text-base': {},
        },
        '.card-material': {
          '@apply bg-white rounded-material-lg shadow-material-1 p-8 mb-8 transition-shadow duration-300 hover:shadow-material-2':
            {},
        },
        '.nav-link': {
          '@apply text-secondary-900 font-normal px-4 py-2 rounded-material transition-all duration-150 hover:bg-primary-400 hover:text-white':
            {},
        },
        '.nav-link-active': {
          '@apply bg-primary-400 text-white': {},
        },
        '.section-padding': {
          '@apply py-12': {},
        },
        '.section-padding-mobile': {
          '@apply py-6': {},
        },
        '.container-custom': {
          '@apply max-w-6xl mx-auto px-4': {},
        },
        '.text-gradient': {
          '@apply bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent':
            {},
        },
        '.hero-overlay': {
          '@apply absolute inset-0 bg-gradient-to-br from-primary-500/80 to-primary-700/60': {},
        },
        '.timeline-icon': {
          '@apply flex-shrink-0 w-15 h-15 bg-primary-500 rounded-full flex items-center justify-center shadow-material-2':
            {},
        },
        '.service-icon': {
          '@apply w-16 h-16 object-contain mb-6': {},
        },
        '.form-input': {
          '@apply w-full px-3 py-3 border border-secondary-300 rounded-material text-base transition-all duration-150 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20':
            {},
        },
        '.form-label': {
          '@apply block mb-2 text-secondary-900 font-medium': {},
        },
        '.required': {
          '@apply text-error-500': {},
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
