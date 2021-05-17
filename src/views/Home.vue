<template>
  <div class="home">
    <h1>Start page - Home</h1>
    <p>{{ $route.params.categoryId }}</p>
    <ol v-if="this.$store.state.products">
      <li v-for="product in this.$store.state.products" :key="product.id">
        {{ product.name }}
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        product: null
      }
    },
    created() {
      this.fetchLocalData()
    },
    methods: {
      fetchLocalData() {
        fetch('products.json')
          .then((response) => response.json())
          .then((data) => {
            this.$store.state.product = data
            this.$store.commit('fillWithProducts', data.products)
          })
      }
    }
  }
</script>
