<template>
  <div class="home">
    <h1>Start page - Home</h1>
    <!-- dropdown List -->
    <div>
      <b-dropdown text="Sort by">
        <b-dropdown-item-button @click="maxPrice()"
          >Max Price</b-dropdown-item-button
        >
        <b-dropdown-item-button @click="minPrice()"
          >Min Price</b-dropdown-item-button
        >
      </b-dropdown>
    </div>
    <!-- dropdown, List -->

    <div class="container">
      <div class="row">
        <div class="col" v-for="product in allProducts" :key="product.id">
          <product-small
            @book-to-cart-alert="onBookToCartToast"
            :productId="product.id"
            :name="product.name"
            :description="product.description"
            :price="product.price"
            :productImage="product.photo || defaultImage"
          ></product-small>
        </div>
      </div>
    </div>

    <div class="overflow-auto">
      <b-pagination
        class="mt-3"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        align="center"
      ></b-pagination>
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
      products: this.$store.state.products, // all product "use to sort Price"
      perPage: 4,
      currentPage: 1,
      defaultImage: this.$store.state.defaultImage,
    };
  },
  computed: {
    rows() {
      return this.$store.state.products.length;
    },

    allProducts() {
      return this.$store.state.products.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
  },

  methods: {
    maxPrice() {
      this.products.sort(function(a, b) {
        return b.price - a.price;
      });
      console.log(this.products);
    },
    minPrice() {
      this.products.sort(function(a, b) {
        return a.price - b.price;
      });
      console.log(this.products);
    },
    onBookToCartToast(book) {
      this.$bvToast.toast(`${book.title} was added to your cart`, {
        title: "Success",
        autoHideDelay: 2000,
        appendToast: true,
        variant: "success",
        solid: true,
        toaster: "b-toaster-top-center",
      });
    },
  },
};
</script>
