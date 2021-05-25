<template>
  <div class="home">
    <h1>Start page - Home</h1>

    <!-- Carousel -->
    <carousel></carousel>

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
        <div
          class="col-lg col-md-4 col-sm-6"
          v-for="book in allProducts"
          :key="book.isbn"
        >
          <product-small
            :key="book.isbn"
            @book-to-cart-alert="onBookToCartToast"
            :isbn="book.isbn"
            :title="book.title"
            :author="book.author"
            :price="book.price"
            :image="book.image"
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

    <div class="container">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="400000"
        controls
        indicators
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide img-blank>
          <div class="container">
            <div class="row">
              <div class="col" v-for="book in showProducts" :key="book.isbn">
                <product-small
                  :key="book.isbn"
                  @book-to-cart-alert="onBookToCartToast"
                  :isbn="book.isbn"
                  :title="book.title"
                  :author="book.author"
                  :price="book.price"
                  :image="book.image"
                ></product-small>
              </div>
            </div>
          </div>
        </b-carousel-slide>
        <b-carousel-slide img-blank>
          <div class="container">
            <div class="row">
              <div
                class="col"
                v-for="product in showProducts"
                :key="product.id"
              >
                <product-small
                  v-for="book in books"
                  :key="book.isbn"
                  @book-to-cart-alert="onBookToCartToast"
                  :isbn="book.isbn"
                  :title="book.title"
                  :author="book.author"
                  :price="book.price"
                  :image="book.image"
                ></product-small>
              </div>
            </div>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
import ProductSmall from "../components/ProductSmall.vue";
import Carousel from "../components/Carousel.vue";

export default {
  components: { ProductSmall, Carousel },
  name: "Home",
  data() {
    return {
      data: this.$store.state.books,
      slide: 0,
      sliding: null,
      books: this.$store.state.books, // all product "use to sort Price"
      perPage: 7,
      currentPage: 1,
      defaultImage: this.$store.state.defaultImage,
      value: 4,
      startValue: 0,
    };
  },
  computed: {
    rows() {
      return this.$store.state.books.length;
    },
    allProducts() {
      return this.$store.state.books.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
    showProducts() {
      return this.$store.state.books.slice(this.startValue, this.value);
    },
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
      this.startValue += 4;
      this.value += 4;
      if (this.value > this.$store.state.books.length) {
        this.startValue = 0;
        this.value = 4;
      }
    },
    onSlideEnd() {
      this.sliding = false;
    },
    maxPrice() {
      this.books.sort(function(a, b) {
        return b.price - a.price;
      });
      console.log(this.books);
    },
    minPrice() {
      this.books.sort(function(a, b) {
        return a.price - b.price;
      });
      console.log(this.books);
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
<style scoped>
.carousel >>> .carousel-item {
  height: 450px;
}
</style>
