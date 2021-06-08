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

      <b-row class="align-items-stretch" v-if="books2">
        <b-col
          cols="12"
          sm="4"
          md="3"
          lg="2"
          class="card-column"
          v-for="book in books2"
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

    <div class="overflow-auto">
      <b-pagination
        v-if="this.$route.params.categoryId !== undefined"
        class="mt-3"
        v-model="currentPageFiltered"
        :total-rows="filterRows"
        :per-page="perPage"
        align="center"
      ></b-pagination>
    </div>
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
        console.log(this.$route.params.slug)
        const books = []

        this.$store.state.books.forEach((element) => {
          if (this.$route.params.slug === element.genre) {
            books.push(element)
          }
        })
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
      //this.$route.params.slug

      /* Slice the filtered array to work with the pagination */
      // sliceFilteredArray() {
      //   return this.filteredArray.slice(
      //     (this.currentPageFiltered - 1) * this.perPage,
      //     this.currentPageFiltered * this.perPage
      //   );
      // },
      // filterRows() {
      //   return this.filteredArray.length;
      // },
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

      onBookToCartToast(book) {
        this.$bvToast.toast(`${book.title} was added to your cart`, {
          title: 'Success',
          autoHideDelay: 2000,
          appendToast: true,
          variant: 'success',
          solid: true,
          toaster: 'b-toaster-top-center'
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
