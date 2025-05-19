// postcss.config.js (ESM для Vite)
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default {
  plugins: [
    tailwindcss,            // Подключаем Tailwind
    autoprefixer,            // Вендорные префиксы
    ...(process.env.NODE_ENV === 'production' ? [cssnano()] : []), // Минификация только на build
  ],
};
