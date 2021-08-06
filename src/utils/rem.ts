/*
 * @Author: your name
 * @Date: 2021-08-06 11:02:21
 * @LastEditTime: 2021-08-06 11:10:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v3-ts\src\utils\rem.ts
 */
// 注意此值要与 postcss.config.js 文件中的 rootValue保持一致
const baseSize = 16
function initRem () {
  // 当前页面宽度相对于 375宽的缩放比例，可根据自己需要修改,一般设计稿都是宽750(图方便可以拿到设计图后改过来)。
  const scale = document.documentElement.clientWidth / 1920
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}
initRem()
window.onresize = function () {
  initRem()
  console.log('init rem', baseSize)
}