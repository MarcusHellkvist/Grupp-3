<template>
  <div v-if="book">
    <b-container class="mt-4">
      <b-row no-gutters style="background-color: white" class="pr-2">
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
              <!-- <hr
            /> --></b-col
            >

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
                  @click="onClick"
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
                @click="onClick"
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
          <b-col id="descriptionStyle" class="mt-2" cols="12" md="12"
            >Description
          </b-col>

          <b-col id="plotStyle" class="mb-4" cols="12" md="12">
            {{ book.plot }}</b-col
          >
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row cols="12" md="3">
        <b-col class="mt-4">
          <!-- <carousel-of-interest
            :booksInCarousel="this.$store.state.books.slice(0, 8)"
            title="New books"
          ></carousel-of-interest> -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import * as firebase from '../firebase.js'

  //import CarouselOfInterest from '../components/CarouselOfInterest.vue'
  export default {
    components: {},
    name: 'Product',
    data() {
      return {
        book: null,
        quantityinCart: 0
      }
    },
    /* computed: {
      id() {
        return this.$route.params.isbn
      }
    }, */
    created() {
      this.getBook()
    },
    methods: {
      getBook() {
        var docRef = firebase.booksCollection.doc(this.$route.params.isbn)

        docRef
          .get()
          .then((doc) => {
            if (doc.exists) {
              console.log('Document data:', doc.data())
              this.book = doc.data()
            } else {
              // doc.data() will be undefined in this case
              console.log('No such document!')
            }
          })
          .catch((error) => {
            console.log('Error getting document:', error)
          })
      },
      onClick() {
        if (this.$store.state.user.loggedIn === true) {
          var docRef = firebase.usersCollection
            .doc(this.$store.state.user.data.uid)
            .collection('cart')
            .doc(this.book.isbn)

          docRef.get().then((doc) => {
            if (!doc.exists) {
              docRef
                .set({
                  title: this.book.title,
                  quantity: 1,
                  price: this.book.price,
                  image: this.book.image,
                  isbn: this.book.isbn
                })
                .then(() => {
                  console.log('New book added!')
                })
            } else {
              console.log('Quantity updated!')
              docRef.update({ quantity: doc.data().quantity + 1 })
            }
          })
        }
        /* this.$store.commit('addToCart', this.book) */
        /* this.$store.commit('quantityInCart') */

        /* this.$store.state.cart.length++ */
        /* console.log(this.numberOfItemsInCart) */
      }
    },
    watch: {
      '$route.params.isbn'(to, from) {
        console.log(`params changed - to: ${to} from:${from}`)
        this.getBook()
      }
    }
  }
</script>

<style scoped>
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
    /*  border-width: 1px;
    border-color: #dbd9d8;
    border-bottom-style: solid; */
  }
  #descriptionStyle {
    font-weight: bold;
    border-width: 1px;
    border-color: #dbd9d8;
    border-top-style: solid;
    border-right-style: solid;
    border-left-style: solid;
  }
  #nameForSite {
    color: white;
    font-size: 250%;
    /* background-image: linear-gradient(to bottom, #4b3b40, #31563a); */
    background-image: linear-gradient(
      to top,
      rgba(255, 0, 0, 0),
      rgb(75, 177, 55)
    );
    /*  margin: 0px 0px 20px; */
    /* border: 0px solid #8eb8a0; */
  }

  .first {
    font-size: 150%;
    margin: 35px 0px;
    /* background-color: pink; */
    /* background-image: url('../assets/books.jpg'); */
    background-size: 100% 100%;
    font-family: 'Courier New', Courier, monospace;
    color: white;
    font-weight: bold;
    box-shadow: rgba(17, 17, 26, 0.452) 0px 8px 24px,
      rgba(17, 17, 26, 0.5) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
    /* border-radius: 25px; */
    /*  border: 15px solid #8eb8a0; */
  }

  #category1 {
    color: ivory;
    border-radius: 25px;
    background-color: white;
    border: 5px solid #8eb8a0;
    /* box-shadow: rgba(0.8, 0.8, 0.8, 0.8) 10px 5px 10px 10px; */
    box-shadow: rgba(103, 245, 74, 0.425) 10px 5px 10px 10px;

    /* margin: 5px 5px 20px; */
  }
  #category2 {
    color: ivory;
    border-radius: 25px;
    background-color: white;
    border: 5px solid #8eb8a0;
    box-shadow: rgba(103, 245, 74, 0.425) 10px 5px 10px 10px;
    /* margin: 5px 5px 20px; */
  }

  #category3 {
    color: ivory;
    border-radius: 25px;
    background-color: white;
    border: 5px solid #8eb8a0;
    box-shadow: rgba(103, 245, 74, 0.425) 10px 5px 10px 10px;
    /* margin: 5px 5px 0px; */
  }

  #shopping-cart {
    padding: 0%;
    /* box-shadow: rgba(103, 245, 74, 0.425) 10px 5px 10px 10px; */
  }

  .mr-2 {
    margin-left: (2 * 0.25) !important;
    width: 700px;
  }
  hr {
    margin: 5px 5px;
    color: black;
  }

  #picture {
    background-color: darksalmon;
    /*  max-width: 300px; */
  }
  #main {
    background-color: azure;
  }
</style>
