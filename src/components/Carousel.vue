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
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1280"
            height="320"
            src="../assets/slide-1.png"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
    };
  },
  created() {},
  computed: {},
  methods: {},
};
</script>

<style scoped></style>
