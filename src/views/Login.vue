<template>
  <b-container>
    <b-row>
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
    </b-row>
  </b-container>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      error: "",
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.$router.replace({ name: "Home" });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>

<style></style>
