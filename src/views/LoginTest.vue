<template>
  <div class="container">
    <h1>Sign In page</h1>
    <div>
      <!-- Sign in card -->
      <b-card
        border-variant="primary"
        header="Sign In"
        header-bg-variant="primary"
        header-text-variant="white"
        align="left"
      >
        <b-card-text>
          <h6>User Name</h6>
          <b-input v-model="email"></b-input>
          <h6>Password</h6>
          <b-input v-model="password"></b-input>
          <b-button variant="primary" @click="signIn">Sign In</b-button>
          <b-button variant="primary" @click="signUp">Sign Up</b-button>
          {{ email }}
          {{ password }}
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
  import firebase from '../main'
  export default {
    data() {
      return {
        email: null,
        password: null
      }
    },
    created() {
      firebase.auth()
      firebase.firestore()
    },
    methods: {
      signIn() {
        const auth = firebase.auth()
        const user = firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code
            var errorMessage = error.message
            if (errorCode === 'auth/wrong-password') {
              alert('Wrong password.')
            } else {
              alert(errorMessage)
            }
            console.log(error)
          })
        console.log(auth.currentUser.uid)
        console.log(user)
      },
      async signUp() {
        console.log('pressed')

        const auth = firebase.auth()
        const db = firebase.firestore()

        const user = await auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .catch(function(error) {
            // Handle Errors here.
            /* var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("The password is too weak.");
          } else {
            alert(errorMessage);
          } */
            console.log(error)
          })

        console.log(user)
        //const uid = auth.currentUser.uid;
        this.$store.commit('getCurrentUser', user.user.uid)
        console.log(user.user.uid)
        try {
          await db
            .collection('users')
            .doc(user.user.uid)
            .set({
              name: 'Atlal'
            })
        } catch (error) {
          console.log(error)
          //return;
        }
        try {
          await db
            .collection('users')
            .doc(user.user.uid)
            .collection('order')
            .doc(user.user.uid)
            .set({ orderId: user.user.uid })
        } catch (error) {
          console.log(error)
          //return;
        }

        /* .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        }); */
      }
    }
  }
</script>

<style scoped></style>
