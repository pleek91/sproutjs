import { resolve } from 'path'
import { defineConfig, UserConfig } from 'vite'
import dts from 'vite-plugin-dts'

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
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'core',
    },
  },
  plugins: [dts()],
}))