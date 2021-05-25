<template>
  <div>
    <b-carousel
      id="carousel"
      v-model="slide"
      img-width="1024"
      img-height="200"
      :interval="10000"
      controls
    >
      <b-carousel-slide
        v-for="product in sale"
        :key="product.id"
        caption="SALE"
        text="40% of all books"
      >
        <template #img>
          <img class="w-100" width="1024" height="200" :src="product.photo" />
        </template>
        <button class="btn btn-outline-light" @click="shopNow">SHOP NOW</button>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sale: this.$store.state.products,
    };
  },
  methods: {
    shopNow() {
      console.log("Shop Now!!");
    },
  },
};
</script>

<style scoped></style>
