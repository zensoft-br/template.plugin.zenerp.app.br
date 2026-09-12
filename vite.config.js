import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.jsx",
      formats: ["es"],
      fileName: "plugin",
    },
  },
  server: {
    port: 48291,
    cors: true,
  },
  preview: {
    port: 48291,
    cors: true,
  },
});
