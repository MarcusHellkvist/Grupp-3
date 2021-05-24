<template>
  <b-container fluid>
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
                <!-- ALONA -->
                <b-nav-item
                  ><router-link to="/cart"
                    ><ShoppingCartButton></ShoppingCartButton></router-link
                ></b-nav-item>

                <!-- ALONA -->
              </b-navbar-nav>
              <b-navbar-nav class="ml-auto">
                <b-nav-form @submit="onSubmit">
                  <b-input-group size="sm" class="mb-2">
                    <b-input-group-prepend is-text>
                      <b-icon icon="search" variant="dark"></b-icon>
                    </b-input-group-prepend>
                    <vue-typeahead-bootstrap
                      :data="productNames"
                      v-model="searchQuery"
                      placeholder="Search Product"
                    />
                  </b-input-group>
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
    <!-- footer -->
    <b-row class="news-letter" align-h="center">
      <b-col cols="8">
        <b-form inline>
          <span
            >Learn about new offers and get more deals by joining our
            newsletter</span
          >
          <b-form-input
            class="mr-2 ml-2"
            size="sm"
            placeholder="Email Address"
          ></b-form-input>
          <b-button size="sm" variant="primary">Sign up now</b-button>
        </b-form>
      </b-col>
    </b-row>
    <b-row class="footer">
      <b-col md="3" sm="12">
        <h6>Explore</h6>
        <ul>
          <li><router-link to="#">About us</router-link></li>
          <li><router-link to="#">Help</router-link></li>
          <li><router-link to="#">Press</router-link></li>
          <li><router-link to="#">Stores</router-link></li>
        </ul>
      </b-col>
      <b-col md="3" sm="12">
        <h6>Account</h6>
        <ul>
          <li><router-link to="#">Orders</router-link></li>
          <li><router-link to="#">Wishlist</router-link></li>
          <li><router-link to="#">Customer information</router-link></li>
        </ul>
      </b-col>
      <b-col md="3" sm="12">
        <h6>Important Stuff</h6>
        <ul>
          <li><router-link to="#">Customer support</router-link></li>
          <li><router-link to="#">Cookies</router-link></li>
          <li><router-link to="#">FAQ</router-link></li>
          <li><router-link to="#">Terms &amp; conditions</router-link></li>
        </ul>
      </b-col>
      <b-col md="3" sm="12">
        <h6>We accept these payment methods</h6>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ShoppingCartButton from "./components/ShoppingCartButton.vue";
export default {
  name: "App",
  components: { ShoppingCartButton },

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

.footer {
  background: #403042;
  padding: 20px;
}

.footer a {
  color: white;
}

.footer ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.footer li {
  padding: 8px;
  border-bottom: 1px solid rgb(255, 255, 255, 0.1);
}

.news-letter {
  background-color: white;
  margin-top: 24px;
  padding: 12px;
  color: black;
}
</style>
