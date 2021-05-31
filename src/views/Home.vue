<template>
  <div class="home">
    <!-- Carousel -->
    <b-container class="mt-2 mb-2">
      <b-row>
        <b-col cols="12"><carousel></carousel></b-col>
      </b-row>
    </b-container>

    <!-- grid layout  -->
    <div>
      <b-container>
        <b-row>
          <b-col lg="9">
            <b-row>
              <b-col>
                <carousel-trending
                  :booksInCarousel="this.$store.state.books.slice(0, 8)"
                  title="New books"
                ></carousel-trending>
              </b-col>
            </b-row>

            <b-row>
              <b-col>
                <carousel-trending
                  :booksInCarousel="this.$store.state.books.slice(8, 16)"
                  title="Trending"
                ></carousel-trending>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="3">
            <top-ten-books :topTenBooks="$store.state.books"></top-ten-books>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import TopTenBooks from "../components/TopTenBooks.vue";
import CarouselTrending from "../components/CarouselTrending";
export default {
  components: {
    Carousel,
    TopTenBooks,
    CarouselTrending,
  },

  name: "Home",
  data() {
    return {
      slide: 0,
      sliding: null,
      books: this.$store.state.books, // all product "use to sort Price"
      perPage: 7,
      currentPage: 1,
      defaultImage: this.$store.state.defaultImage,
      topTenBooks: [],
    };
  },
  created() {},
  computed: {
    rows() {
      return this.$store.state.books.length;
    },
    /* For pagination */
    allProducts() {
      return this.$store.state.books.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
  },
  methods: {
    onSlideStart() {
      this.sliceStartValue += 4;
      this.sliceEndValue += 4;
      this.sliding = true;
      if (this.sliceStartValue > 4) {
        this.sliceStartValue = 0;
        this.sliceEndValue = 4;
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
  height: 375px;
}
.carousel >>> .carousel-indicators li {
  background-color: #403042;
}
.carousel >>> .carousel-control-prev-icon {
  height: 40px;
  width: 40px;
  outline: black;
  background-size: 35%, 35%;
  border-radius: 50%;
  background-color: #403042;
}
.carousel >>> .carousel-control-next-icon {
  height: 40px;
  width: 40px;
  outline: black;
  background-size: 35%, 35%;
  border-radius: 50%;
  background-color: #403042;
}
</style>
