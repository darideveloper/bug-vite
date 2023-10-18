import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({

  // Specify the file types you want to watch for changes
  // In this case, we're including .jsx and .css files
  optimizeDeps: {
    include: ['*.jsx', '*.css'],
  },

  // Enable the Vite React plugin for JSX and TSX support
  plugins: [react()],
});