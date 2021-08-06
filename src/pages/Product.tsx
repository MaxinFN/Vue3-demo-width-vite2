/*
 * @Author: your name
 * @Date: 2021-08-05 17:52:01
 * @LastEditTime: 2021-08-05 18:58:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v3-ts\src\pages\Product.tsx
 */
import { defineComponent, ref }from 'vue'
import { useStore } from '@/store/index'
import { Product } from '@/interface/index'
import { apiGetProducts } from '@/api/index'

export default defineComponent({
  name: "Products",
  props: {},
  components: {},
  setup (props, ctx) {
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
      loading,
      products,
      isInCart,
      addToCart
    }
  },
  methods: {
    addHandle (product: Product): void {
      // 如果已经存在
      if (this.isInCart(product)) return this.$toast('已存在');
      // 加入购物车
      this.addToCart(product)
      this.$toast('添加成功')
    }
  },
  render () {
    const { loading, products, addHandle } = this
    const productList = () => (
      <>
        {
          products.map((item: Product) => {
            return (
              <div class="product-list" key={item.id}>
                <span class="name">{item.title}</span>
                <span class="price">{item.price}元</span>
                <van-button
                  type="primary"
                  size="small"
                  onClick={() => addHandle(item)}
                >加入购物车</van-button>
              </div>
            )
          })
        }
      </>
    )
    return (
      <div class="products">
        {
          loading ? <van-loading /> : productList()
        }
      </div>
    )
  }
})
