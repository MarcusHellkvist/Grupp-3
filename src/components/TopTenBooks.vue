<template>
  <div>
    <div>
      <b-list-group>
        <h4 class="text-left">Top 10</h4>
        <b-list-group-item
          v-for="(product, index) in top10.slice(0, 10)"
          :key="index"
          class="d-flex justify-content-between"
          variant="light"
          href="#"
        >
          <div class="text-left">
            <h6>{{ index + 1 }}. {{ product.title }}</h6>
            <small>{{ product.author }}</small>
            <p>Price: ${{ product.price }}</p>
          </div>

          <div>
            <div>
              <img :src="product.image" width="50" height="75" />
            </div>
          </div>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top10: this.$store.state.books,
    };
  },
};
</script>

<style scoped>
h6 {
  margin-bottom: 0rem;
}
p {
  color: red;
  margin-top: 0rem;
  margin-bottom: 0rem;
}
small {
  margin-top: 0rem;
}
</style>
