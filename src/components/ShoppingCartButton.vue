<template>
  <div>
    <b-button
      type="button"
      variant="outline-success"
      class="btn position-relative"
    >
      <b-icon
        id="icon-cart-check"
        style="color: #5E807F;"
        icon="cart4"
        class=" position-relative"
        font-scale="2"
      ></b-icon>
      <span
        id="cart-check-number"
        class="position-absolute  translate-middle badge rounded-pill bg-secondary"
        style=" top: 0; right: 3px; color: white; "
        >{{ numberOnCart }}
      </span>
    </b-button>
  </div>
</template>

<script>
  import * as firebase from '../firebase.js'
  export default {
    name: 'ShoppingCartButton',
    data() {
      return {
        /* quantityinCart: 0, */
        numberOnCart: 0,
        cartQuantity: []
        /*  productsArr: this.$store.state.cart,
        quantityinCart: 0 */
      }
    },
    /* props: {
      numberOfItems: {
        type: Number
      }
    }, */
    created() {
      this.quantityInCart()
    },
    /* computed: {
      numberOfItems() {
        console.log('SHOPPING CART LENGTH', this.$store.state.cart.length)
        console.log('PRODUCT QUVONTITY', this.$store.state.cart.quantity)
        return this.$store.state.cart.length
      }
    } */

    computed: {
      /* numberOfItemsFirebase() {
        this.quantityInCart()
        return this.$store.state.quantityItemsInCartFirebase
      } */
    },
    methods: {
      quantityInCart() {
        if (this.$store.state.user.loggedIn === true) {
          firebase.usersCollection
            .doc(this.$store.state.user.data.uid)
            .collection('cart')
            .onSnapshot((querySnapshot) => {
              this.cartQuantity = []
              querySnapshot.forEach((doc) => {
                this.cartQuantity.push(doc.data().quantity)
                this.countAllBooksInCart()
              })
              console.log('ALO TRY CART FIREBASE', this.cartQuantity)
            })
        } else {
          this.numberOnCart = this.$store.state.quantityItemsInCart
          console.log('SHOPING CART fail!!!', this.numberOnCart)
        }
      },

      countAllBooksInCart() {
        var counter = 0
        for (let i = 0; i < this.cartQuantity.length; i++) {
          counter = counter + this.cartQuantity[i]
          this.quantityinCart = counter
          this.$store.commit('changeQuantityInCart', this.quantityinCart)
          console.log('SHOPPING CART COUNTER', counter)
          this.numberOnCart = this.$store.state.quantityItemsInCartFirebase
        }
      }
    },
    watch: {
      'this.quantityinCart'(to, from) {
        console.log(`params changed - to: ${to} from:${from}`)
        this.quantityInCart()
        console.log(
          'LOOKING WATCH IN SHOPPING CART',
          (this.numberOnCart = this.$store.state.quantityItemsInCartFirebase)
        )
      }
    }
  }
</script>

<style scoped>
  /* #goToShoppingCartButton {
    background-color: green;
    height: 100px;
    width: 200px;
    margin-left: 800px;
    font-family: Marker Felt;
    font-size: 30px;
  } */
  /* #cart {
    background-color: grey;
    height: 200px;
    width: 200px;

    position: relative;
  }
  #number {
    background-color: purple;
    border-radius: 100%;
    color: white;
    font-size: 2em;
    padding: 0.5em;

    position: absolute;
    bottom: -5px;
    right: -15px;
  } */
</style>
