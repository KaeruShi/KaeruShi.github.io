import { defineConfig } from "vite";
import { fileURLToPath } from "url"; // Add this
import path from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";

// Manually define __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: "/",
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  define: {
    "process.env": JSON.stringify(process.env),
  },
  plugins: [react(), svgr(), tailwindcss()],
});
