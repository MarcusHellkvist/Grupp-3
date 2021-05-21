import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import Product from "../views/Product.vue";
import Category from "../views/Category.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/category/:categoryId",
    name: "Category",
    component: Category,
  },
  {
    path: "/product/:productId",
    name: "Product",
    component: Product,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
