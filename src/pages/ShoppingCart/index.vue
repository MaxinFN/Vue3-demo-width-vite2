<!--
 * @Author: your name
 * @Date: 2021-08-04 16:03:53
 * @LastEditTime: 2021-08-05 17:02:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v3-ts\src\pages\ShoppingCart\index.vue
-->
<template>
  <div>
    <h2>购物车</h2>
    <div class="shop-wrapper">
      <div class="shop-item" v-for="item in shoppingCart" :key="item.id">
        <span class="shop-title">
          {{ item.title }}
        </span>
        <div class="change-button-group">
          <van-button type="primary" size="small" @click="changeShopCount('reduce', item)">-</van-button>
          <div class="shop-item-count">{{ item.count }}</div>
          <van-button type="primary" size="small"  @click="changeShopCount('add', item)">+</van-button>
        </div>
        <van-button type="danger" size="small" @click="removeData(item)">删除</van-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import{ defineComponent, computed, getCurrentInstance }from 'vue'
import { useStore } from '@/store/index'
import { Product } from '@/interface/index'
export default defineComponent({
  name: "ShoppingCart",
  setup: () => {
    console.log('getCurrentInstance', getCurrentInstance)
     //  拿到当前组件 this(ctx)
    const { ctx } = getCurrentInstance()
    console.log('ctx----', ctx)
    const { state, commit } = useStore()
    const shoppingCart = computed(()=>{
      return state.shoppingCart
    })
    const changeShopCount = (type: string, data: Product) => {
      if (type === 'reduce' && data.count <= 1) return
      commit('CHANGE_COUNT', { type, data })
    }
    const removeCart = (data: Product) => {
      commit('REMOVE_BY_ID', data.id)
    }
    return {
      shoppingCart,
      changeShopCount,
      removeCart
    }
  },
  methods: {
    removeData (data: Product) {
      this.removeCart(data)
      this.$toast('删除成功')
    }
  }
})
</script>