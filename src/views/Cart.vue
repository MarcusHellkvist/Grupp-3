<template>
  <div>
    <h1>Shopping cart</h1>
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <div v-if="myBooks.length === 0 && $store.state.cart.length === 0">
            <b-card
              title="Your cart is empty"
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

          <div v-else-if="myBooks.length > 0">
            <b-list-group>
              <b-list-group-item v-for="product in myBooks" :key="product.isbn">
                <b-card
                  :productId="product.isbn"
                  :title="product.title"
                  :img-src="product.image"
                  img-alt="Card image"
                  img-left
                  img-height="150"
                  img-width="100"
                  class="mb-3"
                >
                  <b-card-text>
                    <b-container>
                      <b-row>
                        <b-col cols="12" md="6" lg="3"
                          >Quantity:
                          <b-icon
                            v-if="product.quantity >= 2"
                            variant="Primary"
                            icon="file-minus"
                            @click="quantityMinus(product.isbn)"
                          ></b-icon>
                          {{ product.quantity }}
                          <b-icon
                            variant="Primary"
                            icon="file-plus"
                            @click="quantityPlus(product.isbn)"
                          ></b-icon>
                        </b-col>

                        <b-col cols="12" md="6" lg="3"
                          >Price: {{ product.price }}</b-col
                        >
                        <b-col cols="12" md="6" lg="3"
                          >Total: {{ product.price * product.quantity }}</b-col
                        >
                        <b-col cols="12" md="6" lg="3">
                          <b-icon
                            variant="danger"
                            icon="x-circle"
                            @click="deleteProduct(product.isbn)"
                          ></b-icon>
                        </b-col>
                      </b-row>
                    </b-container>
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
          </div>

          <div v-else-if="$store.state.cart">
            <b-list-group>
              <b-list-group-item
                v-for="product in this.$store.state.cart"
                :key="product.isbn"
              >
                <b-card
                  :productId="product.isbn"
                  :title="product.title"
                  :img-src="product.image"
                  img-alt="Card image"
                  img-left
                  img-height="150"
                  img-width="100"
                  class="mb-3"
                >
                  <b-card-text>
                    <b-container>
                      <b-row>
                        <b-col cols="12" md="6" lg="3"
                          >Quantity:
                          <b-icon
                            v-if="product.quantity >= 2"
                            variant="Primary"
                            icon="file-minus"
                            @click="quantityMinus(product.isbn)"
                          ></b-icon>
                          {{ product.quantity }}
                          <b-icon
                            variant="Primary"
                            icon="file-plus"
                            @click="quantityPlus(product.isbn)"
                          ></b-icon>
                        </b-col>

                        <b-col cols="12" md="6" lg="3"
                          >Price: {{ product.price }}</b-col
                        >
                        <b-col cols="12" md="6" lg="3"
                          >Total: {{ product.price * product.quantity }}</b-col
                        >
                        <b-col cols="12" md="6" lg="3">
                          <b-icon
                            variant="danger"
                            icon="x-circle"
                            @click="deleteProduct(product.isbn)"
                          ></b-icon>
                        </b-col>
                      </b-row>
                    </b-container>
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
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import * as firebase from "../firebase.js";
import firebase2 from "firebase";
export default {
  created() {
    if (this.userData !== null) {
      this.allBooks();
    }
    // while (this.$store.state.user.data.uid === null) {
    //   this.allBooks();
    // }
  },
  computed: {
    userData() {
      return this.$store.state.user.data;
    },
  },
  data() {
    return {
      myBooks: [],
      bild:
        "https://listimg.pinclipart.com/picdir/s/201-2018325_img-empty-shopping-cart-gif-clipart.png",
    };
  },
  methods: {
    allBooks() {
      firebase.usersCollection
        .doc(this.$store.state.user.data.uid)
        .collection("cart")
        .onSnapshot((querySnapshot) => {
          this.myBooks = [];
          querySnapshot.forEach((doc) => {
            this.myBooks.push(doc.data());
          });
        });
    },
    quantityPlus(id) {
      if (this.$store.state.user.loggedIn === true) {
        firebase.usersCollection
          .doc(this.$store.state.user.data.uid)
          .collection("cart")
          .doc(id)
          .update({
            quantity: firebase2.firestore.FieldValue.increment(1),
          });
        // this.myBooks.quantity = this.myBooks.quantity + 1;
        console.log(this.myBooks.quantity);
      } else {
        this.$store.commit("quantityPlus", id);
      }
    },
    quantityMinus(id) {
      if (this.$store.state.user.loggedIn === true) {
        firebase.usersCollection
          .doc(this.$store.state.user.data.uid)
          .collection("cart")
          .doc(id)
          .update({
            quantity: firebase2.firestore.FieldValue.increment(-1),
          });
        // this.myBooks.quantity = this.myBooks.quantity + 1;
        console.log(this.myBooks.quantity);
      } else {
        this.$store.commit("quantityMinus", id);
      }
    },
    deleteProduct(id) {
      if (this.$store.state.user.loggedIn === true) {
        firebase.usersCollection
          .doc(this.$store.state.user.data.uid)
          .collection("cart")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document successfully deleted!");
          })
          .catch((error) => {
            console.error("Error removing document: ", error);
          });
      }
      this.$store.commit("deleteProduct", id);
    },
  },
  watch: {
    userData() {
      if (this.userData !== null) {
        this.allBooks();
      }
    },
  },
};
</script>

<style></style>
