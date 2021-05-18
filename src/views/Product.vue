<template>
  <div>
    <b-button id="goToShoppingCartButton" href="#" variant="primary"
      >Add to shopping cart</b-button
    >
    <div style="width: 500px 500px ;">
      <b-card
        :title="productName"
        :img-src="productPhoto"
        img-alt="Image"
        tag="article"
        :footer-text-variant="productPrice"
        class="details"
      >
        <b-card-text> {{ productDescription }} </b-card-text>
        <b-card-text id="price">
          {{ productPrice }}
        </b-card-text>

        <b-button id="addToShopingCart" href="#" variant="primary"
          >Add to shopping cart</b-button
        >
      </b-card>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        productName: '',
        productPhoto: '',
        productDescription: '',
        productPrice: 0,
        productsArr: [],
        productID: 'id0003',
        oneObject: {}
      }
    },
    created() {
      this.fetchLocalData()
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
            this.oneObject = this.productsArr[i]
            console.log(this.oneObject)
          }
        }
      },
      giveVAlueToObject() {
        this.productName = this.oneObject.name
        this.productPhoto = this.oneObject.photo
        this.productDescription = this.oneObject.description
        this.productPrice = 'Price:  ' + this.oneObject.price + '  SEK'
      }
    }
  }
</script>

<style scoped>
  p {
    color: pink;
  }
</style>
