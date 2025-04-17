import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.svg"],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react-vendor";
            if (id.includes("moment")) return "moment-vendor";
            if (id.includes("@fullcalendar")) return "fullcalendar-vendor";
            if (id.includes("xlsx")) return "xlsx-vendor";
            if (id.includes("jspdf")) return "pdf-vendor";
            if (id.includes("html2canvas")) return "pdf-vendor";
            if (id.includes("lodash-es")) return "lodash-vendor";
            return "vendor";
          }
        },
      },
    },
  },
});
