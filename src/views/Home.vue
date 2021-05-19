<template>
  <div class="home">
    <h1>Start page - Home</h1>
    <div class="container" v-if="this.$route.params.categoryId">
      <h2>--- KATEGORI {{ $route.params.categoryId }} ---</h2>
      <div class="row">
        <b-row>
          <div
            class="col"
            v-for="filtered in sliceFilteredArray"
            :key="filtered.id"
          >
            <product-small
              :productId="filtered.id"
              :name="filtered.name"
              :description="filtered.description"
              :price="filtered.price"
              :productImage="filtered.photo"
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

    <div class="container" v-if="this.filteredArray.length === 0">
      <div class="row">
        <div class="col" v-for="product in allProducts" :key="product.id">
          <product-small
            :productId="product.id"
            :name="product.name"
            :description="product.description"
            :price="product.price"
            :productImage="product.photo"
          ></product-small>
        </div>
      </div>
    </div>

    <div
      class="overflow-auto"
      v-if="this.$route.params.categoryId === undefined"
    >
      <b-pagination
        class="mt-3"
        v-model="currentPage"
        :total-rows="rows"
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
    name: 'Home',
    data() {
      return {
        product: null,
        filteredArray: [],
        perPage: 4,
        currentPage: 1,
        currentPageFiltered: 1
      }
    },
    computed: {
      rows() {
        return this.$store.state.products.length
      },
      filterRows() {
        return this.filteredArray.length
      },

      allProducts() {
        const items = this.$store.state.products
        return items.slice(
          (this.currentPage - 1) * this.perPage,
          this.currentPage * this.perPage
        )
      },
      sliceFilteredArray() {
        return this.filteredArray.slice(
          (this.currentPageFiltered - 1) * this.perPage,
          this.currentPageFiltered * this.perPage
        )
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
            this.$store.commit('fillWithProducts', data.products)
          })
      },
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
      $route(to, from) {
        if (to !== from) {
          this.filteredArray = []
          this.filterArray()
          this.currentPageFiltered = 1
          this.currentPage = 1
        }
      }
    }
  }
</script>
