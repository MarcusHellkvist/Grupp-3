<template>
  <div id="app">
    <div id="nav">
      <navigation-bar></navigation-bar>
    </div>
    <div id="main">
      <router-view />
    </div>
    <div id="footer">
      <footer-navigation></footer-navigation>
    </div>
  </div>
</template>

<script>
import FooterNavigation from "./components/FooterNavigation.vue";
import NavigationBar from "./components/NavigationBar.vue";
export default {
  name: "App",
  components: { NavigationBar, FooterNavigation },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* #nav {
  padding: 0px;
}

#nav a {
  font-weight: normal;
  color: #2c3e50;
  margin: 0px;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */

#main {
  flex-grow: 1;
}
</style>
