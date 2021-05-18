<template>
  <div class="home">
    <h1>Start page - Home</h1>
    <p>{{ $route.params.categoryId }}</p>
    <div v-if="this.$store.state.products">
      <ol>
        <li v-for="product in this.$store.state.products" :key="product.id">
          Name of product: {{ product.name }} <br />
          Category of product: {{ product.category }}
        </li>
      </ol>
      <ol>
        <li v-for="filtered in filteredArray" :key="filtered.id">
          {{ filtered.name }}
        </li>
      </ol>

      <div>
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
          v-for="product in this.$store.state.products" :key="product.id"
          no-gutters
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </div>

      <div>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        product: null,
        filteredArray: [],
        perPage: 5,
        currentPage: 1,
        totalRows: this.$store.state.products.length
      }
    },
    props: {},

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
          console.log('Changed route to: ' + to.params.categoryId)
          this.filterArray()
        }
      }
    }
  }
</script>
