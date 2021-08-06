<!--
 * @Author: your name
 * @Date: 2021-08-04 17:21:08
 * @LastEditTime: 2021-08-05 17:28:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v3-ts\src\pages\Product.vue
-->
<template>
  <div class="products">
    <h2>商品列表</h2>
    <!-- 在v3里面，v-for,v-if已经可以这么干了，v-if总是优先于v-for -->
    <div class="product-list"
         v-if="!loading"
         v-for="(item,index) in products"
         :key="index"
      >
      <span class="name">{{item.title}}</span>
      <span class="price">{{item.price}}元</span>
      <van-button
        type="primary"
        size="small"
        @click="addHandle(item)"
      >加入购物车</van-button>
    </div>
    <van-loading v-else />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref }from 'vue'
import { useStore } from '@/store/index'
import { Product } from '@/interface/index'
import { apiGetProducts } from '@/api/index'

export default defineComponent({
  name: "Products",
  setup(){
    const products= ref<Product[]>([])
    const loading = ref(false)
    const { commit, getters } = useStore()
    // 获取产品列表
    const getProducts = async () => {
      loading.value = true
      products.value = await apiGetProducts()
      loading.value = false
    }
    const addToCart = (product: Product) => {
      commit('ADD_TO_CARD', {
        title: product.title,
        count: 1,
        id: product.id
      })
    }
    const isInCart = (product: Product) => {
      return getters.isInCart(product)
    }
    getProducts()
    return {
      loading, // 加载状态
      products, // 商品列表
      addToCart,
      isInCart
    }
  },
  methods:{
    addHandle (product: Product): void {
      // 如果已经存在
      if (this.isInCart(product)) return this.$toast('已存在');
      // 加入购物车
      this.addToCart(product)
      this.$toast('添加成功')
    }
  }
})
</script>
