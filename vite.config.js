import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { sveltePreprocess } from "svelte-preprocess";
export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/app.js", "resources/css/app.css"],
            publicDirectory: "public",
            buildDirectory: "build",
            refresh: true,
        }),
        svelte({
            preprocess: [sveltePreprocess({ typescript: false })],
        }),
    ],
    build: {
        manifest: true, // Generate manifest.json file
        outDir: "public/build",
        emptyOutDir: true,
        rollupOptions: {
            input: ["resources/js/app.js", "resources/css/app.css"],
            output: {
                entryFileNames: "assets/[name].js",
                chunkFileNames: "assets/[name].js",
                assetFileNames: "assets/[name].[ext]",
                manualChunks: undefined, // Disable automatic chunk splitting
            },
        },
    },
    server: {
        hmr: {
            host: "localhost",
        },
        host: "localhost",
        port: 3200,
    },
});