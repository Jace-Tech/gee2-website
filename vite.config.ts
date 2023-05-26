import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import RubyPlugin from 'vite-plugin-ruby'
import inject from "@rollup/plugin-inject";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    inject({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    // RubyPlugin(),
    react()
  ],
  server: {
    open: true
  }
})
