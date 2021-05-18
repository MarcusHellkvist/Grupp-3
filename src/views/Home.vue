<template>
  <div class="home">
    <h1>Start page - Home</h1>
    <p>{{ $route.params.categoryId }}</p>
    <product-small
      productId="id123"
      name="product-title"
      description="product-text"
      :price="999"
      productImage="urlToImage"
    ></product-small>
    <div v-if="this.$store.state.products">
      <ol>
        <li v-for="product in this.$store.state.products" :key="product.id">
          Name of product: {{ product.name }} <br />
          Category of product: {{ product.category }}
        </li>
      </ol>
      <ol>
        <li v-for="filtered in filteredArray" :key="filtered.id">
          {{ filtered.name }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import ProductSmall from "../components/ProductSmall.vue";
export default {
  components: { ProductSmall },
  name: "Home",
  data() {
    return {
      product: null,
      filteredArray: [],
    };
  },

  created() {
    this.fetchLocalData();
  },
  methods: {
    fetchLocalData() {
      fetch("products.json")
        .then((response) => response.json())
        .then((data) => {
          this.$store.commit("fillWithProducts", data.products);
        });
    },
    filterArray() {
      for (let index = 0; index < this.$store.state.products.length; index++) {
        if (
          JSON.stringify(this.$store.state.products[index].category) ===
          this.$route.params.categoryId
        ) {
          this.filteredArray.push(this.$store.state.products[index]);
        }
      }
    },
  },
  watch: {
    $route(to, from) {
      if (to !== from) {
        this.filteredArray = [];
        console.log("Changed route to: " + to.params.categoryId);
        this.filterArray();
      }
    },
  },
};
</script>
