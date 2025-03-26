import { resolve } from "node:path";

import tailwindcss from "@tailwindcss/vite";
// import viteLegacyPlugin from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  root: resolve(__dirname, "src"),
  plugins: [
    tailwindcss(),
    react(),
    // viteLegacyPlugin({
    //   targets: ["ie >= 11"],
    // }),
    viteSingleFile(),
  ],
  build: {
    outDir: resolve(__dirname, "dist/html"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src", "index.html"),
      },
    },
  },
});
