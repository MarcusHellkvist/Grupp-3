<template>
  <div>
    <h1>Shopping cart</h1>

    <!-- <b-button-toolbar key-nav aria-label="Toolbar with button groups">
      <b-button variant="primary" @click="$router.push('/')"
        >Continue shopping</b-button
      >
      <b-button variant="primary" @click="$router.push('/checkout')"
        >Go to checkout</b-button
      >
    </b-button-toolbar> -->
    <!-- <div v-if="$store.state.cart.length === 0"> -->
    <div v-if="cartArray.length === 0">
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
      <b-list-group>
        <b-list-group-item v-for="product in cartArray" :key="product.id">
          <b-card
            :productId="product.id"
            :title="product.name"
            :img-src="product.photo"
            img-alt="Card image"
            img-left
            class="mb-3"
          >
            <b-card-text>
              <p>{{ product.description }}</p>
              <!-- <label for="sb-inline">Inline spin button</label> -->
              <!-- <b-form-spinbutton
                :id="product.id"
                :v-model="value"
                inline
              ></b-form-spinbutton> -->
              <div>
                Pris: {{ product.price }}
                <b-icon
                  variant="danger"
                  icon="x-circle"
                  @click="deleteProduct(product.id)"
                ></b-icon>
              </div>
            </b-card-text>
          </b-card>
        </b-list-group-item>
        <b-button-toolbar key-nav aria-label="Toolbar with button groups">
          <b-button variant="primary" @click="$router.push('/')"
            >Continue shopping</b-button
          >
          <b-button variant="primary" @click="$router.push('/checkout')"
            >Go to checkout</b-button
          >
        </b-button-toolbar>
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    //glöm inte att ändra product till cart
    this.cartArray = this.$store.state.cart;
  },
  computed: {},
  data() {
    return {
      cartArray: null,
      value: 1,
    };
  },
  methods: {
    test() {},
    deleteProduct(id) {
      this.$store.commit("deleteProduct", id);
      this.sum = 0;
      this.total();
      console.log("ready to delete item" + id);
    },
  },
};
</script>

<style>
</style>