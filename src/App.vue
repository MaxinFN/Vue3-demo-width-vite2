<template>
  <h2>demo</h2>
  <nav-bar :count="count" :active="activeRouteName"></nav-bar>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store/index'
import NavBar from './components/NavBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavBar
  },
  setup (props, context) {
    const store = useStore()
    const route = useRoute()

    const count = computed((): number => {
      return store.state.shoppingCart.length
    })

    const activeRouteName = computed((): string => {
      return route.name?.toString() || ''
    })

    return {
      count,
      activeRouteName
    }
  }
})
</script>
