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
              <b-col style="padding: 0px;">
                <trending-list
                  class="custom-trending-list"
                  title="New Books"
                  :books="this.fireBooks.slice(0, 8)"
                ></trending-list>
                <carousel-trending
                  class="custom-carousel"
                  :booksInCarousel="this.fireBooks.slice(0, 8)"
                  title="New Books"
                ></carousel-trending>
              </b-col>
            </b-row>

            <b-row>
              <b-col style="padding: 0px;">
                <trending-list
                  class="custom-trending-list"
                  title="Trending"
                  :books="this.fireBooks.slice(0, 8)"
                ></trending-list>
                <carousel-trending
                  class="custom-carousel"
                  :booksInCarousel="this.fireBooks.slice(8, 16)"
                  title="Trending"
                ></carousel-trending>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="3">
            <top-ten-books :topTenBooks="this.fireBooks"></top-ten-books>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
  import Carousel from '../components/Carousel.vue'
  import TopTenBooks from '../components/TopTenBooks.vue'
  import CarouselTrending from '../components/CarouselTrending'
  import * as firebase from '../firebase.js'
  import TrendingList from '../components/TrendingList.vue'
  export default {
    components: {
      Carousel,
      TopTenBooks,
      CarouselTrending,
      TrendingList
    },

    name: 'Home',
    data() {
      return {
        slide: 0,
        sliding: null,
        topTenBooks: [],
        fireBooks: []
      }
    },
    created() {
      this.fetchBooks()
    },
    computed: {},
    methods: {
      fetchBooks() {
        firebase.booksCollection.get().then((books) => {
          books.forEach((books) => {
            this.fireBooks.push(books.data())
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
      },
      maxPrice() {
        this.fireBooks.sort(function(a, b) {
          return b.price - a.price
        })
      },
      minPrice() {
        this.fireBooks.sort(function(a, b) {
          return a.price - b.price
        })
      }
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
