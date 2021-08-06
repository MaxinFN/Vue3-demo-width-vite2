<!--
 * @Author: your name
 * @Date: 2021-08-04 16:17:57
 * @LastEditTime: 2021-08-06 16:43:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v3-ts\src\components\NavBar.vue
-->
<template>
  <div class="nav-bar">
    <router-link to="/" :class="{ active: active === 'product' }">
      商品列表
    </router-link>
    <router-link to="/shoppingCart" :class="{ active: active === 'shoppingCart' }">
      购物车
      ({{ count }})
    </router-link>
    <router-link to="/swiper-demo" :class="{ active: active === 'swiperDemo' }">
      轮播图
    </router-link>
  </div>
</template>
<script lang="ts">
import{ defineComponent }from 'vue';
export default defineComponent({
  name: "NavBar",
  props: {
    count: Number,
    active: String
  },
  setup: (props, context) => {
  }
})
</script>
<style lang="less" scoped>
.active {
  color: #fff;
  border-radius: 3px;
  padding: 5px;
  background-color: #f40;
}
a {
  padding: 0 10px;
  color: #000;
}

.nav-bar {
  display: inline-block;
  padding: 10px;
  background-color: #ff9800;
}
</style>