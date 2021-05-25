<template>
  <div>
    <h3>{{ formatSlug }}</h3>
    <b-container class="main-container">
      <b-row class="align-items-stretch">
        <b-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
          class="card-column"
          v-for="book in books"
          :key="book.isbn"
        >
          <product-small
            @book-to-cart-alert="onBookToCartToast"
            :isbn="book.isbn"
            :title="book.title"
            :author="book.author"
            :price="book.price"
            :image="book.image"
          ></product-small>
        </b-col>
      </b-row>
    </b-container>

    <div class="container" v-if="this.$route.params.slug">
      <div class="row">
        <b-row>
          <div class="col" v-for="filtered in filteredArray" :key="filtered.id">
            <product-small
              :productId="filtered.id"
              :name="filtered.name"
              :description="filtered.description"
              :price="filtered.price"
              :productImage="filtered.photo || defaultImage"
            ></product-small>
          </div>
        </b-row>
      </div>
    </div>
    <div class="overflow-auto">
      <b-pagination
        v-if="this.$route.params.categoryId !== undefined"
        class="mt-3"
        v-model="currentPageFiltered"
        :total-rows="filterRows"
        :per-page="perPage"
        align="center"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import ProductSmall from "../components/ProductSmall.vue";
export default {
  components: { ProductSmall },

  created() {},
  data() {
    return {
      filteredArray: [],
      perPage: 4,
      currentPageFiltered: 1,
      defaultImage: this.$store.state.defaultImage,
    };
  },
  computed: {
    // products() {
    //   return this.$store.state.products;
    // },
    books() {
      console.log(this.$route.params.slug);
      const books = [];
      this.$store.state.books.forEach((element) => {
        if (this.$route.params.slug === element.genre) {
          books.push(element);
        }
      });
      return books;
    },
    formatSlug() {
      const header = this.$route.params.slug;
      const temp = header.charAt(0).toUpperCase() + header.slice(1);
      return temp.replaceAll("-", " ");
    },
    //this.$route.params.slug

    /* Slice the filtered array to work with the pagination */
    // sliceFilteredArray() {
    //   return this.filteredArray.slice(
    //     (this.currentPageFiltered - 1) * this.perPage,
    //     this.currentPageFiltered * this.perPage
    //   );
    // },
    // filterRows() {
    //   return this.filteredArray.length;
    // },
  },

  methods: {
    filterArray() {
      for (let index = 0; index < this.$store.state.products.length; index++) {
        if (
          JSON.stringify(this.$store.state.products[index].category) ===
          this.$route.params.categoryId
        ) {
          this.filteredArray.push(this.$store.state.products[index]);
        }
      }
    },
    onBookToCartToast(book) {
      this.$bvToast.toast(`${book.title} was added to your cart`, {
        title: "Success",
        autoHideDelay: 2000,
        appendToast: true,
        variant: "success",
        solid: true,
        toaster: "b-toaster-top-center",
      });
    },
  },
};
</script>

<style></style>
