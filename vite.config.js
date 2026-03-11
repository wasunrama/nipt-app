import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // In dev: forward /api calls from Vite (port 5173) → Express (port 3001)
      "/api": "http://localhost:3001",
    },
  },
});
