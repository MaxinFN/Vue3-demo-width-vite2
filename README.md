<!--
 * @Author: your name
 * @Date: 2021-08-04 15:36:15
 * @LastEditTime: 2021-08-06 09:40:37
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


## 插件
- 支持less
```text
$ yarn add less less-loader -D
注意这里有个坑，less 和 less-loader 需要写到 devDependencies 里面，否则运行会报错。
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