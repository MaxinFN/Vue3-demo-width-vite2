<!--
 * @Author: your name
 * @Date: 2021-08-04 15:55:37
 * @LastEditTime: 2021-08-04 17:16:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v3-ts\src\pages\Home.vue
-->
<template>
  <div>
    home
  </div>
</template>
<script lang="ts">
import{ defineComponent, onMounted }from 'vue';
export default defineComponent({
  name: "Home",
  setup: () => {
    onMounted(() => {
      console.log('this', this)
    })
  }
})
</script>
<style lang="less" scoped>

</style>