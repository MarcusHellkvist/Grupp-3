<template>
  <div>
    <b-container class="mt-4">
      <b-row>
        <b-col lg="4" md="4">
          <b-card>
            <b-card-text>
              <div class="d-flex flex-column align-items-center text-center">
                <img
                  src="https://picsum.photos/250/250/?image=58"
                  class="rounded-circle"
                  width="150"
                />
                <div class="mt-2">
                  <h4>{{ userInfo.firstName }} {{ userInfo.lastName }}</h4>
                </div>
              </div>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col lg="8" md="8">
          <b-card>
            <b-card-text class="text-left">
              <b-row>
                <b-col lg="3" md="3" sm="3" cols="4"
                  ><strong>Full Name</strong></b-col
                >
                <b-col lg="9" md="9" sm="9" cols="8">
                  <strong class="text-muted">
                    {{ userInfo.firstName }} {{ userInfo.lastName }}
                  </strong>
                </b-col>
              </b-row>
              <hr />
              <b-row>
                <b-col lg="3" md="3" sm="3" cols="4"
                  ><strong>Email</strong></b-col
                >
                <b-col lg="9" md="9" sm="9" cols="8"
                  ><strong class="text-muted">{{
                    userInfo.email
                  }}</strong></b-col
                >
              </b-row>
              <hr />
              <b-row>
                <b-col lg="3" md="3" sm="3" cols="4"
                  ><strong>Address</strong></b-col
                >
                <b-col lg="9" md="9" sm="9" cols="8"
                  ><strong class="text-muted">{{
                    userInfo.address
                  }}</strong></b-col
                >
              </b-row>
              <hr />
              <b-row>
                <b-col lg="3" md="3" sm="3" cols="4"
                  ><strong>Mobile</strong></b-col
                >
                <b-col lg="9" md="9" sm="9" cols="8">{{
                  userInfo.mobile
                }}</b-col>
              </b-row>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="mt-4">
      <b-row>
        <b-col
          ><b-table
            striped
            hover
            :items="items"
            :fields="fields"
            class="table table-dark"
          ></b-table
        ></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import * as firebase from '../firebase'
  export default {
    data() {
      return {
        userInfo: '',

        userUid: this.$route.params.uid,
        userOrders: [],
        fields: [
          { key: 'isbn', sortable: false },
          { key: 'title', sortable: false },
          { key: 'quantity', sortable: false },
          { key: 'price', sortable: true },
          { key: 'date', sortable: true }
        ],
        items: []
      }
    },
    created() {
      this.getUserInfo()
      this.getUserOrders()
    },
    methods: {
      getUserInfo() {
        firebase.usersCollection
          .doc(this.userUid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              this.userInfo = doc.data()
            }
          })
          .catch((error) => {
            console.log('Error:', error)
          })
      },
      getUserOrders() {
        this.userOrders = []
        firebase.usersCollection
          .doc(this.userUid)
          .collection('orders')
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              var date = doc.data().date
              var books = doc.data().books

              // books.push(doc.data().books[0])
              for (let j = 0; j < books.length; j++) {
                const book = books[j]
                book.date = date
                this.items.push(books[j])
              }
            })
          })
          .catch((error) => {
            console.log('Error getting documents: ', error)
          })
      },
      addTablesItems() {
        /*   var orders = Array.prototype.concat.apply(
          [],
          this.userOrders.map((order) => order.books.map((book) => book.title))
        )
        console.log(orders)  */
      }
    }
  }
</script>

<style></style>
