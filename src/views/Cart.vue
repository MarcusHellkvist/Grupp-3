<template>
  <div>
    <h1>Shopping cart</h1>
    <div v-if="this.$store.state.cart.length === 0">
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
          v-for="product in this.$store.state.cart"
          :key="product.photo"
        >
          <b-card
            :productId="product.productId"
            :title="product.name"
            :img-src="product.productImage"
            img-alt="Card image"
            img-left
            img-height="150"
            img-width="250"
            class="mb-3"
          >
            <b-card-text>
              <p>{{ product.description }}</p>

              <div>
                <b-row>
                  <b-col
                    >Antal:
                    <b-icon
                      v-if="product.quantity >= 2"
                      variant="Primary"
                      icon="file-minus"
                      @click="quantityMinus(product.productId)"
                    ></b-icon>
                    {{ product.quantity }}
                    <b-icon
                      variant="Primary"
                      icon="file-plus"
                      @click="quantityPlus(product.productId)"
                    ></b-icon>
                  </b-col>

                  <b-col>Pris: {{ product.price }}</b-col>
                  <b-col>Total: {{ product.total }}</b-col>
                  <b-col>
                    <b-icon
                      variant="danger"
                      icon="x-circle"
                      @click="deleteProduct(product.productId)"
                    ></b-icon>
                  </b-col>
                </b-row>
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
  // created() {
  //   this.cartArray = this.$store.state.cart;
  // },
  computed: {
    // test() {
    //   return this.$store.state.cart[0].quantity;
    // },
  },
  data() {
    return {};
  },
  methods: {
    quantityPlus(id) {
      this.$store.commit("quantityPlus", id);
    },
    quantityMinus(id) {
      this.$store.commit("quantityMinus", id);
    },
    deleteProduct(id) {
      this.$store.commit("deleteProduct", id);
    },
  },
};
</script>

<style>
</style>