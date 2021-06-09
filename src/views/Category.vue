<template>
  <div>
    <h3>{{ formatSlug }}</h3>

    <b-container class="main-container">
      <b-row>
        <b-col cols="auto">
          <!-- dropdown List -->
          <div>
            <b-form-select
              v-model="selected"
              :options="options"
            ></b-form-select>
            <div class="mt-3"></div>
          </div>
        </b-col>
      </b-row>

      <b-row class="align-items-stretch" v-if="books">
        <b-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
          class="card-column"
          v-for="book in books"
          :key="book.isbn"
        >
          <product-small
            :isbn="book.isbn"
            :title="book.title"
            :author="book.author"
            :price="book.price"
            :image="book.image"
            @book-to-cart="onBookToCart"
          ></product-small>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import ProductSmall from '../components/ProductSmall.vue'
  import * as firebase from '../firebase.js'
  export default {
    components: { ProductSmall },

    created() {
      this.getBooks()
    },
    data() {
      return {
        books2: [],
        selected: null,
        options: [
          { value: null, text: 'Sort BY' },
          { value: 'maxPrice', text: 'Max Price' },
          { value: 'minPrice', text: 'Min Price' }
        ]
      }
    },
    computed: {
      books() {
        const books = this.books2

        switch (this.selected) {
          case 'minPrice':
            books.sort(function(a, b) {
              return a.price - b.price
            })

            break

          case 'maxPrice':
            books.sort(function(a, b) {
              return b.price - a.price
            })

            break

          default:
            break
        }

        return books
      },
      formatSlug() {
        const header = this.$route.params.slug
        const temp = header.charAt(0).toUpperCase() + header.slice(1)
        return temp.replaceAll('-', ' ')
      }
    },

    methods: {
      getBooks() {
        this.books2 = []
        firebase.booksCollection
          .where('genre', '==', this.$route.params.slug)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.books2.push(doc.data())
            })
          })
      },

      onBookToCart(book) {
        this.$notify({
          group: 'alert-template',
          title: 'Shopping Cart',
          text: `${book.title} by ${book.author} was added to your cart`
        })
      }
    },
    watch: {
      '$route.params.slug'(to, from) {
        console.log(`params changed - to: ${to} from:${from}`)
        this.getBooks()
      }
    }
  }
</script>

<style></style>
