<template>
  <div>
    <h1>Shopping cart</h1>
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
        <b-list-group-item
          v-for="product in cartArray"
          :key="product.productId"
        >
          <b-card
            :productId="product.productId"
            :title="product.name"
            :img-src="product.productImage"
            img-alt="Card image"
            img-left
            class="mb-3"
          >
            <b-card-text>
              <p>{{ product.description }}</p>
              <!-- <label for="demo-sb">Inline spin button</label> -->
              <b-form-spinbutton
                id="demo-sb"
                :v-model="value"
                placeholder="1"
                @click="test(value, product.price)"
                inline
              ></b-form-spinbutton>
              <div>
                <!-- <p>{{ sum }}</p> -->
                <p>Pris: {{ product.price }}</p>

                <b-icon
                  variant="danger"
                  icon="x-circle"
                  @click="deleteProduct(product.productId)"
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
    this.cartArray = this.$store.state.cart;
  },
  computed: {},
  data() {
    return {
      cartArray: null,
      value: 1,
      sum: null,
    };
  },
  methods: {
    test(value, price) {
      console.log("det funkar");
      this.sum = value * price;
    },
    deleteProduct(id) {
      this.$store.commit("deleteProduct", id);
    },
  },
};
</script>

<style>
</style>