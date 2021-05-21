<template>
  <div>
    <div class="container" v-if="this.$route.params.categoryId">
      <h2>--- KATEGORI {{ $route.params.categoryId }} ---</h2>
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
  import ProductSmall from '../components/ProductSmall.vue'
  export default {
    components: { ProductSmall },

    created() {
      this.filterArray()
    },
    data() {
      return {
        filteredArray: [],
        perPage: 4,
        currentPageFiltered: 1,
        defaultImage: this.$store.state.defaultImage
      }
    },
    computed: {
      products() {
        return this.$store.state.products
      },
      /* Slice the filtered array to work with the pagination */
      sliceFilteredArray() {
        return this.filteredArray.slice(
          (this.currentPageFiltered - 1) * this.perPage,
          this.currentPageFiltered * this.perPage
        )
      },
      filterRows() {
        return this.filteredArray.length
      }
    },

    methods: {
      /* Filter all products by their CategoryId */

      filterArray() {
        for (
          let index = 0;
          index < this.$store.state.products.length;
          index++
        ) {
          if (
            JSON.stringify(this.$store.state.products[index].category) ===
            this.$route.params.categoryId
          ) {
            this.filteredArray.push(this.$store.state.products[index])
          }
        }
      }
    },
    watch: {
      /* Empty the filtered array and once again filter by CategoryId and set the currentPage to 1 in the pagination when route is changed. */
      $route(to, from) {
        if (to !== from) {
          this.filteredArray = []
          this.filterArray()
          this.currentPageFiltered = 1
        }
      }
    }
  }
</script>

<style></style>
