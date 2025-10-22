import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import * as path from "node:path"

function way(name){
  return path.resolve(__dirname, name)
}

// https://vitejs.dev/config/
export default defineConfig({
    root: __dirname,
  plugins: [react()],
  server: {
    port: 3000
  },
  base: './', 
  build: {
    outDir: '../../build/views',
  },
  resolve: {
    alias: {
      '~': way('src'),
      '@pages': way('src/pages/index'),
      '@icons': way('src/components/icons/index'),
      '@partials': way('src/components/partials/index'),
      '@components': way('src/components/index'),
      '@handlers': way('src/helpers/index'),
      '@hooks': way('src/hooks/index'),
    }
  }
})
