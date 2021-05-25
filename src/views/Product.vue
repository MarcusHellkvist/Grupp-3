<template>
  <div>
    <!-- FRIDAY -->
    <!-- BAR -->
    <!-- <b-container class="first">
      <b-row class="text-center">
        <b-col id="nameForSite">NAME FOR SITE HAHA</b-col>
      </b-row>
      <b-row class="bv-example-row bv-example-row-flex-cols">
        <b-col id="category1" align-self="baseline"
          ><router-link name="cat1" to="/category/1"
            >Category 1</router-link
          ></b-col
        >
        <b-col id="category2" align-self="baseline"
          ><router-link to="/category/2">Category 2</router-link></b-col
        >
        <b-col id="category3" align-self="baseline"
          ><router-link to="/category/3">Category 3</router-link></b-col
        >
        <b-col id="shopping-cart" align-self="stretch"
          ><router-link to="/cart"
            ><ShoppingCartButton></ShoppingCartButton></router-link
        ></b-col>
      </b-row>

      <b-row id="search" class="mr-2 text-center ">
        <b-col
          ><b-input-group size="md" class=" mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="search" variant="dark"></b-icon>
            </b-input-group-prepend>
            <vue-typeahead-bootstrap
              :data="productNames"
              v-model="searchQuery"
              placeholder="Search Product"
            /> </b-input-group
        ></b-col>
      </b-row>
    </b-container> -->
    <!-- BAR -->

    <!--OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO  -->
    <!-- EVENING -->
    <!--  <b-contaoner fluid="md">
      <b-row id="main">
        <b-col align-self="stretch" cols="4">
          <img
            src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
            alt=""
            width="300px"
            height="400px"
          />
        </b-col>
        <b-row align-h="right">
          <b-col>NAME</b-col>
          <b-col>Author: {{ authorName }}</b-col>
        </b-row>

        <b-col align-h="center" cols="12">
          <b-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            odit dignissimos sequi aspernatur, sapiente eveniet nostrum
            laboriosam, obcaecati nesciunt vitae quidem voluptatum corporis
            maiores autem hic incidunt alias repellendus! Autem?
            {{ productDescription }}
          </b-text>
        </b-col>

        <b-col
          ><div id="price" class="text-left ">
            Price: {{ productPrice }} SEK
          </div>
        </b-col>
        <b-col cols="6"
          ><div class=" text-right">
            <b-button id="addToShopingCart" @click="onClick"
              >ADD TO CART
              <b-icon
                id="icon-cart-check"
                style="color: white; "
                icon="cart4"
                class=" position-relative"
                font-scale="2"
              ></b-icon>
            </b-button>
          </div>
        </b-col>
      </b-row>
    </b-contaoner> -->
    <!-- EVENING -->
    <!--  -->

    <!-- FRIDAY -->

    <!-- <p>{{ productID }}</p>
    <ShoppingCartButton
      :numberOfItems="this.$store.state.cart.length"
    ></ShoppingCartButton> -->

    <!-- <ShoppingCartButton></ShoppingCartButton> -->

    <div d-flex>
      <!--  style="width: 800px; " -->
      <!-- <b-card
        :title="productName"
        :img-src="productPhoto"
        img-alt="Image"
        img-left
        class="mb-3"
        tag="article"
      > -->

      <!-- ALONA MONDAY -->
      <!-- <b-container>
        <b-row>
          <b-col cols="4">
            <b-card
              title="productName"
              img-src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
              img-alt="Card image"
              img-left
              img-width="500px"
              text-variant="left"
              class="mw-100"
            >
              <b-row>
                <b-col cols="12">
                  <b-card-text> Author: {{ authorName }} </b-card-text>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="6"
                  ><b-card-text id="price" class="text-left ">
                    Price: {{ productPrice }} SEK
                  </b-card-text></b-col
                >
                <b-col cols="6"
                  ><div class=" text-right">
                    <b-button id="addToShopingCart" @click="onClick"
                      >ADD TO CART
                      <b-icon
                        id="icon-cart-check"
                        style="color: white; "
                        icon="cart4"
                        class=" position-relative"
                        font-scale="2"
                      ></b-icon>
                    </b-button>
                  </div>
                </b-col>
              </b-row>
              <hr />

              <b-card-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque odit dignissimos sequi aspernatur, sapiente eveniet
                nostrum laboriosam, obcaecati nesciunt vitae quidem voluptatum
                corporis maiores autem hic incidunt alias repellendus! Autem?
                {{ productDescription }}
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container> -->
      <!-- ALONA MONDAY -->
    </div>

    <!-- <b-container>
      <b-row>
        <b-col cols="12" sm="6" style="background-color: pink;">
          1
          <b-row>
            <b-col sm="6" style="background-color: red;"> 2 </b-col>
          </b-row>
        </b-col>

        <b-col cols="12" sm="6">
          <b-row class="ml-2">
            <b-col cols="6" sm="12" style="background-color: black;"> 2 </b-col>
            <b-col
              class="ml-1"
              cols="6"
              sm="12"
              style="background-color: blue;"
            >
              3</b-col
            >

            <b-col md="6" style="background-color: yellow;"> 4</b-col>
            <b-col cols="6" md="6" style="background-color: green;"> 5</b-col>

            <b-col style="background-color: #51355A">
              3.1
            </b-col>
            <b-col style="background-color: #BA6E6E"> 3.2</b-col>
          </b-row>
        </b-col>
      </b-row>
