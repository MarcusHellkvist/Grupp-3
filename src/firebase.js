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

// functions
function addItemToCartFirebase(book, uid) {
  var docRef = usersCollection
    .doc(uid)
    .collection('cart')
    .doc(book.isbn)

  docRef.get().then((doc) => {
    if (!doc.exists) {
      docRef
        .set({
          title: book.title,
          quantity: 1,
          price: book.price,
          image: book.image,
          isbn: book.isbn
        })
        .then(() => {
          console.log('New book added!')
        })
    } else {
      console.log('Quantity updated!')
      docRef.update({ quantity: doc.data().quantity + 1 })
    }
  })
}
/* Alona */
function addItemToWishlistFirebase(book, uid) {
  var docRef = usersCollection
    .doc(uid)
    .collection('wishlist')
    .doc(book.isbn)

  docRef.get().then((doc) => {
    if (!doc.exists) {
      docRef
        .set({
          title: book.title,
          author: book.author,
          price: book.price,
          image: book.image,
          isbn: book.isbn,
          genre: book.genre
        })
        .then(() => {
          console.log('New book added to wishlist!')
        })
    } else {
      console.log('This book is already added to wishlist')
      /* docRef.update({ quantity: doc.data().quantity + 1 }) */
    }
  })
}
/* Alona */

// export utils/ref
export {
  auth,
  db,
  usersCollection,
  booksCollection,
  genresCollection,
  addItemToCartFirebase,
  addItemToWishlistFirebase
}
