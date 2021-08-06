/*
 * @Author: your name
 * @Date: 2021-08-06 09:50:56
 * @LastEditTime: 2021-08-06 09:53:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v3-ts\src\router\routes.ts
 */
import { defineAsyncComponent } from 'vue'
import { RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

import Product from '@/pages/Product.tsx'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'product',
    component: defineAsyncComponent(
      () =>
        new Promise((resolve) => {
          resolve(Product)
        })
    )
  },
  {
    path: '/shoppingCart',
    name: 'shoppingCart',
    // component: () => import('@/pages/ShoppingCart/index.vue')
    component: defineAsyncComponent(() => import('@/pages/ShoppingCart/index.tsx'))
  }
]
// 路由守卫和之前的实现方式一致 此处只是做了一个demo仅供演示
// router.beforeEach(
//   (
//     to: RouteLocationNormalized,
//     from: RouteLocationNormalized,
//     next: NavigationGuardNext
//   ) => {
//   // 获取userToken，根据业务场景可由localStorage也可由cookie中获取
//   const user = localStorage.getItem("user");
//   // 路由守卫判断
//   if (to.meta.type === "login" && user) {
//     next({ name: "home" });
//     return;
//   }

//   if (to.meta.type === "home" && !user) {
//     next({ name: "login" });
//     return;
//   }

//   next();
// });
export default routes