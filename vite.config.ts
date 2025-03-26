import { resolve } from "node:path";

import tailwindcss from "@tailwindcss/vite";
import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  plugins: [
    tailwindcss(),
    react(),
    legacy({
      targets: ["ie >= 11"],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src", "index.html"),
      },
    },
  },
});
