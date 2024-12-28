import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/SwiftSite/',
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  server: {
    host: "127.0.0.1",
  },
});
