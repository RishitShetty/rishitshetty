import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  let componentTaggerPlugin = null;
  
  // Dynamically import ESM-only package in development mode
  if (mode === 'development') {
    try {
      const { componentTagger } = await import('lovable-tagger');
      componentTaggerPlugin = componentTagger();
    } catch (error) {
      console.warn('Failed to load lovable-tagger:', error);
    }
  }
  
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      componentTaggerPlugin,
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});