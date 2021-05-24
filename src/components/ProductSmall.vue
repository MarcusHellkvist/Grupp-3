<template>
  <b-card
    no-body
    :img-src="book.image"
    img-alt="book image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text class="title">
      <b-link :to="{ name: 'Product', params: { productId: book.isbn } }">{{
        book.title
      }}</b-link>
    </b-card-text>
    <b-card-text class="author">
      {{ book.author }}
    </b-card-text>

    <b-button @click="buyProduct" size="sm" variant="primary">
      $ {{ book.price }}
      <b-icon icon="cart" aria-hidden="true"></b-icon>
    </b-button>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      book: {
        isbn: "this.isbn",
        title: "this.title",
        author: "this.author",
        price: "this.price",
        image:
          "https://s2.adlibris.com/images/57965498/burn-after-writing-pink.jpg",
      },
    };
  },
  props: {
    isbn: String,
    title: String,
    author: String,
    price: Number,
    image: String,
  },
  methods: {
    buyProduct() {
      console.log("you bought it!");
      this.$store.commit("addToCart", this.book);
      this.$emit("book-to-cart-alert", this.book);
    },
  },
};
</script>

<style scoped>
p.card-text.title {
  font-size: 18px;
  font-weight: bold;
  text-align: start;
  margin: 6px 12px 0px;
}
p.card-text.author {
  font-size: 16px;
  text-align: start;
  margin: 0px 12px;
}
button {
  margin: 24px 12px 12px;
  font-size: 18px;
}
img {
  padding: 12px 12px 0px;
}
</style>
