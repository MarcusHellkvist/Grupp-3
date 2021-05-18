<template>
  <div>
    <b-card
      :title="name"
      :img-src="productImage"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        {{ description }}
      </b-card-text>

      <b-card-text> {{ price }} SEK </b-card-text>
      <b-link :to="{ name: 'Product', params: { productId: productId } }"
        >Details</b-link
      >
      <b-button @click="buyProduct">Buy</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        productId: this.productId,
        name: this.name,
        description: this.description,
        price: this.price,
        productImage: this.productImage,
      },
    };
  },
  props: {
    productId: String,
    name: String,
    description: String,
    price: Number,
    productImage: String,
  },
  methods: {
    buyProduct() {
      console.log("you bought it!");
      this.$store.commit("addToCart", this.product);
    },
  },
};
</script>

<style></style>
