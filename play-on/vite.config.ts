import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'
import svgr from 'vite-plugin-svgr'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      svgrOptions: {
        exportType: 'named',
      },
      include: '**/*.svg',
    }),
  ],

  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/shared/assets'),
    }
  },

  test: {
    globals: true,                    
    environment: 'jsdom',             
    setupFiles: 'vitest.setup.ts',  
    exclude: [...configDefaults.exclude],
  }
})
