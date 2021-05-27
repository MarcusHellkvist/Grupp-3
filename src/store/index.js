import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    trending: [],
    books: [],
    genres: [],
    products: [],
    cart: [],
    topTenBooks: [],
    defaultImage:
      "http://jbdiamonds.com/media/catalog/new-pp/placeholder/default/no-img-1000.jpg",
  },
  mutations: {
    fillWithProducts(state, products) {
      state.products = products;
    },
    fetchLocalData(state) {
      console.log("store mutation");
      fetch("products.json")
        .then((response) => response.json())
        .then((data) => {
          state.products = data.products;
        });
    },
    setBooks(state, data) {
      console.log("BOOKS FROM JSON TO STORE");
      state.books = data.books;
      state.genres = data.genres;
      state.trending = data.books.slice(0,8)
      state.topTenBooks = data.books.slice(0, 10);
    },

    deleteProduct(state, id) {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].isbn === id) {
          state.cart.splice(i, 1);
          console.log("item deleted!" + id);

          break;
        }
      }
    },

    addToCart(state, product) {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].isbn === product.isbn) {
          state.cart[i].quantity += 1;
          state.cart[i].total = state.cart[i].price * state.cart[i].quantity;
          console.log("denna produkt ligger redan i varukorgen");
          return;
        }
      }
      product = Object.assign(product);
      product.quantity = 1;
      product.total = product.price;
      state.cart.push(product);
    },

    quantityPlus(state, id) {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].isbn === id) {
          Vue.set(state.cart, i, {
            ...state.cart[i],
            quantity: (state.cart[i].quantity += 1),
            total: state.cart[i].price * state.cart[i].quantity,
          });
        }
      }
    },

    quantityMinus(state, id) {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].isbn === id) {
          // state.cart[i].quantity -= 1;
          // state.cart[i].total = state.cart[i].price * state.cart[i].quantity;
          Vue.set(state.cart, i, {
            ...state.cart[i],
            quantity: (state.cart[i].quantity -= 1),
            total: state.cart[i].price * state.cart[i].quantity,
          });
        }
      }
    },

    clearCart(state) {
      while (state.cart.length > 0) {
        state.cart.pop();
        console.log("clear cart !");
      }
    },
  },
  actions: {
    fetchLocalData({ commit }) {
      fetch("books.json")
        .then((response) => response.json())
        .then((data) => {
          commit("setBooks", data);
        });
    },
  },

  modules: {},
});
