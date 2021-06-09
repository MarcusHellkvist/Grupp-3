<template>
  <b-container>
    <h3>{{ title }}</h3>
    <b-row no-gutters id="row" v-for="book in books" :key="book.isbn">
      <b-col id="book-title" cols="12"
        ><b-link :to="{ name: 'Product', params: { isbn: book.isbn } }">{{
          book.title
        }}</b-link></b-col
      >
      <b-col id="book-author" cols="12">{{ book.author }}</b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    props: {
      books: Array,
      title: String
    }
  }
</script>

<style scoped>
  h3 {
    text-align: start;
  }
  #row {
    background-color: white;
    padding: 6px;
    padding-left: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  #book-title {
    text-align: start;
    text-decoration: underline;
  }
  #book-author {
    text-align: start;
    font-size: 14px;
  }
</style>
