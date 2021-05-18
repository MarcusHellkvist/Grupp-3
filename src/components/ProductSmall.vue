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
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    productId: String,
    name: String,
    description: String,
    price: Number,
    productImage: String,
  },
};
</script>

<style></style>
