import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://hogar-de-libros-front-zer0.vercel.app",
    setupNodeEvents() {},
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
