import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'

export default defineConfig({
  plugins: [sveltekit()],
  // allows vite access to ./posts
  server: {
    fs: {
      allow: ['./']
    }
  },
  build: {
    outDir: './docs', // relative to index.html
    // emptyOutDir: true, // true if outDir is inside root. if outDir is not inside root, uncomment this.
  }
})
