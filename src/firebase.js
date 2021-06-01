import { firebase } from '@firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const configOptions = {
  apiKey: 'AIzaSyC6iFx3r8IjBhJ4fHjx3kC1CAHY0MJHntY',
  authDomain: 'vue-firebase-auth-2802d.firebaseapp.com',
  projectId: 'grupp-3',
  storageBucket: 'grupp-3.appspot.com',
  messagingSenderId: '761187785466',
  appId: '1:761187785466:web:6a92dc9d15f604542c8743'
}

firebase.initializeApp(configOptions)
//firebase.analytics()

// utils
const auth = firebase.auth()
const db = firebase.firestore()

// collection
const usersCollection = db.collection('users')
const booksCollection = db.collection('books')
const genresCollection = db.collection('genres')

// export utils/ref
export { auth, db, usersCollection, booksCollection, genresCollection }
