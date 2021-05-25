<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-navbar-brand><b-link to="/">LOGO</b-link></b-navbar-brand>
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-for="genre in $store.state.genres" :key="genre.name"
            ><router-link
              :to="{
                name: 'Category',
                params: { slug: genre.slug },
              }"
              >{{ genre.name }}</router-link
            >
          </b-nav-item>
          <!-- ALONA -->
          <b-nav-item
            ><router-link to="/cart"
              ><shopping-cart-button></shopping-cart-button></router-link
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
  </div>
</template>

<script>
import ShoppingCartButton from "./ShoppingCartButton.vue";
export default {
  components: { ShoppingCartButton },
  data() {
    return {
      arrayOfGenres: [],
      productNames: [],
      searchQuery: null,
    };
  },
  methods: {
    onSubmit() {
      console.log("hej hej");
    },
  },
};
</script>

<style></style>
