import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import svgr from 'vite-plugin-svgr';
import inject from "@rollup/plugin-inject";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    inject({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    // svgr(),
    react()
  ],
  server: {
    open: true
  }
})
