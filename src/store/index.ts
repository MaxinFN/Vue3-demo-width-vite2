/*
 * @Author: your name
 * @Date: 2021-08-04 18:35:36
 * @LastEditTime: 2021-08-05 17:32:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v3-ts\src\store\index.ts
 */
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { Product } from '@/interface'

export interface State {
  shoppingCart: Product[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    shoppingCart: [] // 购物车列表
  },
  getters: {
    // 是否在购物车中已存在
    isInCart(state) {
      return (data: Product) => {
        return state.shoppingCart.findIndex((item) => item.id === data.id) > -1 ? true : false
      }
    }
  },
  mutations: {
    // 添加购物车
    ADD_TO_CARD(state, data) {
      state.shoppingCart.push(data)
    },
    // 更新购物车数量
    CHANGE_COUNT(state, { type, data }) {
      return state.shoppingCart.map((item) => {
        if (data.id === item.id) {
          item.count += type === 'add' ? 1 : -1
        }
        return item
      })
    },
    // 删除购物车
    REMOVE_BY_ID(state, id) {
      state.shoppingCart = state.shoppingCart.filter((item) => item.id !== id)
    }
  }
})

export function useStore () {
  // 通过key给store提供类型
  return baseUseStore(key)
}
