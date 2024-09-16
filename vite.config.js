import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: '/ocean.github.io/',
    plugins: [react()],
    css: {
        postcss: './postcss.config.js',
    },
});