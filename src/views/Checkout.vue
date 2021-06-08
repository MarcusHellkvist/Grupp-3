<template>
  <div>
    <div :class="showAndHide" class="container">
      <!-- head -->
      <div class="text-center">
        <h1>Checkout</h1>
        <h5>add your address and card to checkout...</h5>
        {{ $v.form.name.$model }}
      </div>

      <!-- head -->
      <!-- Address and cart -->
      <b-container fluid>
        <b-form-row>
          <b-col lg="8" md="12" sm="12">
            <h4>Billing Address</h4>

            <b-form @submit.stop.prevent="onSubmit">
              <b-row class="text-left">
                <b-col md="6">
                  <h6>Name</h6>
                  <b-form-group id="name">
                    <b-form-input
                      id="name-input"
                      name="name-input"
                      type="text"
                      v-model="$v.form.name.$model"
                      :state="validateState('name')"
                      aria-describedby="name-feedback"
                    ></b-form-input>

                    <b-form-invalid-feedback id="name-feedback"
                      >Required field.</b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <h6>Last Name</h6>
                  <b-form-group id="lastName">
                    <b-form-input
                      id="lastname-input"
                      name="lastname-input"
                      v-model="$v.form.lastName.$model"
                      :state="validateState('lastName')"
                      aria-describedby="lastname-feedback"
                    ></b-form-input>

                    <b-form-invalid-feedback id="lastname-feedback"
                      >Required field.</b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>
                <b-col md="12">
                  <h6>Email</h6>
                  <b-form-group id="email">
                    <b-form-input
                      id="email-input"
                      name="email-input"
                      type="email"
                      class="form-control"
                      v-model="$v.form.email.$model"
                      :state="validateState('email')"
                      aria-describedby="email-feedback"
                    ></b-form-input>

                    <b-form-invalid-feedback id="email-feedback"
                      >Required field.</b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <h6>Address</h6>
                  <b-form-group id="address">
                    <b-form-input
                      id="address-input"
                      name="address-input"
                      v-model="$v.form.address.$model"
                      :state="validateState('address')"
                      aria-describedby="address-feedback"
                    ></b-form-input>

                    <b-form-invalid-feedback id="address-feedback"
                      >Required field.</b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <h6>Country</h6>
                  <b-form-group id="country">
                    <b-form-input
                      id="country-input"
                      name="country-input"
                      v-model="$v.form.country.$model"
                      :state="validateState('country')"
                      aria-describedby="country-feedback"
                    ></b-form-input>

                    <b-form-invalid-feedback id="country-feedback"
                      >Required field.</b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <h6>State</h6>
                  <b-form-group id="state">
                    <b-form-input
                      id="state-input"
                      name="state-input"
                      v-model="$v.form.state.$model"
                      :state="validateState('state')"
                      aria-describedby="state-feedback"
                    ></b-form-input>

                    <b-form-invalid-feedback id="state-feedback"
                      >Required field.</b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <h6>Zip</h6>
                  <b-form-group id="zip">
                    <b-form-input
                      id="zip-input"
                      name="zip-input"
                      v-model="$v.form.zip.$model"
                      :state="validateState('zip')"
                      aria-describedby="zip-feedback"
                    ></b-form-input>

                    <b-form-invalid-feedback id="zip-feedback"
                      >Required field.</b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>
              </b-row>

              <!-- Payment -->
              <hr class="my-4" />
              <h4 class="text-left">Payment</h4>
              <b-row class="text-left">
                <b-col cols="6" md="6">
                  <h6>Name on Card</h6>
                  <b-form-group id="cardName">
                    <b-form-input
                      id="cc-name-input"
                      name="cc-name-input"
                      placeholder="Full name as displayed on card"
                      v-model="$v.form.cardName.$model"
                      :state="validateState('cardName')"
                      aria-describedby="cc-name-feedback"
                    ></b-form-input>

                    <b-form-invalid-feedback id="cc-name-feedback"
                      >Credit card name is required.</b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>
                <b-col cols="6" md="6">
                  <h6>Credit Card Number</h6>
                  <b-form-group id="cardNumber">
                    <b-form-input
                      id="cc-number-input"
                      name="cc-number-input"
                      type="text"
                      pattern="\d*"
                      maxlength="16"
                      minlength="16"
                      placeholder="1234 5678 9101 1213"
                      v-model="$v.form.cardNumber.$model"
                      :state="validateState('cardNumber')"
                      aria-describedby="cc-number-feedback"
                    ></b-form-input>

                    <b-form-invalid-feedback id="cc-number-feedback"
                      >Credit card number is required.</b-form-invalid-feedback
                    >
                  </b-form-group>
                </b-col>
                <b-col cols="3" md="3">
                  <h6>Expiration</h6>
                  <b-form-group id="cardDateMonth">
                    <b-form-select
                      id="month-input"
                      name="month-input"
                      placeholder="Month"
                      v-model="$v.form.cardDateMonth.$model"
                      :options="cardDateMonth"
                      :state="validateState('cardDateMonth')"
                      aria-describedby="month-feedback"
                    ></b-form-select>

                    <b-form-invalid-feedback id="month-feedback"
                      >Expiration date required.</b-form-invalid-feedback
                    >
                  </b-form-group></b-col
                >
                <b-col cols="3" md="3">
                  <h6>Date</h6>
                  <b-form-group id="cardDateYear">
                    <b-form-select
                      id="year-input"
                      name="year-input"
                      placeholder="Year"
                      v-model="$v.form.cardDateYear.$model"
                      :options="cardDateYear"
                      :state="validateState('cardDateYear')"
                      aria-describedby="year-feedback"
                    ></b-form-select>

                    <b-form-invalid-feedback id="year-feedback"
                      >Expiration date required.</b-form-invalid-feedback
                    >
                  </b-form-group></b-col
                >
                <b-col cols="6" md="6">
                  <h6>CVV</h6>
                  <b-form-group id="cardCVV">
                    <b-form-input
                      id="cvv-input"
                      name="cvv-input"
                      placeholder="123"
                      type="text"
                      pattern="\d*"
                      maxlength="3"
                      v-model="$v.form.cardCVV.$model"
                      :state="validateState('cardCVV')"
                      aria-describedby="cvv-feedback"
                    ></b-form-input>

                    <b-form-invalid-feedback id="cvv-feedback"
                      >Security code required.</b-form-invalid-feedback
                    >
                  </b-form-group></b-col
                >
              </b-row>
              <hr class="my-4" />

              <b-button
                type="submit"
                variant="primary"
                class="w-100 btn btn-primary btn-lg"
                >Continue to checkout</b-button
              >

              <!-- Payment -->
            </b-form>
          </b-col>

          <!-- Cart -->
          <b-col lg="4" md="12" sm="12" class="text-left order-md-last">
            <div class="d-flex justify-content-between">
              <h4>Your Cart</h4>
              <strong>{{ cart.length }}</strong>
            </div>

            <h6>Product/s info</h6>

            <b-list-group v-if="cart">
              <b-list-group-item
                v-for="product in cart"
                :key="product.isbn"
                class="d-flex justify-content-between"
              >
                <div>
                  <h6>{{ product.title }}</h6>
                  <small class="text-muted">{{ product.author }} </small>
                  <span class="badge badge-primary badge-pill"
                    >{{ product.quantity }} quantity</span
                  >
                </div>
                <div>
                  <b-icon
                    variant="danger"
                    icon="x-circle-fill"
                    @click="deleteProduct(product.isbn)"
                  ></b-icon>
                  <h6 class="text-muted text-right">
                    ${{ product.price * product.quantity }}
                  </h6>
                </div>
              </b-list-group-item>
            </b-list-group>
            <b-list-group>
              <b-list-group-item class="d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${{ sum }} </strong>
              </b-list-group-item>
            </b-list-group>

            <!-- Vouche -->

            <b-list-group-item class="d-flex justify-content-between">
              <div>
                <b-input-group class="mt-3">
                  <b-form-input
                    id="voucher"
                    data=""
                    v-model="voucherCode"
                    :disabled="rightVoucher"
                    placeholder="Voucher"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-button
                      class="btn btn-secondary"
                      :disabled="rightVoucher"
                      @click="voucher"
                      >Add</b-button
                    >
                  </b-input-group-append>
                </b-input-group>

                <h6 v-if="rightVoucher">
                  <hr />
                  Approved voucher: {{ voucherCode }}
                  <b-icon
                    variant="danger"
                    icon="x-circle-fill"
                    @click="deleteVoucher"
                  ></b-icon>
                </h6>
                <h6 v-else-if="falseVoucher">
                  <hr />
                  Wrong code
                </h6>
              </div>
            </b-list-group-item>
            <!-- Vouche -->
          </b-col>
          <!-- Cart -->
        </b-form-row>
      </b-container>

      <!-- Address and card -->
    </div>

    <!-- success alert -->

    <div :class="showAlert" ref="successAlert">
      <b-alert show variant="success">
        <h4>SUCCESS!</h4>
        <p>Aww yeah, you will get order soon!!! yahhhh</p>
        <hr />
        <div class="d-flex justify-content-between">
          <h5>Invoice..</h5>

          <button @click="print" variant="outline-dark" class="btn float-right">
            <b-icon variant="dark" icon="printer" font-scale="2"></b-icon>
          </button>
        </div>
        <b-list-group v-if="localCart">
          <b-list-group-item
            v-for="product in localCart"
            :key="product.productId"
            class="list-group-item d-flex justify-content-between"
          >
            <h6 class="my-0">Product name {{ product.title }}</h6>
            <span class="text-muted">${{ product.price }}</span>
          </b-list-group-item>
          <b-list-group-item
            class="list-group-item d-flex justify-content-between"
          >
            <span>Total (USD)</span>
            <strong>${{ sum }} </strong>
          </b-list-group-item>
        </b-list-group>
        <hr />
        <p>have a good day....</p>
      </b-alert>

      <!-- success alert -->
    </div>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import {
    required,
    minLength,
    maxLength,
    email,
    decimal
  } from 'vuelidate/lib/validators'

  import * as firebace from '../firebase'
  import emailjs from 'emailjs-com'
  import { init } from 'emailjs-com'
  init('user_GROqJdzcqEARwCHGVqGmU')

  export default {
    components: {},
    mixins: [validationMixin],
    data() {
      return {
        falseVoucher: false,
        voucherArray: [],
        rightVoucher: false,
        voucherCode: '',
        //successAlert: this.$el.innerHTML,
        div: null,
        day: new Date().toDateString(),
        cart: [],
        //userUid: this.$store.state.user.data.uid,
        //loggedIn: this.$store.state.user.loggedIn,
        products: this.$store.state.books,
        localCart: [],
        sum: 0,
        showAndHide: null,
        showAlert: 'd-none',
        item: '',

        cardDateMonth: [
          { value: null, text: 'Month..' },
          { value: '01', text: '01' },
          { value: '02', text: '02' },
          { value: '03', text: '03' },
          { value: '04', text: '04' },
          { value: '05', text: '05' },
          { value: '06', text: '06' },
          { value: '07', text: '07' },
          { value: '08', text: '08' },
          { value: '08', text: '09' },
          { value: '10', text: '10' },
          { value: '11', text: '11' },
          { value: '12', text: '12' }
        ],
        cardDateYear: [
          { value: null, text: 'Year..' },
          { value: '2021', text: '2021' },
          { value: '2022', text: '2022' },
          { value: '2023', text: '2023' },
          { value: '2024', text: '2024' },
          { value: '2025', text: '2025' },
          { value: '2026', text: '2026' },
          { value: '2027', text: '2027' }
        ],
        form: {
          name: null,
          lastName: null,
          email: null,
          address: null,
          country: null,
          state: null,
          zip: null,
          cardName: null,
          cardNumber: null,
          cardDateMonth: null,
          cardDateYear: null,
          cardCVV: null
        }
      }
    },

    validations: {
      form: {
        name: {
          required,
          minLength: minLength(3)
        },
        lastName: {
          required,
          minLength: minLength(3)
        },
        email: { required, email },
        address: { required },
        country: { required },
        state: { required },
        zip: { required },
        cardName: { required, minLength: minLength(3) },
        cardNumber: {
          required,
          minLength: minLength(16),
          maxLength: maxLength(16),
          decimal
        },
        cardDateMonth: { required },
        cardDateYear: { required },
        cardCVV: { required, decimal, minlength: minLength(3) }
      }
    },
    computed: {
      /* somchange() {
      return this.total();
    }, */
    },
    mounted() {
      this.div = document.getElementById('test')
    },

    created() {
      this.getCart()
      this.fetchVouchers()

      // this.addTolocalCart()
    },

    methods: {
      fetchVouchers() {
        firebace.vouchersCollection.get().then((vouchers) => {
          vouchers.forEach((doc) => {
            this.voucherArray.push(doc.data())
            console.log(doc.data())
          })
        })
      },
      deleteVoucher() {
        for (let i = 0; i < this.voucherArray.length; i++) {
          if (this.voucherCode === this.voucherArray[i].voucherCode) {
            this.sum = this.sum / this.voucherArray[i].value
            this.rightVoucher = false
            this.falseVoucher = false
            this.voucherCode = ''
          }
        }
      },
      voucher() {
        for (let i = 0; i < this.voucherArray.length; i++) {
          if (this.voucherCode === this.voucherArray[i].voucherCode) {
            this.sum = this.sum * this.voucherArray[i].value
            this.rightVoucher = true
          } else {
            this.falseVoucher = true
          }
        }

        // console.log(this.voucherCode);
        // if (this.voucherCode === "book20") {
        //   this.sum = this.sum * 0.8;

        //   this.rightVoucher = true;
        // console.log(this.test);
        // this.voucherCode = null;
        // }
      },
      sendEmail() {
        var container = document.createElement('span')
        container = 'test container'

        console.log(container)

        try {
          emailjs.send(
            'service_books',
            'template_books',

            {
              sendToEmail: this.form.email,
              userName: this.form.name,
              HTML: `
               <div>
               <h1>ORDER CONFIRMATION</h1>
                <h3>Thank you for your order</h3>
                <h6>We have received your order and will contact you as soon as your package is shipped, You can find you purchase information below.</h6>
                <h4>Order Summary</h4>
                <h4>Date ${this.day}</h4>
                <P>Book ${this.cart[0].title} and ${this.cart.length} item/s has shepped! to this address ${this.form.address}
                <div >${container}</div>
                .
                For more info check your profile history orders</P>
                </div>
              `
            }
          )
        } catch (error) {
          console.log(error)
        }
      },
      print() {
        window.print()
      },

      validateState(input) {
        const { $dirty, $error } = this.$v.form[input]
        return $dirty ? !$error : null
      },

      onSubmit() {
        console.log(this.cart[0].title)
        console.log(this.localCart)

        this.addTolocalCart()

        this.addOrder()
        this.sendEmail()
        this.clearFirebaseCart()

        // this.clearFirebaseCart()
        /* this.$v.form.$touch();
        if (this.$v.form.$anyError) {
         return;
       } */
        if (this.cart.length > 0) {
          console.log(this.form.name)
          this.showAndHide = 'd-none'
          this.showAlert = ''
          // this.clearCart()
        }
      },

      /* Firebase */
      deleteProduct(id) {
        if (
          this.$store.state.user.loggedIn &&
          this.$store.state.user.data.uid !== null
        ) {
          firebace.usersCollection
            .doc(this.$store.state.user.data.uid)
            .collection('cart')
            .doc(id)
            .delete()
            .then(() => {
              console.log('Document successfully deleted!')

              this.total()
            })
            .catch((error) => {
              console.error('Error removing document: ', error)
            })
        } else {
          console.log(id)
          this.$store.commit('deleteProduct', id)

          this.total()
        }
        // .catch((error) => {
        //   console.error("Error removing document: ", error);
        // });
        // } else {
        //   console.log(id);
        //   this.$store.commit("deleteProduct", id);

        //   this.total();
        // }
      },

      clearCart() {
        this.$store.commit('clearCart')
      },

      total() {
        this.sum = 0
        for (let i = 0; i < this.cart.length; i++) {
          this.sum += this.cart[i].price * this.cart[i].quantity
        }

        return this.sum
      },

      addTolocalCart() {
        this.localCart = []
        this.localCart = [...this.cart]
        /* for (let i = 0; i < this.cart.length; i++) {
           this.localCart.push(this.cart[i])
         } */
        return this.localCart
      },

      getCart() {
        if (this.$store.state.user.loggedIn) {
          firebace.usersCollection
            .doc(this.$store.state.user.data.uid)
            .collection('cart')
            .onSnapshot((querySnapshot) => {
              this.cart = []

              querySnapshot.forEach((doc) => {
                this.cart.push(doc.data())
              })
            }),
            (error) => {
              console.log(error)
            }
        } else {
          this.cart = []
          this.cart = this.$store.state.cart
        }
        this.total()
      },

      clearFirebaseCart() {
        for (let i = 0; i < this.cart.length; i++) {
          const isbn = this.cart[i].isbn

          firebace.usersCollection
            .doc(this.$store.state.user.data.uid)
            .collection('cart')
            .doc(isbn)
            .delete()
            .then(() => {
              console.log('Document successfully deleted!')
            })
            .catch((error) => {
              console.error('Error removing document: ', error)
            })
        }
      },
      addBooksToOrder() {
        for (let i = 0; i < this.cart.length; i++) {
          const isbn = this.cart[i].isbn
          firebace.usersCollection
            .doc(this.$store.state.user.data.uid)
            .collection('orders')
            .doc()
            .collection('books')
            .doc(isbn)
            .set(this.cart[i])
            .then(() => {
              console.log('Document successfully written!')
            })
            .catch((error) => {
              console.error('Error writing document: ', error)
            })
        }
      },
      addOrder() {
        const day = new Date().toDateString()

        firebace.usersCollection
          .doc(this.$store.state.user.data.uid)
          .collection('orders')
          .doc()
          .set({
            books: this.cart,
            date: day,
            userUid: this.$store.state.user.data.uid,
            address: 'Send to Me, Gatan 10 41345 Göteborg, Sweden'
          })
          .then(() => {})
          .catch((error) => {
            console.error('Error writing document: ', error)
          })

        //const isbn = this.cart[i].isbn
        firebace.usersCollection
          .doc(this.userUid)
          .collection('orders')
          .doc()

          .set({
            books: this.cart,
            date: day,
            userUid: this.userUid,
            address: 'Send to Me, Gatan 10 41345 Göteborg, Sweden'
          })
          .then(() => {
            console.log('Document successfully written!')
          })
          .catch((error) => {
            console.error('Error writing document: ', error)
          })
      }
    }
  }
</script>

<style scoped>
  .container {
    max-width: 960px;
    text-align: left;
    padding: 1rem;
  }

  #name__BV_label_.d_block {
    padding: 0px;
    margin-bottom: 0 !important;
  }
  h6 {
    margin-bottom: 0rem;
  }
  small {
    margin-top: 0rem;
  }
  span {
    margin-left: 0rem;
    margin-top: 0rem;
  }
</style>
