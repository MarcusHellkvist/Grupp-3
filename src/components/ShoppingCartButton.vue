<template>
  <div>
    <!-- <p>{{ cartLenght }}</p> -->

    <!--  <b-row cols="2" cols-sm="4" class="text-center" style="font-size: 4rem;">
      <b-col class="py-4 mb-2">
        <b-icon icon="exclamation-circle" class="bg-info"></b-icon>
      </b-col>
    </b-row> -->

    <!--  <b-button
      id="goToShoppingCartButton"
      href="#"
      variant="primary"
      class="position-relativ"
      >Shopping cart</b-button
    > -->

    <!-- div id="goToShoppingCartButton">
      <b-button><span class="bi bi-cart4"></span></b-button>
    </div> -->

    <!--  <button type="button" variant="success" class="btn position-relative">
      <b-icon
        variant="success"
        icon="cart-check"
        class="position-relative"
        font-scale="6"
      ></b-icon>
      <span
        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"
        >{{ numberOfItems }}
      </span>
    </button> -->

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

    <!-- <div id="cart">
      <span class="bi bi-cart4"></span>
      <span id="number">{{ numberOfItems }}</span>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "ShoppingCartButton",

  created() {
    console.log("HI 14:41 HI", this.numberOfItems);
    /*  this.numberOfItems =  */
  },
  data() {
    return {};
  },
  /*  props: {
      numberOfItems: {
        type: Number
      }
    }, */
  computed: {
    numberOfItems() {
      return this.$store.state.cart.length;
    },
  },
};
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
