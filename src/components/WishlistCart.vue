<template>
  <div>
    <h1>Wishlist</h1>
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <div
            v-if="myBooks.length === 0 && $store.state.wishlist.length === 0"
          >
            <b-card
              title="Your wishlist is empty"
              img-alt="Card image"
              img-left
              class="mb-3"
            >
              <b-card-text>
                <b-button variant="primary" @click="$router.push('/')"
                  >Continue shopping</b-button
                >
              </b-card-text>
            </b-card>
          </div>

          <div v-else>
            <b-container>
              <b-list-group>
                <b-list-group-item
                  v-for="product in myBooks"
                  :key="product.isbn"
                >
                  <b-card
                    :productId="product.isbn"
                    :img-src="product.image"
                    img-alt="Card image"
                    img-left
                    img-height="150"
                    img-width="100"
                    class="mb-3 "
                  >
                    <b-card-text
                      style="text-align: left; font-weight: bold;font-size: 150%;"
                      class="title"
                    >
                      <b-link
                        :to="{
                          name: 'Product',
                          params: { isbn: product.isbn }
                        }"
                        >{{ product.title }}</b-link
                      >
                    </b-card-text>
                    <b-card-text>
                      <b-row>
                        <b-row class="ml-2" style="text-align: left;">
                          <b-col cols="12" md="12" lg="12">
                            Author: {{ product.author }}
                          </b-col>
                          <b-col cols="12" md="12" lg="12"
                            >Genre: {{ product.genre }}</b-col
                          >

                          <b-col cols="12" md="12" lg="12"
                            >Price: {{ product.price }} $</b-col
                          >
                        </b-row>

                        <b-col>
                          <b-col cols="12" md="12" lg="12"
                            ><b-button
                              style="
                    font-weight: bold;
                    text-align: right;
                    word-spacing: -2px;
                  "
                              id="addToShopingCart"
                              @click="addToCart(product, product.isbn)"
                              >ADD TO CART
                              <b-icon
                                id="icon-cart-check"
                                style="color: white"
                                icon="cart4"
                                class="position-relative"
                                font-scale="2"
                              ></b-icon> </b-button
                          ></b-col>
                          <b-col cols="12" md="12" lg="12">
                            <b-icon
                              class="mt-2"
                              font-scale="2"
                              variant="danger"
                              icon="x-circle"
                              @click="deleteProductFromWishlist(product.isbn)"
                            ></b-icon>
                          </b-col>
                        </b-col>
                      </b-row>
                    </b-card-text>
                  </b-card>
                </b-list-group-item>

                <b-row align-h="between">
                  <b-col cols="12" md="4" lg="4"
                    ><b-button
                      class="btn btn-primary btn-lg btn-block"
                      variant="primary"
                      @click="$router.push('/')"
                      >Continue shopping</b-button
                    ></b-col
                  >
                  <b-col cols="12" md="4" lg="4"
                    ><b-button
                      class="btn btn-primary btn-lg btn-block"
                      variant="primary"
                      @click="$router.push('/checkout')"
                    >
                      Go to checkout</b-button
                    ></b-col
                  >
                </b-row>
              </b-list-group>
            </b-container>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import * as firebase from '../firebase.js'

  export default {
    created() {
      if (this.userData !== null) {
        this.allBooks()
      } else if (this.userData === null) {
        this.myBooks = this.$store.state.wishlist
      }
    },
    computed: {
      userData() {
        return this.$store.state.user.data
      }
    },
    data() {
      return {
        myBooks: [],
        bild:
          'https://listimg.pinclipart.com/picdir/s/201-2018325_img-empty-shopping-cart-gif-clipart.png'
      }
    },
    methods: {
      allBooks() {
        if (this.$store.state.user.loggedIn === true) {
          firebase.usersCollection
            .doc(this.$store.state.user.data.uid)
            .collection('wishlist')
            .onSnapshot((querySnapshot) => {
              this.myBooks = []
              querySnapshot.forEach((doc) => {
                this.myBooks.push(doc.data())
              })
            })
        }
      },
      addToCart(product, id) {
        if (this.$store.state.user.loggedIn === true) {
          firebase.addItemToCartFirebase(
            product,
            this.$store.state.user.data.uid
          )

          this.deleteProductFromWishlist(id)
        } else {
          this.$store.commit('addToCart', product)
          this.$store.commit('deleteProductFromWishlist', id)
        }
      },

      deleteProductFromWishlist(id) {
        if (this.$store.state.user.loggedIn === true) {
          firebase.usersCollection
            .doc(this.$store.state.user.data.uid)
            .collection('wishlist')
            .doc(id)
            .delete()
            .then(() => {
              console.log('Document successfully deleted from wishlist!')
            })
            .catch((error) => {
              console.error('Error removing document: ', error)
            })
        }
        this.$store.commit('deleteProduct', id)
      }
    },

    watch: {
      userData() {
        if (this.userData !== null) {
          this.allBooks()
        } else {
          this.myBooks = this.$store.state.wishlist
          console.log('WishList. WAtch. user data')
        }
      },
      userDataNull() {
        if (this.userData === null) {
          this.myBooks = this.$store.state.wishlist
        } else {
          this.allBooks()
          console.log('WishList. WAtch. user data null')
        }
      }
    }
  }
</script>

<style></style>
