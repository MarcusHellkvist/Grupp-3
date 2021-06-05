<template>
  <b-container>
    <b-row class="register" align-h="center">
      <b-col col lg="5" md="7" sm="10" cols="10">
        <b-card
          header="Create an account"
          border-variant="primary"
          header-bg-variant="primary"
          header-text-variant="white"
        >
          <b-card-text>
            <b-form @submit.prevent="submit" class="text-left">
              <b-form-group label="First name:">
                <b-form-input
                  v-model="form.firstName"
                  placeholder="Enter first name"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Last name:">
                <b-form-input
                  v-model="form.lastName"
                  placeholder="Enter last name"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group id="emailWarning" label="Email address:">
                <b-form-input
                  v-model="form.email"
                  type="email"
                  placeholder="Enter email"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Password:">
                <b-form-input
                  v-model="form.password"
                  placeholder="********"
                  type="password"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Address:">
                <b-form-input
                  v-model="form.address"
                  placeholder="Enter address"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>

              <b-button
                type="submit"
                variant="primary"
                class="w-100 btn btn-primary btn-md"
                >Login</b-button
              >
            </b-form>
          </b-card-text>
          <template #footer>
            <small class="text-muted">
              Already have an account?
              <router-link to="/login">Login here..</router-link></small
            >
          </template>
        </b-card>
      </b-col>
    </b-row>

    <!--  <b-row>
      <b-col>
        <form action="#" @submit.prevent="submit">
          <input
            type="text"
            placeholder="email"
            v-model="form.email"
            required
          />
          <input
            type="password"
            placeholder="password"
            v-model="form.password"
            required
          />
          <button type="submit" class="btn btn-primary">Register</button>
        </form>
      </b-col>
    </b-row> -->
  </b-container>
</template>

<script>
  import * as firebase from '../firebase.js'
  export default {
    created() {
      //   firebase.db.firestore();
    },
    data() {
      return {
        form: {
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          address: ''
        },
        users: []
      }
    },
    methods: {
      emailExists() {
        this.$bvToast.toast(`Email already exists`, {
          title: 'Something went wrong',
          autoHideDelay: 3000,
          appendToast: true,
          variant: 'danger',
          solid: true,
          toaster: 'b-toaster-top-center'
        })
      },
      submit() {
        firebase.auth
          .createUserWithEmailAndPassword(this.form.email, this.form.password)
          .then((data) => {
            firebase.usersCollection
              .doc(data.user.uid)
              .set({
                email: this.form.email,
                firstName: this.form.firstName,
                lastName: this.form.lastName,
                address: this.form.address
              })
              .then(() => {
                console.log('Document successfully written!')
                this.$router.replace({ name: 'Home' })
              })
              .catch((error) => {
                console.error('Error writing document: ', error)
              })
          })
          .catch((err) => {
            console.log(err)
            if (err.code === 'auth/email-already-in-use') {
              this.emailExists()
              document.getElementById('emailWarning').style.color = 'red'
            }
          })
      }
    },
    watch: {}
  }
</script>

<style scoped>
  .register {
    padding-top: 2rem;
  }
</style>
