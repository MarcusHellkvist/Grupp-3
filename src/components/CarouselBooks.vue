<template>
  <div>
    <div>
      <b-carousel
        ref="carousel"
        v-model="slide"
        img-width="1024"
        img-height="400"
      >
        <b-carousel-slide img-blank v-for="product in 4" :key="product.isbn">
          <div>
            <b-row>
              <b-col lg="3" v-for="book in sale" :key="book.isbn">
                <product-small
                  :key="book.isbn"
                  :isbn="book.isbn"
                  :title="book.title"
                  :author="book.author"
                  :price="book.price"
                  :image="book.image"
                ></product-small>
              </b-col>
            </b-row>
          </div>
        </b-carousel-slide>

        <a
          class="carousel-control-prev"
          href="#carousel"
          role="button"
          @click="prev"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carousel"
          role="button"
          @click="next"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </b-carousel>
    </div>

    <!-- test -->
  </div>
</template>

<script>
import ProductSmall from "../components/ProductSmall.vue";
export default {
  components: { ProductSmall },
  data() {
    return {
      slide: 0,
      books: [],
    };
  },
  created() {
    this.localBooks();
  },
  computed: {
    sale() {
      return this.books.slice(0, 4);
    },
  },
  methods: {
    prev() {
      this.$refs.carousel.prev();

      for (var x = 0; x < 4; x++) {
        this.array_move(this.books, this.books.length - 1, 0);
      }
    },
    next() {
      this.$refs.carousel.next();
      for (var x = 0; x < 4; x++) {
        this.array_move(this.books, 0, this.books.length - 1);
      }
    },
    array_move(arr, old_index, new_index) {
      if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
          arr.push(undefined);
        }
      }
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);

      return arr; // for testing
    },

    shopNow() {
      console.log("Shop Now!!");
    },

    localBooks() {
      for (let i = 0; i < this.$store.state.books.length; i++) {
        this.books.push(this.$store.state.books[i]);
      }
      return this.books;
    },
  },
};
</script>

<style scoped>
.carousel >>> .carousel-item {
  height: 450px;
}
</style>
