<template>
  <div>
    <div v-if="user.loggedIn">
      {{ user.data.uid }}
      <b-button @click="signOut">Sign Out</b-button>
    </div>
    <b-container fluid class="nav-container">
      <b-row>
        <b-col class="my-border" cols="2"
          ><router-link to="/">LOGO</router-link></b-col
        >
        <b-col class="my-border" cols="8">
          <b-row>
            <b-col cols="12"
              ><b-form @submit="onSubmit">
                <vue-typeahead-bootstrap
                  class="mt-2"
                  :data="bookNames"
                  v-model="searchQuery"
                  placeholder="Find your next adventure"
                >
                  <template slot="append">
                    <button class="btn btn-secondary">
                      <b-icon icon="search" />
                    </button>
                  </template> </vue-typeahead-bootstrap></b-form
            ></b-col>
            <b-col cols="12"
              ><ul class="nav-link">
                <li v-for="genre in genres" :key="genre.name">
                  <router-link
                    :to="{
                      name: 'Category',
                      params: { slug: genre.slug }
                    }"
                    >{{ genre.name }}</router-link
                  >
                </li>
              </ul></b-col
            >
          </b-row>
        </b-col>
        <b-col class="mt-2 text-right" cols="2"
          ><router-link to="/cart"
            ><shopping-cart-button></shopping-cart-button></router-link
        ></b-col>
      </b-row>
    </b-container>
    <!-- <b-navbar toggleable="sm" type="light" variant="light">
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
          <b-nav-item
            ><router-link to="/cart"
              ><shopping-cart-button></shopping-cart-button></router-link
          ></b-nav-item>

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
    </b-navbar> -->
  </div>
</template>

<script>
  import ShoppingCartButton from './ShoppingCartButton.vue'
  import * as firebase from '../firebase.js'
  import { mapGetters } from 'vuex'

  export default {
    components: { ShoppingCartButton },
    created() {
      this.getGenre()
    },
    computed: {
      ...mapGetters({
        user: 'user'
      }),
      bookNames() {
        const bookNames = []
        this.$store.state.books.forEach((element) => {
          bookNames.push(element.title)
        })
        return bookNames
      }
    },
    data() {
      return {
        searchQuery: null,
        genres: []
      }
    },
    methods: {
      getGenre() {
        firebase.genresCollection.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            //   console.log(doc.id, doc.data(), doc.data().name)
            this.genres.push(doc.data())
            //   console.log(this.genres)
          })
        })
      },
      signOut() {
        firebase.auth.signOut().then(() => {
          //this.$router.replace({ name: 'Home' })
        })
      },
      onSubmit() {
        var isbn = this.getIsbnFromTitle(this.searchQuery)
        this.$router.push({ name: 'Product', params: { isbn: isbn } })
        this.searchQuery = ''
      },
      getIsbnFromTitle(title) {
        var isbn = ''
        this.$store.state.books.forEach((element) => {
          if (title === element.title) {
            isbn = element.isbn
          }
        })
        return isbn
      }
    }
  }
</script>

<style scoped>
  .nav-container {
    background: #403042;
    text-align: start;
  }

  .nav-link {
    list-style: none;
  }

  .nav-link li {
    display: inline-block;
    padding: 0px 15px;
  }

  .nav-link li a {
    transition: all 0.3s ease 0s;
  }

  .nav-link li a:hover {
    color: #9cc4b2;
    text-decoration: none;
  }

  ul {
    padding: 8px 0px;
    margin: 0;
  }

  li,
  a,
  button {
    font-size: 12px;
    color: #edf0f1;
    text-decoration: none;
  }
</style>
