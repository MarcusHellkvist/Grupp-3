<template>
  <b-card
    no-body
    :img-src="book.image"
    img-alt="book image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 h-100"
  >
    <b-card-text class="title">
      <b-link :to="{ name: 'Product', params: { isbn: book.isbn } }">{{
        book.title
      }}</b-link>
    </b-card-text>
    <b-card-text class="author">
      {{ book.author }}
    </b-card-text>

    <b-button class="mt-auto" @click="buyProduct" size="sm" variant="primary">
      $ {{ book.price }}
      <b-icon icon="cart" aria-hidden="true"></b-icon>
    </b-button>
  </b-card>
</template>

<script>
  import store from '../store'
  export default {
    data() {
      return {
        book: {
          isbn: this.isbn,
          title: this.title,
          author: this.author,
          price: this.price,
          image: this.image
        }
      }
    },
    props: {
      isbn: String,
      title: String,
      author: String,
      price: Number,
      image: String
    },
    methods: {
      buyProduct() {
        console.log('you bought it!')
        store.dispatch('addToCartFirestore')
        //this.$store.commit("addToCart", this.book);
      }
    }
  }
</script>

<style scoped>
  p.card-text.title {
    font-size: 14px;
    font-weight: bold;
    text-align: start;
    margin: 6px 12px 0px;
  }
  p.card-text.author {
    font-size: 12px;
    text-align: start;
    margin: 0px 12px;
  }
  button {
    margin: 24px 12px 12px;
    font-size: 14px;
  }
  img {
    padding: 12px 12px 0px;
  }
</style>
