<template>
  <div>
    <h3>{{ formatSlug }}</h3>

    <b-container class="main-container">
      <b-row>
        <b-col cols="auto">
          <!-- dropdown List -->
          <div>
            <b-form-select
              v-model="selected"
              :options="options"
            ></b-form-select>
            <div class="mt-3"></div>
          </div>
        </b-col>
      </b-row>

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
            :isbn="book.isbn"
            :title="book.title"
            :author="book.author"
            :price="book.price"
            :image="book.image"
          ></product-small>
        </b-col>
      </b-row>
    </b-container>

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
      selected: null,
      options: [
        { value: null, text: "Sort BY" },
        { value: "maxPrice", text: "Max Price" },
        { value: "minPrice", text: "Min Price" },
      ],
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
      switch (this.selected) {
        case "minPrice":
          books.sort(function(a, b) {
            return a.price - b.price;
          });

          break;

        case "maxPrice":
          books.sort(function(a, b) {
            return b.price - a.price;
          });
          break;

        default:
          break;
      }
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
