// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 8888,
  },
  devToolbar: {
    enabled: false,
  },
  outDir: "./.dist",
  build: {
    inlineStylesheets: "never",
    format: "file",
    assets: "inc",
  },
  vite: {
    esbuild: { legalComments: "none" },
    build: {
      rollupOptions: {
        output: {
          hashCharacters: "base36",
          assetFileNames: "inc/[hash:8].[ext]",
        },
      },
    },
    plugins: [tailwindcss()],
  },
});
