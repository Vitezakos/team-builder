import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
  base: "./",
  server: {
    proxy: {
      "/riot-api": {
        target: "https://europe.api.riotgames.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/riot-api/, ""),
      },
    },
  },
});
