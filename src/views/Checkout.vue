<template>
  <div>
    <div class="container">
      <div class="py-5 text-center">
        <h1>Checkout</h1>
        <h5 class="lead">add your address and card to checkout...</h5>
        {{ $v.form.name.$model }}
      </div>
    </div>

    <div class="row g-5">
      <!--  -->

      <div class="col-md-7 col-lg-8 text-left">
        <h4 class="mb-3 text-primary">Billing address</h4>

        <b-form @submit.stop.prevent="onSubmit">
          <div class="row g-3">
            <div class="col-sm-6">
              <b-form-group id="name" label="Name" label-for="name-input">
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
            </div>

            <div class="col-sm-6">
              <b-form-group
                id="lastName"
                label="Last Name"
                label-for="lastname-input"
              >
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
            </div>

            <div class="col-12">
              <b-form-group id="email" label="Email" label-for="email-input">
                <b-form-input
                  id="email-input"
                  name="email-input"
                  type="email"
                  v-model="$v.form.email.$model"
                  :state="validateState('email')"
                  aria-describedby="email-feedback"
                ></b-form-input>

                <b-form-invalid-feedback id="email-feedback"
                  >Required field.</b-form-invalid-feedback
                >
              </b-form-group>
            </div>

            <div class="col-6">
              <b-form-group
                id="address"
                label="Address"
                label-for="address-input"
              >
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
            </div>

            <div class="col-md-6">
              <b-form-group
                id="country"
                label="Country"
                label-for="country-input"
              >
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
            </div>

            <div class="col-md-6">
              <b-form-group id="state" label="State" label-for="state-input">
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
            </div>

            <div class="col-md-6">
              <b-form-group id="zip" label="Zip" label-for="zip-input">
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
            </div>
          </div>

          <hr class="my-4" />

          <h4 class="mb-3">Payment</h4>

          <div class="my-3">
            <div class="form-check">
              <input
                id="credit"
                name="paymentMethod"
                type="radio"
                class="form-check-input"
                checked
                required
              />
              <label class="form-check-label" for="credit">Credit card</label>
            </div>
          </div>

          <div class="row gy-3">
            <div class="col-md-6">
              <b-form-group
                id="cardName"
                label="Name on card"
                label-for="cc-name-input"
              >
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
            </div>

            <div class="col-md-6">
              <b-form-group
                id="cardNumber"
                label="Credit card number"
                label-for="cc-number-input"
              >
                <b-form-input
                  id="cc-number-input"
                  name="cc-number-input"
                  type="text"
                  pattern="\d*"
                  maxlength="16"
                  placeholder="1234 5678 9010 1112"
                  v-model="$v.form.cardNumber.$model"
                  :state="validateState('cardNumber')"
                  aria-describedby="cc-number-feedback"
                ></b-form-input>

                <b-form-invalid-feedback id="cc-number-feedback"
                  >Credit card number is required.</b-form-invalid-feedback
                >
              </b-form-group>
            </div>

            <div class="col-md-3">
              <b-form-group
                id="cardDateMonth"
                label="Expiration "
                label-for="month-input"
              >
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
              </b-form-group>
            </div>

            <div class="col-md-3">
              <b-form-group
                id="cardDateYear"
                label="Date"
                label-for="year-input"
              >
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
              </b-form-group>
            </div>

            <div class="col-md-6">
              <b-form-group id="cardCVV" label="CVV" label-for="cvv-input">
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
              </b-form-group>
            </div>
          </div>

          <hr class="my-4" />

          <b-button
            type="submit"
            variant="primary"
            class="w-100 btn btn-primary btn-lg"
            >Continue to checkout</b-button
          >

          <br />
          <br />
        </b-form>
      </div>

      <!-- Cart -->
      <div class="col-md-5 col-lg-4 ">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Your cart</span>
          <span class="badge bg-primary rounded-pill">{{
            $store.state.products.length
          }}</span>
        </h4>

        <label for="">Product info</label>
        <ul v-if="cart" class="list-group mb-3">
          <li
            v-for="product in cart"
            :key="product.id"
            class="list-group-item d-flex justify-content-between lh-sm"
          >
            <div>
              <h6 class="my-0">Product name {{ product.name }}</h6>

              <small class="text-muted">des: {{ product.description }}</small>
            </div>

            <div>
              <div>
                <b-icon
                  variant="danger"
                  icon="x-circle"
                  @click="toDelete"
                ></b-icon>
              </div>

              <span class="text-muted">${{ product.price }}</span>
            </div>
          </li>

          <li class="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>${{ sum }}</strong>
          </li>
        </ul>
      </div>

      <!--  -->
      <!-- test -->

      <!-- test -->
      <div></div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      cart: this.$store.state.products,
      sum: null,
      cardDateMonth: [
        { value: null, text: "Month.." },
        { value: "01", text: "01" },
        { value: "02", text: "02" },
        { value: "03", text: "03" },
        { value: "04", text: "04" },
        { value: "05", text: "05" },
        { value: "06", text: "06" },
        { value: "07", text: "07" },
        { value: "08", text: "08" },
        { value: "08", text: "09" },
        { value: "10", text: "10" },
        { value: "11", text: "11" },
        { value: "12", text: "12" },
      ],
      cardDateYear: [
        { value: null, text: "Year.." },
        { value: "2021", text: "2021" },
        { value: "2022", text: "2022" },
        { value: "2023", text: "2023" },
        { value: "2024", text: "2024" },
        { value: "2025", text: "2025" },
        { value: "2026", text: "2026" },
        { value: "2027", text: "2027" },
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
        cardCVV: null,
        food: null,
      },
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3),
      },
      lastName: {
        required,
        minLength: minLength(3),
      },
      email: {
        required,
      },
      address: {
        required,
      },
      country: { required },
      state: { required },
      zip: { required },
      cardName: { required },
      cardNumber: { required },
      cardDateMonth: { required },
      cardDateYear: { required },
      cardCVV: { required },
    },
  },
  computed: {},
  created() {
    this.total();
  },
  watch: {},
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },

    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      console.log(this.form.name);
      alert("Form submitted!");
    },
    toDelete() {
      console.log("ready to delete item");
    },
    total() {
      for (let i = 0; i < this.cart.length; i++) {
        this.sum += this.cart[i].price;
        console.log(this.sum);
      }
      return this.sum;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 960px;
  text-align: left;
  padding: 1rem;
}
</style>
