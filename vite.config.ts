import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'contact',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
        "./Contact": "./src/components/contact/ContactHome.tsx",
        "./ContactDetails": "./src/components/contact/ContactDetails.tsx"
      },
      shared: ['react', 'react-dom', 'react-router-dom']
    })],
  build:{
    target:['edge90','chrome90','firefox90','safari15'],
    modulePreload: false,
    minify: false,
    cssCodeSplit: false
  }
})
