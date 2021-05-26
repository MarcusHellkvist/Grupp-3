<template>
  <div>
    <b-carousel ref="carouselbook" controls indicators v-model="slide">
      <b-carousel-slide
        img-blank
        v-for="product in sale.slice(0, 4)"
        :key="product.isbn"
      >
        <b-row>
          <b-col lg="3" v-for="book in sale.slice(0, 4)" :key="book.isbn">
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
      </b-carousel-slide>

      <a
        class="carousel-control-prev"
        href="#carouselbook"
        role="button"
        @click="prev"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselbook"
        role="button"
        @click="next"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </b-carousel>
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
      return this.books;
    },
  },
  methods: {
    prev() {
      this.$refs.carouselbook.prev();

      for (var x = 0; x < 4; x++) {
        this.array_move(this.books, this.books.length - 1, 0);
      }
    },
    next() {
      this.$refs.carouselbook.next();
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

      return arr;
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