max-height:150px
      <b-row class="d-flex flex-row-reverse bd-highlight"> </b-row>
    </b-container> -->

    <b-container>
      <b-row no-gutters style="background-color: white;" class="">
        <b-col cols="12" md="6" class="" style=" background-color: yellow;">
          <img style="width: 100%;" :src="image" alt="" />
        </b-col>
        <b-col>
          <b-row>
            <b-col
              cols="12"
              md="12"
              style="text-align: left; font-size: 180%; letter-spacing: -1px;  font-weight: bold;
            "
              >{{ title }}
            </b-col>

            <b-col style=" text-align: left;" cols="12" md="12">
              Author: {{ author }}
              <hr
            /></b-col>

            <b-col
              style="font-weight: bold; font-size: 180%; letter-spacing: -1px;  font-weight: bold; text-align: left; "
              cols="6"
              md="6"
              >Price: {{ price }}
            </b-col>
            <b-col style=" " cols="6" md="6"
              ><div class=" text-right">
                <b-button id="addToShopingCart" @click="onClick"
                  >ADD TO CART
                  <b-icon
                    id="icon-cart-check"
                    style="color: white; "
                    icon="cart4"
                    class=" position-relative"
                    font-scale="2"
                  ></b-icon>
                </b-button>
              </div>
            </b-col>
          </b-row>
          <hr />
          <b-col cols="12" md="12" style="font-weight: bold;"
            >Description
          </b-col>
          <hr />
          <b-col cols="12" md="12"> {{ plot }}</b-col>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  /* import ShoppingCartButton from '../components/ShoppingCartButton.vue' */
  export default {
    /*  components: { ShoppingCartButton },
    name: 'Product', */
    data() {
      return {
        author: '',
        image: '',
        plot: '',
        price: 0,
        genre: '',
        pages: 0,
        publisher: '',
        stock: 0,
        rating: 0,
        language: '',
        title: '',
        published: '',
        productsArr: this.$store.state.books,
        /*  isbn: this.$route.params.isbn, */
        isbn: '9781785035142',

        oneObject: {}
        /* numberOfItemsInCart: 0 */
      }
    },
    created() {
      this.fetchLocalData()
      /*  this.numberOfItemsInCart = this.$store.state.cart.length */
    },
    methods: {
      fetchLocalData() {
        /*  fetch('books.json')
          .then((response) => response.json())
          .then((data) => {
            this.productsArr = data.products
            
            console.log('hi ffffffff', this.productsArr) */
        this.pickRightObject()
        this.giveVAlueToObject()
        /* }) */
      },
      pickRightObject() {
        for (let i = 0; i < this.productsArr.length; i++) {
          if (this.productsArr[i].isbn === this.isbn) {
            /* this.oneObject = this.productsArr[i] */

            this.oneObject = {
              isbn: this.productsArr[i].isbn,
              title: this.productsArr[i].title,
              author: this.productsArr[i].author,
              plot: this.productsArr[i].plot,
              price: this.productsArr[i].price,
              image: this.productsArr[i].image
            }

            console.log('MY OBJECT', this.oneObject)
          }
        }
      },
      giveVAlueToObject() {
        this.title = this.oneObject.title
        this.image = this.oneObject.image
        this.price = this.oneObject.price
        this.author = this.oneObject.author
        this.plot = this.oneObject.plot
      },
      onClick() {
        this.$store.commit('addToCart', this.oneObject)
        /* this.$store.state.cart.length++ */
        /* console.log(this.numberOfItemsInCart) */
      }
    },
    watch: {
      '$route.params.productId'(to, from) {
        console.log(`params changed - to: ${to} from:${from}`)
        this.isbn = to
        this.fetchLocalData()

        // Fixa så det fungerar i realtid, just nu måste man uppdatera hemsidan manuellt för att ändringar ska ske.
      }
    }
  }
