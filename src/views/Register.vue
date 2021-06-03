<template>
  <b-container>
    <b-row>
      <b-col></b-col>
      <b-col>
        <h6>Create an account</h6>
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
          Already have an account?
          <router-link to="/login">Login here..</router-link>
        </h6>
      </b-col>
      <b-col></b-col>
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
          password: ''
        }
      }
    },
    methods: {
      submit() {
        firebase.auth
          .createUserWithEmailAndPassword(this.form.email, this.form.password)
          .then((data) => {
            firebase.usersCollection
              .doc(data.user.uid)
              .set({
                email: this.form.email
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
          })
      }
    }
  }
</script>

<style></style>
