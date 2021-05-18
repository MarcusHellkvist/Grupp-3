<template>
  <div class="home">
    <h1>Start page - Home</h1>
    <p>{{ $route.params.categoryId }}</p>
    <div class="container">
      <div class="row">
        <div
          class="col"
          v-for="product in this.$store.state.products"
          :key="product.id"
        >
          <product-small
            :productId="product.id"
            :name="product.name"
            :description="product.description"
            :price="product.price"
            :productImage="product.photo"
          ></product-small>
        </div>
      </div>
    </div>

    <div class="container" v-if="filteredArray !== null">
      <h2 v-if="this.filteredArray.length > 0">--- KATEGORI ---</h2>
      <div class="row">
        <div class="col" v-for="filtered in filteredArray" :key="filtered.id">
          <product-small
            :productId="filtered.id"
            :name="filtered.name"
            :description="filtered.description"
            :price="filtered.price"
            :productImage="filtered.photo"
          ></product-small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductSmall from '../components/ProductSmall.vue'
  export default {
    components: { ProductSmall },
    name: 'Home',
    data() {
      return {
        product: null,
        filteredArray: []
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
            this.$store.commit('fillWithProducts', data.products)
          })
      },
      filterArray() {
        for (
          let index = 0;
          index < this.$store.state.products.length;
          index++
        ) {
          if (
            JSON.stringify(this.$store.state.products[index].category) ===
            this.$route.params.categoryId
          ) {
            this.filteredArray.push(this.$store.state.products[index])
          }
        }
      }
    },
    watch: {
      $route(to, from) {
        if (to !== from) {
          this.filteredArray = []
          console.log('Changed route to: ' + to.params.categoryId)
          this.filterArray()
        }
      }
    }
  }
</script>
