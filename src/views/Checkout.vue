<template>
  <div>
    <div class="container">
      <div class="py-5 text-center">
        <h1>Checkout</h1>
        <h5 class="lead">add your address and card to checkout...</h5>
      </div>
    </div>

    <div class="row g-5">
      <!--  -->

      <div class="col-md-7 col-lg-8 text-left">
        <h4 class="mb-3 text-primary">Billing address</h4>
        <form class="needs-validation" novalidate>
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">First name</label>
              <b-form-input
                v-model="name"
                type="text"
                debounce="500"
              ></b-form-input>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                placeholder=""
                value=""
                required
              />
              <br />
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Email </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="you@example.com"
              />
              <br />
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-6">
              <label for="address" class="form-label">Address</label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="Bondegatan 10"
                required
              />
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="col-md-6">
              <label for="country" class="form-label">Country</label>

              <input
                type="text"
                class="form-control"
                id="country"
                placeholder=""
                value=""
                required
              />
              <br />

              <div class="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div class="col-md-6">
              <label for="state" class="form-label">State</label>
              <input
                type="text"
                class="form-control"
                id="state"
                placeholder=""
                value=""
                required
              />
              <div class="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div class="col-md-6">
              <label for="zip" class="form-label">Zip</label>
              <input
                type="text"
                class="form-control"
                id="zip"
                placeholder=""
                required
              />
              <div class="invalid-feedback">
                Zip code required.
              </div>
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
              <label for="cc-name" class="form-label">Name on card</label>
              <input
                type="text"
                class="form-control"
                id="cc-name"
                placeholder=""
                required
              />
              <small class="text-muted">Full name as displayed on card</small>
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label"
                >Credit card number</label
              >
              <input
                type="text"
                class="form-control"
                id="cc-number"
                placeholder=""
                required
              />

              <div class="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-month" class="form-label">Expiration Date:</label>
              <input
                type="text"
                class="form-control"
                id="cc-month"
                placeholder="Month"
                required
              />
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-year" class="form-label"><br /></label>
              <input
                type="text"
                class="form-control"
                id="cc-year"
                placeholder="Year"
                required
              />
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div class="col-md-6">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input
                type="text"
                class="form-control"
                id="cc-cvv"
                placeholder=""
                required
              />

              <div class="invalid-feedback">
                Security code required
              </div>
            </div>
            <div class="col-md-6"></div>
          </div>

          <hr class="my-4" />

          <button class="w-100 btn btn-primary btn-lg" type="submit">
            Continue to checkout
          </button>
          <br />
          <br />
        </form>
      </div>

      <!-- Cart -->
      <div class="col-md-5 col-lg-4 ">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Your cart</span>
          <span class="badge bg-primary rounded-pill">3</span>
        </h4>

        <label for="">Product info</label>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">Product name {{ $store.state.products }}</h6>

              <small class="text-muted">Brief description </small>
            </div>

            <div>
              <div>
                <b-icon variant="danger" icon="x-circle"></b-icon>
              </div>

              <span class="text-muted">$12</span>
            </div>
          </li>

          <li class="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>$20</strong>
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
export default {
  data() {
    return {
      name: "",
      email: "",
      address: "",
    };
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
