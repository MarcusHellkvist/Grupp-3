<template>
  <div>
    <b-container>
      <b-row>
        <b-col></b-col>
        <b-col>
          <h6>Sign into your account</h6>
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
          <hr />
          <h6>
            Dont have an account?
            <router-link to="/register">Register here..</router-link>
          </h6>
        </b-col>
        <b-col></b-col>
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

<style></style>
