import { defineConfig } from "vite";
import path from "path";
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/util/css-variables.css',
          dest: ''
        }
      ]
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "/main.ts"),
      name: "amazon-ui",
    },
  },
});
