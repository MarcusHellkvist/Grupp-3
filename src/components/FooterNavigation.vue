<template>
  <div>
    <b-container fluid class="news-letter">
      <b-row no-gutters align-v="center">
        <b-col cols="12">
          <b-form inline style="justify-content: center;">
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
    </b-container>
    <b-container fluid class="footer">
      <b-row>
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
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h6 {
  color: white;
}

.footer {
  background: #403042;
  text-align: start;
  padding: 24px;
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

span {
  font-size: 14px;
}
</style>
