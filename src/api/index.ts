/*
 * @Author: your name
 * @Date: 2021-08-04 17:24:01
 * @LastEditTime: 2021-08-05 14:46:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v3-ts\src\api\index.ts
 */
import { Product } from '@/interface/index'
export const apiGetProducts = () => {
  return new Promise<Product[]>((resolve) => {
    // 模拟接口请求
    const data: Array<any> = [
      {
        id: 12344321,
        title: '白菜',
        price: 123.0,
        count: 1
      },
      {
        id: 12344322,
        title: '豆角',
        price: 123.4,
        count: 1
      },
      {
        id: 12344323,
        title: '凹凸曼',
        price: 123.45,
        count: 1
      }
    ]
    setTimeout(() => {
      resolve(data)
    }, 300)
  })
}
