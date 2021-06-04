<template>
  <div>
    <h1>Profile page</h1>
    {{ userUid }}

    <b-card align="center">
      <b-card-text>
        <b-table
          striped
          hover
          :items="items"
          :fields="fields"
          class="table table-dark"
        ></b-table
      ></b-card-text>
    </b-card>
  </div>
</template>

<script>
  import * as firebase from '../firebase'
  export default {
    data() {
      return {
        userUid: this.$route.params.uid,
        userOrders: [],
        fields: [
          { key: 'userUid', sortable: false },
          { key: 'title', sortable: false },
          { key: 'date', sortable: true },
          { key: 'price', sortable: true },
          { key: 'books', sortable: true }
        ],
        items: []
      }
    },
    created() {
      this.getUserOrders()
      this.addTablesItems()
    },
    methods: {
      getUserOrders() {
        firebase.usersCollection
          .doc(this.userUid)
          .collection('orders')
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.userOrders.push(doc.data())
              //console.log(this.userOrders[0].address)
              // this.items[0].Name = this.userOrders[0].address
              //console.log(this.items[0].Name)
              this.addTablesItems()
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

        for (let i = 0; i < this.userOrders.length; i++) {
          // console.log(this.userOrders[i])
          // this.items.push(this.userOrders[i])
          const books = this.userOrders[i].books

          for (let j = 0; j < books.length; j++) {
            const book = books[j]
            book.date = this.userOrders[i].date
            book.addres = this.userOrders[i].addres
            book.userUid = this.userOrders[i].userUid
            console.log(book)
            this.items.push(book)
          }
          /* console.log(book.address)
          this.items[0].Name = book.userUid
          this.items[0].Orders = book.books
          this.items[0].Date = book.date */
        }
      }
    }
  }
</script>

<style></style>
