<template>
  <div>
    <h1>Shopping cart</h1>
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <div v-if="myBooks.length === 0">
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
          <div v-else>
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
                      <!-- <b-row>
                        <b-col cols="12">
                          {{ product.plot }}
                        </b-col>
                      </b-row>

                      <br /> -->

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
export default {
  created() {
    this.allBooks();
    // while (this.$store.state.user.data.uid === null) {
    //   this.allBooks();
    // }
  },
  computed: {},
  data() {
    return {
      myBooks: [],
      bild:
        "https://listimg.pinclipart.com/picdir/s/201-2018325_img-empty-shopping-cart-gif-clipart.png",
    };
  },
  methods: {
    allBooks() {
      console.log(this.$store.state.user.data.uid);
      firebase.usersCollection
        .doc(this.$store.state.user.data.uid)
        .collection("cart")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            this.myBooks.push(doc.data());
          });
        });
    },
    quantityPlus(id) {
      this.$store.commit("quantityPlus", id);
    },
    quantityMinus(id) {
      this.$store.commit("quantityMinus", id);
    },
    deleteProduct(id) {
      this.$store.commit("deleteProduct", id);
    },
  },
};
</script>

<style>
</style>