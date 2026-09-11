import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.js",
      name: "TenantPlugin",
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
