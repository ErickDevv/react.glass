import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      //@ts-ignore
      entry: resolve(__dirname, 'src/index.ts'),
      //@ts-ignore
      name: 'react.glass',
      fileName: (format) => `ReactGlass.${format}.js`,
    }
  },
  //@ts-ignore
  rollupOptions: {
    external: ['react', 'react-dom'],
    output: {
      globals: {
        react: 'React',
      }
    }
  },
  plugins: [react()]
})
