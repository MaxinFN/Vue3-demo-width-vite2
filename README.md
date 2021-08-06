<!--
 * @Author: your name
 * @Date: 2021-08-04 15:36:15
 * @LastEditTime: 2021-08-06 11:11:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v3-ts\README.md
-->
# Vue3 + Ts
## 项目创建
- 脚手架创建（vite）
```text
# npm 6.x 版本
npm init @vitejs/app my-vue-app --template vue-ts

# yarn
yarn create @vitejs/app my-vue-app --template vue-ts

```

- VueRoute安装
```text
$ yarn add vue-router@4.0.1
```

- Vuex安装
```text
$ npm install vuex@next --save
$ yarn add vuex@next --save
```

## 插件
- 支持less
```text
$ yarn add less less-loader -D
注意这里有个坑，less 和 less-loader 需要写到 devDependencies 里面，否则运行会报错。
```

- 支持sass
```text
$ npm i sass -save
```

- 移动端Rem适配
```text
$ npm install postcss-pxtorem -D

// postcss.config.js
module.exports = {
  "plugins": {
    "postcss-pxtorem": {
      rootValue: 16, // Vant 官方根字体大小是 37.5
      propList: ['*'],
      selectorBlackList: ['.norem'] // 过滤掉.norem-开头的class，不进行rem转换
    }
  }
}

// rem.ts
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
```

- vite支持jsx
```text
yarn add @vitejs/plugin-vue-jsx -D

// vite.config.js
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    vueJsx()
  ]
})

```

## 挖坑
- 正确引入模块会一直显示红色波浪线
vscode安装插件---Volar