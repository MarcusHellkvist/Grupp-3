<template>
  <div class="home">
    <h1>Start page - Home</h1>

    <!-- Carousel -->
    <b-container>
      <b-row>
        <b-col cols="12"><carousel></carousel></b-col>
      </b-row>
    </b-container>

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
                      class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
                      v-for="book in allProducts"
                      :key="book.isbn"
                    >
                      <product-small
                        :key="book.isbn"
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
            <carousel-trending></carousel-trending>
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
import CarouselTrending from "../components/CarouselTrending";
export default {
  components: {
    ProductSmall,
    Carousel,
    TopTenBooks,
    CarouselBooks,
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
