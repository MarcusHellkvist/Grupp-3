import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    fillWithProducts(state, products) {
      state.products = products;
    },

    deleteProduct(state, id) {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].productId === id) {
          state.cart.splice(i, 1);
          console.log("item deleted!" + id);

          break;
        }
      }
    },

    addToCart(state, product) {
      state.cart.push(product);
    },
    clearCart(state) {
      while (state.cart.length > 0) {
        state.cart.pop();
        console.log("clear cart !");
      }
    },
  },
  actions: {},
  modules: {},
});
