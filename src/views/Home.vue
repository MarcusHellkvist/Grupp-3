<template>
  <div class="home">
    <h1>Start page - Home</h1>

    <!-- Carousel -->
    <carousel></carousel>

    <!-- grid layout  -->
    <div>
      <b-container>
        <b-row>
          <b-col lg="9" style="border: 2px solid">
            <b-row>
              <b-col style="border: 2px solid">
                1 carousle col-9
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
              </b-col>
            </b-row>
            <b-row>
              <b-col style="border: 2px solid">
                2 carousel col-9
                <carousel-books></carousel-books>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="3" style="border: 2px solid">
            top 10 col-3
            <top-ten-books :topTenBooks="$store.state.books"></top-ten-books>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import ProductSmall from "../components/ProductSmall.vue";
import Carousel from "../components/Carousel.vue";

import TopTenBooks from "../components/TopTenBooks.vue";
import CarouselBooks from "../components/CarouselBooks";

export default {
  components: { ProductSmall, Carousel, TopTenBooks, CarouselBooks },

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
      topTenBooks: [],
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
