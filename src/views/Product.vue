<template>
  <div>
    <!-- <p>{{ productID }}</p>
    <ShoppingCartButton
      :numberOfItems="this.$store.state.cart.length"
    ></ShoppingCartButton> -->

    <!-- <ShoppingCartButton></ShoppingCartButton> -->

    <div d-flex>
      <!--  style="width: 800px; " -->
      <!-- <b-card
        :title="productName"
        :img-src="productPhoto"
        img-alt="Image"
        img-left
        class="mb-3"
        tag="article"
      > -->
      <b-card
        :title="productName"
        :img-src="productPhoto"
        img-alt="Card image"
        img-left
        img-width="500px"
        class="mw-100"
      >
        <b-card-text>
          {{ productDescription }}
        </b-card-text>

        <b-card-text id="price" class="text-right ">
          Price: {{ productPrice }} SEK
        </b-card-text>
        <div class=" text-right">
          <b-button id="addToShopingCart" @click="onClick"
            >Add to shopping cart</b-button
          >
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
  /* import ShoppingCartButton from '../components/ShoppingCartButton.vue' */
  export default {
    /* components: { ShoppingCartButton },
      name: 'Product', */
    data() {
      return {
        productName: '',
        productPhoto: '',
        productDescription: '',
        productPrice: 0,
        productsArr: [],
        productID: this.$route.params.productId,
        oneObject: {}
        /* numberOfItemsInCart: 0 */
      }
    },
    created() {
      this.fetchLocalData()
      /*  this.numberOfItemsInCart = this.$store.state.cart.length */
    },
    methods: {
      fetchLocalData() {
        fetch('products.json')
          .then((response) => response.json())
          .then((data) => {
            this.productsArr = data.products
            /*  console.log('hi', data.products.id) */
            console.log('hi ffffffff', this.productsArr)
            this.pickRightObject()
            this.giveVAlueToObject()
          })
      },
      pickRightObject() {
        for (let i = 0; i < this.productsArr.length; i++) {
          if (this.productsArr[i].id === this.productID) {
            /* this.oneObject = this.productsArr[i] */

            this.oneObject = {
              productId: this.productsArr[i].id,
              name: this.productsArr[i].name,
              description: this.productsArr[i].description,
              price: this.productsArr[i].price,
              productImage: this.productsArr[i].photo
            }

            console.log(this.oneObject)
          }
        }
      },
      giveVAlueToObject() {
        this.productName = this.oneObject.name
        this.productPhoto = this.oneObject.productImage
        this.productDescription = this.oneObject.description
        this.productPrice = this.oneObject.price
      },
      onClick() {
        this.$store.commit('addToCart', this.oneObject)
        /* this.$store.state.cart.length++ */
        /* console.log(this.numberOfItemsInCart) */
      }
    },
    watch: {
      '$route.params.productId'(to, from) {
        console.log(`params changed - to: ${to} from:${from}`)
        this.productID = to
        this.fetchLocalData()

        // Fixa så det fungerar i realtid, just nu måste man uppdatera hemsidan manuellt för att ändringar ska ske.
      }
    }
  }
</script>

<style scoped></style>
