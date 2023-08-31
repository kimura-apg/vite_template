import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig({
  root: './src',

  plugins: [
    checker({
      typescript: true,
      // eslint: {
      //   overlay: {
      //     files: './src/**/*.vue'
      //   },
      // }
    })
  ],
})