</script>

<style scoped>
  #nameForSite {
    color: white;
    font-size: 250%;
    /* background-image: linear-gradient(to bottom, #4b3b40, #31563a); */
    background-image: linear-gradient(
      to top,
      rgba(255, 0, 0, 0),
      rgb(75, 177, 55)
    );
    /*  margin: 0px 0px 20px; */
    /* border: 0px solid #8eb8a0; */
  }

  .first {
    font-size: 150%;
    margin: 35px 0px;
    /* background-color: pink; */
    /* background-image: url('../assets/books.jpg'); */
    background-size: 100% 100%;
    font-family: 'Courier New', Courier, monospace;
    color: white;
    font-weight: bold;
    box-shadow: rgba(17, 17, 26, 0.452) 0px 8px 24px,
      rgba(17, 17, 26, 0.5) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
    /* border-radius: 25px; */
    /*  border: 15px solid #8eb8a0; */
  }

  #category1 {
    color: ivory;
    border-radius: 25px;
    background-color: white;
    border: 5px solid #8eb8a0;
    /* box-shadow: rgba(0.8, 0.8, 0.8, 0.8) 10px 5px 10px 10px; */
    box-shadow: rgba(103, 245, 74, 0.425) 10px 5px 10px 10px;

    /* margin: 5px 5px 20px; */
  }
  #category2 {
    color: ivory;
    border-radius: 25px;
    background-color: white;
    border: 5px solid #8eb8a0;
    box-shadow: rgba(103, 245, 74, 0.425) 10px 5px 10px 10px;
    /* margin: 5px 5px 20px; */
  }

  #category3 {
    color: ivory;
    border-radius: 25px;
    background-color: white;
    border: 5px solid #8eb8a0;
    box-shadow: rgba(103, 245, 74, 0.425) 10px 5px 10px 10px;
    /* margin: 5px 5px 0px; */
  }

  #shopping-cart {
    padding: 0%;
    /* box-shadow: rgba(103, 245, 74, 0.425) 10px 5px 10px 10px; */
  }

  #search {
    /* margin: 0px, 100px 100px; */
    /* box-shadow: rgba(103, 245, 74, 0.425) 10px 5px 10px 10px; */
  }

  .mr-2 {
    margin-left: (2 * 0.25) !important;
    width: 700px;
  }
  hr {
    margin: 5px 5px;
    color: black;
  }

  #picture {
    background-color: darksalmon;
    /*  max-width: 300px; */
  }
  #main {
    background-color: azure;
  }
</style>
