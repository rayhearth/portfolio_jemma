import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'

// import path from 'path'
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const _dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({


  plugins: [
    react(),
    Pages({
      dirs: 'src/pages'
    }

    )
  ]
})
