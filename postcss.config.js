/*
 * @Author: your name
 * @Date: 2021-08-06 10:26:34
 * @LastEditTime: 2021-08-06 14:43:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v3-ts\postcss.config.js
 */
// postcss.config.js
module.exports = {
  "plugins": {
    "autoprefixer": {},
    "postcss-pxtorem": {
      rootValue: 16, // Vant 官方根字体大小是 37.5
      propList: ['*'],
      selectorBlackList: ['.norem'] // 过滤掉.norem-开头的class，不进行rem转换
    }
  }
}
