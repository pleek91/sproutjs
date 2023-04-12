import { resolve } from 'path'
import { defineConfig, UserConfig } from 'vite'

export default defineConfig((): UserConfig => ({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
  build: {
    sourcemap: true,
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'en-US',
    },
  },
}))