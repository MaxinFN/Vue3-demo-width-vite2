/*
 * @Author: your name
 * @Date: 2021-08-04 15:36:15
 * @LastEditTime: 2021-08-05 15:46:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v3-ts\src\shims-vue.d.ts
 */
import { DefineComponent } from 'vue'

// 在开发过程中我们会发现在ts文件中引入vue文件会提示无法找到对应模块的报错。这是应为ts文件无法识别到vue文件
declare module '*.vue' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
