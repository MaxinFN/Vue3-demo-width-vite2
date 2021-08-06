/*
 * @Author: your name
 * @Date: 2021-08-05 16:39:00
 * @LastEditTime: 2021-08-05 18:57:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v3-ts\src\pages\demo\index.tsx
 */
import { defineComponent, computed, getCurrentInstance, Fragment  } from 'vue'
import { useStore } from '@/store/index.ts'
import { Product } from '@/interface/index.ts'

export default defineComponent({
  props: {},
  components: {},
  setup(props) {
     //  拿到当前组件 this(ctx)
    const { ctx } = getCurrentInstance()
    const { state, commit } = useStore()
    const shoppingCart = computed(() => {
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
    }
  },
  // render函数在**响应式数据发生更改**时会自动触发（与react类似）
  render () {
    const { shoppingCart, changeShopCount, removeData } = this
    return (<div>
      <h2>Demo购物车</h2>
      <div class="shop-wrapper">
        {
          shoppingCart.map((item: Product) => {
            return (
              <div class="shop-item" key={item.id}>
                <span class="shop-title">
                  { item.title }
                </span>
                <div class="change-button-group">
                  <van-button
                    type="primary" size="small"
                    onClick={() => changeShopCount('reduce', item)}>-</van-button>
                  <div class="shop-item-count">
                    { item.count }
                  </div>
                  <van-button
                    type="primary" size="small"
                    onClick={() => changeShopCount('add', item)}>+</van-button>
                </div>
                <van-button
                  type="danger" size="small"
                  onClick={() => removeData(item)}
                >
                  删除
                </van-button>
              </div>
            )
          })
        }
      </div>
    </div>)
  }
})
