import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

import { resolve } from 'path';

export default defineConfig({
    plugins: [
        handlebars({
            partialDirectory: [
                resolve(__dirname, 'src/partials'), // Основная директория для всех partials
            ],
        }),
       
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                portfolio: resolve(__dirname, 'portfolio.html'),
                forDesigners: resolve(__dirname, 'for-designers.html'),
                contacts: resolve(__dirname, 'contacts.html'),
                project3D: resolve(__dirname, '3d-project.html'),
                feedbackAndGuarantees: resolve(__dirname, 'feedback-and-guarantees.html'),
                about: resolve(__dirname, 'about.html'),
                feedback: resolve(__dirname, 'feedback.html'),
                project: resolve(__dirname, 'project.html'),
                service: resolve(__dirname, 'service.html'),
            },
            output: {
                // Убираем assetFileNames, чтобы не возникало конфликтов
                assetFileNames: '[name].[hash][extname]',
                chunkFileNames: 'assets/[name].[hash].js', // Обработка JS
                entryFileNames: 'assets/[name].[hash].js', // Обработка JS
                format: 'es',
            },
        },
    },
});
