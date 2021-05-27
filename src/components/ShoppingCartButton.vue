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
        >{{ numberOfItems }}
      </span>
    </b-button>
  </div>
</template>

<script>
  export default {
    name: 'ShoppingCartButton',

    /* created() {
      console.log('HI 14:41 HI', this.numberOfItems)
      
    }, */
    data() {
      return {
        /*  productsArr: this.$store.state.cart,
        quantityinCart: 0 */
      }
    },
    /*  props: {
      numberOfItems: {
        type: Number
      }
    }, */

    /* computed: {
      numberOfItems() {
        console.log('SHOPPING CART LENGTH', this.$store.state.cart.length)
        console.log('PRODUCT QUVONTITY', this.$store.state.cart.quantity)
        return this.$store.state.cart.length
      }
    } */

    computed: {
      numberOfItems() {
        console.log('CAAAAARRTTT', this.$store.state.cart)
        return this.$store.state.quantityItemsInCart
      }
    },
    methods: {}
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
