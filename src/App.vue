<template>
  <b-container>
    <div id="app">
      <b-row id="nav">
        <b-col>
          <b-navbar toggleable="sm" type="light" variant="light">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
            <b-navbar-brand>e-handel</b-navbar-brand>
            <b-collapse id="nav-text-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item
                  ><router-link name="cat1" to="/category/1"
                    >Category 1</router-link
                  ></b-nav-item
                >
                <b-nav-item
                  ><router-link to="/category/2"
                    >Category 2</router-link
                  ></b-nav-item
                >
                <b-nav-item
                  ><router-link to="/category/3"
                    >Category 3</router-link
                  ></b-nav-item
                >
              </b-navbar-nav>
              <b-navbar-nav class="ml-auto">
                <b-nav-form @submit="onSubmit">
                  <!-- <b-form-input
                    size="sm"
                    class="mr-sm-2"
                    placeholder="Search Product"
                    v-model="searchQuery"
                  ></b-form-input> -->

                  <vue-typeahead-bootstrap
                    :data="productNames"
                    v-model="searchQuery"
                    placeholder="Search Product"
                  />

                  <b-button type="submit">Search</b-button>
                </b-nav-form>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
          <router-link to="/">Homepage</router-link> |
          <router-link to="/cart">Cart</router-link> |
          <router-link to="/checkout">Checkout</router-link> |
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <router-view />
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  created() {
    this.getLocalData();
  },
  data() {
    return {
      productNames: [],
      searchQuery: null,
    };
  },
  methods: {
    getLocalData() {
      fetch("products.json")
        .then((response) => response.json())
        .then((data) => {
          console.log(data.products[0].name);
          data.products.forEach((product) => {
            this.productNames.push(product.id + ", " + product.name);
          });
          console.log(this.productNames);
        });
    },
    onSubmit() {
      console.log(this.searchQuery);
      var n = this.searchQuery.indexOf(",");
      var trimmedQuery = this.searchQuery.slice(0, n);
      this.$router.push({
        name: "Product",
        params: { productId: trimmedQuery },
      });
      this.searchQuery = "";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: normal;
  color: #2c3e50;
  margin: 0px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
