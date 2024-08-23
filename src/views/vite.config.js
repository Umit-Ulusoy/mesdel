import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000
  },
  base: './', // Tüm dosya yollarının göreli olmasını sağlar
  build: {
    outDir: 'dist', // Çıktı dizinini belirler
  },
})
