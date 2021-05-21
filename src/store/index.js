import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    defaultImage:
      'http://jbdiamonds.com/media/catalog/new-pp/placeholder/default/no-img-1000.jpg'
  },
  mutations: {
    fillWithProducts(state, products) {
      state.products = products
    },
    fetchLocalData(state) {
      console.log('store mutation')
      fetch('products.json')
        .then((response) => response.json())
        .then((data) => {
          state.products = data.products
        })
    },

    deleteProduct(state, id) {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].productId === id) {
          state.cart.splice(i, 1)
          console.log('item deleted!' + id)

          break
        }
      }
    },

    addToCart(state, product) {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].productId === product.productId) {
          state.cart[i].quantity += 1
          state.cart[i].total = state.cart[i].price * state.cart[i].quantity
          console.log('denna produkt ligger redan i varukorgen')
          return
        }
      }
      product.quantity = 1
      product.total = product.price
      state.cart.push(product)
    },

    // quantity(state, id) {
    //   for (let i = 0; i < state.cart.length; i++) {
    //     if (state.cart[i].productId === id) {
    //       console.log()

    //     }
    //   }
    // }

    clearCart(state) {
      while (state.cart.length > 0) {
        state.cart.pop()
        console.log('clear cart !')
      }
    }
  },
  actions: {
    fetchLocalData({ commit }) {
      console.log('store action')
      commit('fetchLocalData')
    }
  },

  modules: {}
})
