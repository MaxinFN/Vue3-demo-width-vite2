/*
 * @Author: your name
 * @Date: 2021-08-04 15:36:15
 * @LastEditTime: 2021-08-05 16:35:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v3-ts\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import styleImport from 'vite-plugin-style-import'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    "@": path.resolve(__dirname, "./src"),
    '/@pages/': path.resolve(__dirname,'./src/pages'),
    '/@components/': path.resolve(__dirname,'./src/components')
  },
  plugins: [
    vue(),
    vueJsx(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`
        }
      ]
    })
  ],
  server: {
    port: 3333
  }
})
