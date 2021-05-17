<template>
  <div>
    <h1>Shopping cart</h1>

    <b-button-toolbar key-nav aria-label="Toolbar with button groups">
      <b-button variant="primary" @click="$router.push('/')"
        >Continue shopping</b-button
      >
      <b-button variant="primary" @click="$router.push('/checkout')"
        >Go to checkout</b-button
      >
    </b-button-toolbar>
    <div v-if="$store.state.cart.length === 0">
      <b-card
        title="Your cart is empty"
        img-src="https://freepikpsd.com/wp-content/uploads/2019/10/empty-cart-png-Transparent-Images.png"
        img-alt="Card image"
        img-left
        class="mb-3"
      >
        <b-card-text>
          <b-button variant="primary" @click="$router.push('/')"
            >Continue shopping</b-button
          >
        </b-card-text>
      </b-card>
    </div>
    <div v-else>
      <!-- <ol>
        <li v-for="product in $store.state.cart" :key="product.id">
          <b-card
            title="Titel"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Card image"
            img-left
            class="mb-3"
          >
            <b-card-text>
              Some quick example text to build on the card and make up the bulk
              of the card's content.
            </b-card-text>
          </b-card>
        </li>
      </ol> -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>