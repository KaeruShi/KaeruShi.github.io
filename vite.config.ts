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
  base: process.env.VITE_BASE_PATH || "/KaeruShi.github.io",
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  plugins: [react(), svgr(), tailwindcss()],
});
