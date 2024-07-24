import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    build: {
        terserOptions: {
            compress: {
                drop_console: true,
            },
        },
    },
})
