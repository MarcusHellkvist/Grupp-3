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
        numberOnCart: 0,
        cartQuantity: []
      }
    },
    /* props: {
      numberOfItems: {
        type: Number
      }
    }, */
    created() {
      if (this.userData !== null) {
        this.quantityInCart()
        console.log('this.userData', this.userData)
      } else if (this.userData === null) {
        this.numberOnCart = this.$store.state.quantityItemsInCart
        console.log('IF NOT INLOG', this.$store.state.quantityItemsInCart)
      }
    },

    computed: {
      userData() {
        return this.$store.state.user.data
      },
      userDataNull() {
        return this.$store.state.quantityItemsInCart
      }
    },
    methods: {
      quantityInCart() {
        this.numberOnCart = 0
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

          console.log('SHOPING CART AS A GUEST!!!')
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
      userData() {
        if (this.userData !== null) {
          this.quantityInCart()
        } else {
          this.numberOnCart = this.$store.state.quantityItemsInCart
          console.log('IF NOT INLOG', this.$store.state.quantityItemsInCart)
        }
      },
      userDataNull() {
        if (this.userData === null) {
          this.numberOnCart = this.$store.state.quantityItemsInCart
          console.log('IF NOT INLOG', this.$store.state.quantityItemsInCart)
        } else {
          this.quantityInCart()
        }
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
