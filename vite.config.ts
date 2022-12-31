import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({
    insertTypesEntry: true,
    outputDir: 'dist/types',
  })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
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

  test: {
    globals: true,
    environment: 'jsdom',
  }
})
