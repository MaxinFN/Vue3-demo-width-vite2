/*
 * @Author: your name
 * @Date: 2021-08-04 15:36:15
 * @LastEditTime: 2021-08-06 11:07:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v3-ts\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import styleImport from 'vite-plugin-style-import'
const path = require('path')
const Resolve = name => path.resolve(__dirname, name);

// https://vitejs.dev/config/
export default defineConfig({
  // alias: {
  //   "@": path.resolve(__dirname, "./src"),
  //   '/@pages/': path.resolve(__dirname,'./src/pages'),
  //   '/@components/': path.resolve(__dirname,'./src/components')
  // },
  // 新版写法，上面是旧版(key: value)写法
  resolve: {
    alias: [
      { find: '@', replacement: Resolve('./src')},
      { find: '@pages', replacement: Resolve('./src/pages')},
      { find: '@utils', replacement: Resolve('./src/utils')}
    ],
    extensions: ['.mjs', '.ts', '.tsx', '.jsx', '.vue', '.css', '.less', '.json']
  },
  plugins: [
    vue(),
    vueJsx(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style/index`
        }
      ]
    })
  ],
  server: {
    host: '127.0.0.1',
    port: 3333,
    strictPort: true,
    open: true
  }
})
