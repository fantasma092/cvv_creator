// tailwind.config.js (ESM для Vite)
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        github: "url('/src/assets/github.svg')",
      },
      colors: {
        primary: '#1E3A8A',
        secondary: '#F59E0B',
        danger: '#EF4444',
        success: '#10B981',
      },
      spacing: {
        '14': '3.5rem',
        '28': '7rem',
      },
    },
  },
  plugins: [],
};
