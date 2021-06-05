<template>
  <div>
    <b-container>
      <b-row class="register" align-h="center">
        <b-col col lg="5" md="7" sm="10" cols="10">
          <b-card
            header="Sign into your account"
            border-variant="primary"
            header-bg-variant="primary"
            header-text-variant="white"
          >
            <b-card-text>
              <b-form @submit.prevent="submit" class="text-left">
                <b-form-group label="Email address:">
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
                Dont have an account?
                <router-link to="/register">Register here..</router-link></small
              >
            </template>
          </b-card>
        </b-col>
      </b-row>

      <!--  <b-row>
        <b-col>
          {{ error }}
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
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
        </b-col>
      </b-row> -->
    </b-container>
  </div>
</template>

<script>
  import * as firebase from '../firebase.js'
  export default {
    data() {
      return {
        error: '',
        form: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      submit() {
        firebase.auth
          .signInWithEmailAndPassword(this.form.email, this.form.password)
          .then(() => {
            this.$router.replace({ name: 'Home' })
          })
          .catch((err) => {
            console.log(err.message)
          })

        // firebase
        //   .auth()
        //   .signInWithEmailAndPassword(this.form.email, this.form.password)
        //   .then(() => {
        //     this.$router.replace({ name: 'Home' })
        //   })
        //   .catch((err) => {
        //     this.error = err.message
        //   })
      }
    }
  }
</script>

<style scoprd>
  .register {
    padding-top: 2rem;
  }
</style>
