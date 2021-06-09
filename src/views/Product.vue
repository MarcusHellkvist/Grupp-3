<template>
  <div v-if="book">
    <b-container class="mt-4">
      <b-row
        id="id_for_main_container"
        no-gutters
        style="background-color: white"
        class="pr-2"
      >
        <b-col cols="12" md="3" class="" style="">
          <img style="width: 95%" :src="book.image" alt="BOOK PHOTO" />
        </b-col>
        <b-col>
          <b-row>
            <b-col
              class="ml-4"
              cols="12"
              md="12"
              style="
                text-align: left;
                font-size: 180%;
                letter-spacing: -1px;
                font-weight: bold;
              "
              >{{ book.title }}
            </b-col>

            <b-col id="authorStyle" class="ml-4 mb-4" cols="12" md="12">
              Author: {{ book.author }}
            </b-col>

            <b-col
              class="ml-4"
              style="
                font-weight: bold;
                font-size: 180%;
                letter-spacing: -1px;
                font-weight: bold;
                text-align: left;
              "
              cols="6"
              md="6"
              >Price: {{ book.price }}$
            </b-col>
            <b-col class="" cols="5" md="5"
              ><div class="text-right">
                <b-button
                  style="
                    font-weight: bold;
                    text-align: left;
                    word-spacing: -2px;
                  "
                  id="addToShopingCart"
                  @click="addToCart"
                  >ADD TO CART
                  <b-icon
                    id="icon-cart-check"
                    style="color: white"
                    icon="cart4"
                    class="position-relative"
                    font-scale="2"
                  ></b-icon>
                </b-button>
              </div>
            </b-col>
          </b-row>

          <hr />

          <b-row>
            <b-col style="text-align: left" class="ml-4" cols="6" md="6">
              <b-button
                style="
                  background-color: white;
                  font-weight: bold;
                  word-spacing: -2px;
                "
                @click="addToWishlist"
              >
                <b-icon
                  style="color: black; text-align: left"
                  icon="suit-heart"
                  class="position-relative"
                  font-scale="2"
                ></b-icon>
                Add to wishlist
              </b-button>
            </b-col>
            <b-col
              class="mt-2"
              style="
                font-weight: bold;
                font-size: 80%;
                letter-spacing: -1px;
                text-align: right;
              "
              cols="5"
              md="5"
              ><b-icon
                style="color: black; text-align: left"
                icon="truck "
                class="position-relative"
                font-scale="2"
              ></b-icon>
              Delivery within 1-2 days with PREMIUM delivery
            </b-col>
          </b-row>

          <b-col class="mb-3 mt-3" cols="12" md="12"
            ><div class="accordion" role="tablist">
              <b-card id="plot-card" no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-1 variant="primary"
                    >Plot synopsis</b-button
                  >
                </b-card-header>
                <b-collapse
                  id="accordion-1"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text>{{ book.plot }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-2 variant="primary"
                    >Book information</b-button
                  >
                </b-card-header>
                <b-collapse
                  id="accordion-2"
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text
                      ><ul>
                        <li><strong>ISBN:</strong> {{ book.isbn }}</li>
                        <li><strong>Pages:</strong> {{ book.pages }}</li>
                        <li><strong>Language:</strong> {{ book.language }}</li>
                        <li>
                          <strong>Published:</strong> {{ book.published }}
                        </li>
                        <li>
                          <strong>Publisher:</strong> {{ book.publisher }}
                        </li>
                        <li><strong>Stock:</strong> {{ book.stock }}</li>
                      </ul></b-card-text
                    >
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card id="review-card" no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-3 variant="primary"
                    >Reviews ({{ reviews.length }})</b-button
                  >
                </b-card-header>
                <b-collapse
                  id="accordion-3"
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <div v-if="reviews.length > 0">
                    <b-card-body v-for="review in reviews" :key="review.uid">
                      <b-card-text class="m-0"
                        ><strong>Review by {{ review.name }}</strong> |
                        {{ review.date }}</b-card-text
                      >

                      <b-card-text class="m-0"
                        ><b-form-rating
                          readonly
                          inline
                          v-model="review.rating"
                          size="sm"
                          no-border
                          class="m-0 p-0"
                          variant="secondary"
                          icon-empty="book"
                          icon-half="book-halv"
                          icon-full="book-fill"
                        ></b-form-rating
                      ></b-card-text>

                      <b-card-text>{{ review.text }}</b-card-text>
                      <hr />
                    </b-card-body>
                  </div>
                  <div v-else>
                    <p style="margin: 20px;">
                      This books has not been reviewed yet, be the first one to
                      review it!
                    </p>
                  </div>

                  <b-button
                    class="m-3"
                    :disabled="!$store.state.user.loggedIn"
                    variant="primary"
                    v-b-modal.modal-prevent-closing
                    >Write a review</b-button
                  >

                  <b-modal
                    style="color: black;"
                    id="modal-prevent-closing"
                    ref="modal"
                    title="Leave a review"
                    header-text-variant="primary"
                    body-text-variant="primary"
                    cancel-variant="light"
                    ok-title="Publish"
                    @show="resetModal"
                    @hidden="resetModal"
                    @ok="handleOk"
                  >
                    <form ref="form" @submit.stop.prevent="handleSubmit">
                      <h6>{{ book.title }}</h6>
                      <b-form-group label="Rating" label-for="rating">
                        <b-input-group id="rating">
                          <b-form-rating v-model="form.rating"></b-form-rating>
                          <b-input-group-append>
                            <b-input-group-text
                              class="justify-content-center"
                              style="min-width: 3em;"
                            >
                              {{ form.rating }}
                            </b-input-group-text>
                          </b-input-group-append>
                        </b-input-group>
                      </b-form-group>

                      <b-form-group
                        id="input-group-1"
                        label="Review:"
                        label-for="review"
                      >
                        <b-form-textarea
                          id="review"
                          rows="4"
                          no-resize
                          required
                          v-model="form.review"
                        ></b-form-textarea>
                      </b-form-group>
                    </form>
                  </b-modal>
                </b-collapse>
              </b-card></div
          ></b-col>
        </b-col>
      </b-row>
    </b-container>

    <b-container>
      <b-row cols="12" md="3">
        <b-col>
          <h1 id="h1_for_carousel_of_interest">
            It might interest you:
          </h1>
        </b-col>
      </b-row>
      <b-row id="id_for_carousel_of_interest" cols="12" md="3">
        <b-col class="mt-4 pb-4">
          <carousel-of-interest
            :booksInCarousel="this.$store.state.books.slice(0, 8)"
            title="New books"
            :author="book.author"
            :genre="book.genre"
            :isbn="book.isbn"
          ></carousel-of-interest>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import * as firebase from '../firebase.js'
  import { mapGetters } from 'vuex'

  import CarouselOfInterest from '../components/CarouselOfInterest.vue'

  export default {
    components: { CarouselOfInterest },
    name: 'Product',
    data() {
      return {
        book: null,
        quantityinCart: 0,
        form: {
          rating: null,
          review: '',
          reviewState: null
        },
        reviews: []
      }
    },

    created() {
      this.getBook()
      this.getReviews()
    },
    computed: {
      ...mapGetters({
        user: 'user'
      })
    },
    methods: {
      getBook() {
        var docRef = firebase.booksCollection.doc(this.$route.params.isbn)
        docRef
          .get()
          .then((doc) => {
            if (doc.exists) {
              this.book = doc.data()
            } else {
              console.log('No such document!')
            }
          })
          .catch((error) => {
            console.log('Error getting document:', error)
          })
      },
      getReviews() {
        firebase.booksCollection
          .doc(this.$route.params.isbn)
          .collection('reviews')
          .onSnapshot((querySnapshot) => {
            this.reviews = []
            querySnapshot.forEach((doc) => {
              this.reviews.push(doc.data())
            })
          })
      },

      addToCart() {
        if (this.$store.state.user.loggedIn === true) {
          firebase.addItemToCartFirebase(
            this.book,
            this.$store.state.user.data.uid
          )
        } else {
          this.$store.commit('addToCart', this.book)
        }
      },

      addToWishlist() {
        if (this.$store.state.user.loggedIn === true) {
          firebase.addItemToWishlistFirebase(
            this.book,
            this.$store.state.user.data.uid
          )
        } else {
          this.$store.commit('addToWishlist', this.book)
        }
      },

      getCurrentDate() {
        var currentDate = new Date()
        var dd = String(currentDate.getDate()).padStart(2, '0')
        var mm = String(currentDate.getMonth() + 1).padStart(2, '0')
        var yyyy = currentDate.getFullYear()

        currentDate = yyyy + '-' + mm + '-' + dd
        return currentDate
      },
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.form.reviewState = valid
        return valid
      },
      resetModal() {
        this.form.rating = null
        this.form.review = ''
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        // if (!this.checkFormValidity()) {
        //   return;
        // }

        console.log('everything went fine')

        // TODO - CHECK FORM VALIDATION!

        firebase.booksCollection
          .doc(this.book.isbn)
          .collection('reviews')
          .doc(this.$store.state.user.data.uid)
          .set({
            uid: this.$store.state.user.data.uid,
            name: this.user.data.displayName,
            rating: this.form.rating,
            text: this.form.review,
            date: this.getCurrentDate()
          })
          .then(() => {
            console.log('review successfully written ')
          })
          .catch((error) => {
            console.error('Error adding document: ', error)
          })

        // TODO - RESET MODAL

        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    },
    watch: {
      '$route.params.isbn'(to, from) {
        console.log(`params changed - to: ${to} from:${from}`)
        this.getBook()
        this.getReviews()
      }
    }
  }
</script>

<style scoped>
  #id_for_carousel_of_interest {
    margin: 0px 0px 0px;
    background-color: rgba(255, 255, 255, 0.616);
  }

  #h1_for_carousel_of_interest {
    margin: 55px 0px 0px;
    background-color: rgba(255, 255, 255, 0.616);
    border-bottom-style: solid;
    border-width: 1px;
    border-color: #dbd9d8;
  }
  #plotStyle {
    border-style: solid;
    border-width: 1px;
    border-color: #dbd9d8;
  }

  #priceAndShoppingButtonStyle {
    border-width: 1px;
    border-color: #dbd9d8;
    border-top-style: solid;
  }

  #authorStyle {
    text-align: left;
  }
  #descriptionStyle {
    font-weight: bold;
    border-width: 1px;
    border-color: #dbd9d8;
    border-top-style: solid;
    border-right-style: solid;
    border-left-style: solid;
  }

  hr {
    margin: 5px 5px;
    color: black;
  }

  #main {
    background-color: azure;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: start;
  }
  #review-card {
    text-align: start;
  }

  #plot-card {
    text-align: start;
  }
</style>
