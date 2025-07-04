import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/AlekStore/', // Cambiado para coincidir con el nombre del repositorio
  plugins: [react()],
})
