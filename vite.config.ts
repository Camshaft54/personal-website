import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
    publicDir: 'public',
    build: {
        outDir: 'dist',
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: [
                        'react',
                        'react-dom',
                        '@chakra-ui/react',
                        'next-themes',
                        'framer-motion',
                        'react-router-dom',
                        'react-icons'
                    ]
                }
            }
        }
    },
    plugins: [react(), tsconfigPaths()],
})
