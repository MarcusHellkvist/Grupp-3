<template>
  <div>
    <p>products detail</p>
    <p>{{ oneObject }}</p>
    <div style="width: 500px 500px ;">
      <b-card
        title="Card Title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        tag="article"
        class="details"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the
          card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button href="#" variant="success">Go somewhere</b-button>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        products: [],
        productID: 'id0003',
        oneObject: ''
      }
    },
    created() {
      this.fetchLocalData()
      this.pickRightObject()
    },
    methods: {
      fetchLocalData() {
        fetch('products.json')
          .then((response) => response.json())
          .then((data) => {
            this.products = data.products
            /*  console.log('hi', data.products.id) */
            console.log('hi ffffffff', this.products)
          })
      },
      pickRightObject() {
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === 'id0003') {
            this.oneObject = this.products
          }
        }
        console.log('AAAAAAAAAA', this.products.id)
      }
    }
  }
</script>

<style>
  p {
    color: pink;
  }
</style>
