/*
 * @Author: your name
 * @Date: 2021-08-04 15:36:15
 * @LastEditTime: 2021-08-05 17:33:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v3-ts\src\main.ts
 */
import { createApp } from 'vue'
import Router from './router'
import '@/assets/index.less'
import Vant from 'vant'
import 'vant/lib/index.css'
// import App from './App.vue'
import App from './App.tsx'
import { Toast } from 'vant'
import { store, key } from './store/index'

const app = createApp(App)
// 全局注册方法
app.config.globalProperties.$toast = (msg: string) => {
  return Toast(msg)
}
app.use(Router).use(store, key).use(Vant).mount('#app')
