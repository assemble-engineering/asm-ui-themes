import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "/main.ts"),
      name: "asm-ui",
    },
  },
});