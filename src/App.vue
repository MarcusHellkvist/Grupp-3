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
                <b-nav-link
                  ><router-link to="/category/1"
                    >Category 1</router-link
                  ></b-nav-link
                >
                <b-nav-link
                  ><router-link to="/category/2"
                    >Category 2</router-link
                  ></b-nav-link
                >
                <b-nav-link
                  ><router-link to="/category/3"
                    >Category 3</router-link
                  ></b-nav-link
                >
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
          <router-link to="/">Homepage</router-link> |
          <router-link to="/product">Product</router-link> |
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
  font-weight: bold;
  color: #2c3e50;
  margin: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
