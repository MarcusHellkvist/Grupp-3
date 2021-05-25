<template>
  <div>
    <div>
      <b-list-group>
        <h4 class="text-left">Top 10</h4>
        <b-list-group-item
          v-for="(product, index) in top10"
          :key="product.id"
          class="d-flex justify-content-between"
          variant="light"
          href="#"
        >
          <div class="text-left">
            <h6>{{ index + 1 }}. {{ product.name }}</h6>
            <p>{{ product.description }}</p>
            <small>Price: ${{ product.price }}</small>
          </div>

          <div>
            <div>
              <img :src="product.photo" width="75" height="100" />
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
      top10: this.$store.state.products,
    };
  },
};
</script>

<style></style>
