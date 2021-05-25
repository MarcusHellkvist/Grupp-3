<template>
  <b-container fluid>
    <div id="app">
      <div id="nav">
        <navigation-bar></navigation-bar>
      </div>
      <div id="main">
        <router-view />
      </div>
      <div class="footer1"></div>
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
import NavigationBar from "./components/NavigationBar.vue";
export default {
  name: "App",
  components: { NavigationBar },
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
