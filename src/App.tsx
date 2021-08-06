/*
 * @Author: your name
 * @Date: 2021-08-05 16:49:35
 * @LastEditTime: 2021-08-05 16:56:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v3-ts\src\appdemo.tsx
 */
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store/index'
import NavBar from './components/NavBar.vue'


export default defineComponent({
  props: {},
  components: {
    NavBar
  },
  setup(props, ctx) {
    const store = useStore()
    const route = useRoute()

    const count = computed((): number => {
      return store.state.shoppingCart.length
    })

    const activeRouteName = computed((): string => {
      return route.name?.toString() || ''
    })

    return () => (
      <div>
        <h2>Vue Shopping Demo</h2>
        <nav-bar
          count={count.value}
          active={activeRouteName.value}
        >
        </nav-bar>
        <div>
          <router-view></router-view>
        </div>
      </div>
    )
  }
})
