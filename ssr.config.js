import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import laravel from "laravel-vite-plugin";
import { sveltePreprocess } from "svelte-preprocess";

export default defineConfig({
  plugins: [
    laravel({
      input: ["resources/js/app.js", "resources/css/app.css"],
      ssr: "resources/js/ssr.js", // Enable SSR
      publicDirectory: "public",
      buildDirectory: "resources/bootstrap",
      refresh: true,
    }),
    svelte({ preprocess: sveltePreprocess({ typescript: true }) }),
  ],
  build: {
    ssr: true, // Enable SSR
    outDir: "resources/bootstrap",
    rollupOptions: {
      input: "resources/js/ssr.js",
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name][extname]",
        manualChunks: undefined, // Disable automatic chunk splitting
      },
    },
  },
});
