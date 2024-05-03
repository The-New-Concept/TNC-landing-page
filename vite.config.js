import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
        products: './products.html',
        contactus: './contact-us.html',
        // ...
        // List all files you want in your build
      }
    }
  }
})
