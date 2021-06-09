<template>
  <b-row>
    <b-col>
      <h3>{{ title }}</h3>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="400000"
        controls
        indicators
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Slide with cards -->
        <b-carousel-slide img-blank>
          <div class="row">
            <div class="col-12 sm-6">
              <b-card-group deck style="height:20rem">
                <product-small
                  v-for="book in this.booksInCarousel.slice(0, 4)"
                  :key="book.isbn"
                  :isbn="book.isbn"
                  :title="book.title"
                  :author="book.author"
                  :price="book.price"
                  :image="book.image"
                  @book-to-cart="onBookToCart"
                ></product-small>
              </b-card-group>
            </div>
          </div>
        </b-carousel-slide>
        <b-carousel-slide img-blank>
          <div class="row">
            <div class="">
              <b-card-group deck style="height:20rem">
                <product-small
                  v-for="book in this.booksInCarousel.slice(4, 8)"
                  :key="book.isbn"
                  :isbn="book.isbn"
                  :title="book.title"
                  :author="book.author"
                  :price="book.price"
                  :image="book.image || defaultImage"
                  @book-to-cart="onBookToCart"
                ></product-small>
              </b-card-group>
            </div>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </b-col>
  </b-row>
</template>

<script>
  import ProductSmall from '../components/ProductSmall.vue'
  export default {
    components: { ProductSmall },
    name: 'Trending',
    data() {
      return {
        slide: 0,
        sliding: null,
        defaultImage: this.$store.state.defaultImage,
        sliceStartValue: 0,
        sliceEndValue: 4,
        book: this.$store.state.books
      }
    },
    methods: {
      onSlideStart() {
        this.sliceStartValue += 4
        this.sliceEndValue += 4
        this.sliding = true
        if (this.sliceStartValue > 4) {
          this.sliceStartValue = 0
          this.sliceEndValue = 4
        }
      },
      onSlideEnd() {
        this.sliding = false
      },
      onBookToCart(book) {
        this.$notify({
          group: 'alert-template',
          title: 'Shopping Cart',
          text: `${book.title} by ${book.author} was added to your cart`
        })
      }
    },
    computed: {
      showProducts() {
        return this.$store.state.books.slice(
          this.sliceStartValue,
          this.sliceEndValue
        )
      }
    },
    props: {
      booksInCarousel: Array,
      title: String
    }
  }
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
