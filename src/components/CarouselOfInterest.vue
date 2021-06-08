<template
  ><div>
    <b-container class="main-container">
      <b-row class="align-items-stretch" v-if="fireBooks">
        <b-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
          class="card-column"
          v-for="book in fireBooks"
          :key="book.isbn"
        >
          <product-small
            :isbn="book.isbn"
            :title="book.title"
            :author="book.author"
            :price="book.price"
            :image="book.image"
          ></product-small>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import * as firebase from '../firebase.js'
  import ProductSmall from '../components/ProductSmall.vue'
  export default {
    components: { ProductSmall },
    name: 'CarouselOfInterest',
    data() {
      return {
        slide: 0,
        sliding: null,
        defaultImage: this.$store.state.defaultImage,
        sliceStartValue: 0,
        sliceEndValue: 4,
        fireBooks: [],
        oneObject: {}
      }
    },
    created() {
      this.fetchBooks()
    },
    methods: {
      fetchBooks() {
        firebase.booksCollection.get().then((books) => {
          books.forEach((books) => {
            if (
              (books.data().isbn != this.isbn &&
                books.data().author === this.author) ||
              (books.data().isbn != this.isbn &&
                books.data().genre === this.genre)
            ) {
              this.fireBooks.push(books.data())

              /* console.log(' BOOKS WITH RIGHT AUTHOR: ', this.fireBooks) */
            }
          })
        })
      },
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
      }
    },
    computed: {
      showProducts() {
        return this.fireBooks.slice(this.sliceStartValue, this.sliceEndValue)
      }
    },
    props: {
      booksInCarousel: Array,
      title: String,
      author: String,
      genre: String,
      isbn: String
    }
  }
</script>
<style scoped></style>
