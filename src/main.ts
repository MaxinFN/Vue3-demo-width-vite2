/*
 * @Author: your name
 * @Date: 2021-08-04 15:36:15
 * @LastEditTime: 2021-08-06 11:21:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v3-ts\src\main.ts
 */
import { createApp } from 'vue'
import Router from './router'
import { store, key } from './store/index'
import Vant, { Toast } from 'vant'
import '@utils/rem'
// import 'lib-flexible'
// import App from './App.vue'
import App from './App'
import '@/assets/reset'
import 'vant/lib/index'
import '@/assets/index'

const app = createApp(App)

// 全局注册方法
app.config.globalProperties.$toast = (msg: string) => {
  return Toast(msg)
}
app.use(Router).use(store, key).use(Vant).mount('#app')
