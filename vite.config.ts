import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';
import packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'es2020',
    lib: {
      entry: path.resolve(__dirname, 'src/WeatherSvg/index.ts'),
      name: 'react-weather-icons',
      formats: ['es', 'cjs'],
      fileName: (format) => `react-weather-icons.${format}.${format === 'cjs' ? 'cjs' : 'js'}`,
    },
    rollupOptions: {
      external:[
        ...Object.keys(packageJson.peerDependencies),
        'react/jsx-runtime',
        '@iconify/react',
        '@emotion/sheet',
        '@emotion/cache',
        '@emotion/serialize',
        '@emotion/utils',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          '@emotion/styled': '@emotion/styled',
          '@emotion/react': '@emotion/react',
          '@emotion/sheet': '@emotion/sheet',
          '@emotion/cache': '@emotion/cache',
          '@emotion/serialize': '@emotion/serialize',
          '@emotion/utils': '@emotion/utils',
        }
      }
    },
    sourcemap: true,
    minify: true,
  },
  plugins: [react(), dts({
    rollupTypes: false,
    root: path.resolve(__dirname, './'),
    outDir: path.resolve(__dirname, './dist/types'),
    include: [path.resolve(__dirname, './src/WeatherSvg')],
    exclude: ['node_modules/**', 'framer-motion'],
    clearPureImport: true,
    copyDtsFiles: true,
    insertTypesEntry: false,
  })],
})
