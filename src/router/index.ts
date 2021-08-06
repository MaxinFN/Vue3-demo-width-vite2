/*
 * @Author: your name
 * @Date: 2021-08-04 15:50:21
 * @LastEditTime: 2021-08-06 09:54:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v3-ts\src\router\index.ts
 */
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes.ts'

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
