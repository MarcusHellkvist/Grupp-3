<template>
  <b-container>
    <b-row>
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
    </b-row>
  </b-container>
</template>

<script>
import firebase from "firebase";
import "firebase/firestore";
export default {
  created() {
    firebase.firestore();
  },
  data() {
    return {
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
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          console.log(data.user.uid);
          firebase
            .firestore()
            .collection("users")
            .doc(data.user.uid)
            .set({
              email: this.form.email,
            })
            .then(() => {
              console.log("Document successfully written!");
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
