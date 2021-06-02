<template>
  <b-container>
    <b-row>
      <b-col class="mb-3 mt-3">
        <b-card header="Search for ISBN">
          <b-form @submit="getBookFromISBN">
            <b-form-group
              label-cols="3"
              label-cols-sm="2"
              label-cols-md="1"
              id="input-group-1"
              label="ISBN"
              label-for="isbn"
            >
              <b-form-input
                id="isbn"
                v-model="form.isbn"
                type="text"
                placeholder="Enter ISBN number (e.g. 9789189298019)"
                required
              ></b-form-input>

              <b-button class="mt-3" type="submit" variant="primary"
                >Search</b-button
              >
            </b-form-group>
          </b-form></b-card
        ></b-col
      >
    </b-row>
    <b-row class="pb-5">
      <b-col>
        <b-card header="Book Information">
          <b-form @submit="addNewBook">
            <b-form-group
              label-cols="3"
              label-cols-sm="2"
              label-cols-md="2"
              id="input-group-1"
              label="Title"
              label-for="title"
            >
              <b-form-input
                id="title"
                v-model="form.title"
                type="text"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label-cols="3"
              label-cols-sm="2"
              label-cols-md="2"
              id="input-group-1"
              label="Author"
              label-for="author"
            >
              <b-form-input
                id="author"
                v-model="form.author"
                type="text"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="3"
              label-cols-sm="2"
              label-cols-md="2"
              id="input-group-1"
              label="Plot"
              label-for="plot"
            >
              <b-form-textarea
                id="plot"
                :value="form.plot"
                v-model="form.plot"
                rows="6"
                max-rows="10"
                required
              ></b-form-textarea>
            </b-form-group>

            <hr />

            <b-form-group
              label-cols="3"
              label-cols-sm="2"
              label-cols-md="2"
              id="input-group-1"
              label="Publisher"
              label-for="publisher"
            >
              <b-form-input
                id="publisher"
                v-model="form.publisher"
                type="text"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="3"
              label-cols-sm="2"
              label-cols-md="2"
              id="input-group-1"
              label="Published"
              label-for="published"
            >
              <b-form-input
                id="published"
                v-model="form.published"
                type="text"
                required
              ></b-form-input>
            </b-form-group>

            <hr />

            <b-form-group
              label-cols="3"
              label-cols-sm="2"
              label-cols-md="2"
              id="input-group-1"
              label="Price"
              label-for="price"
            >
              <b-form-input
                id="price"
                v-model="form.price"
                type="number"
                required
                number
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="3"
              label-cols-sm="2"
              label-cols-md="2"
              id="input-group-1"
              label="Pages"
              label-for="pages"
            >
              <b-form-input
                id="pages"
                v-model="form.pages"
                type="number"
                required
                number
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="3"
              label-cols-sm="2"
              label-cols-md="2"
              id="input-group-1"
              label="Stock"
              label-for="stock"
            >
              <b-form-input
                id="stock"
                v-model="form.stock"
                type="number"
                required
                number
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="3"
              label-cols-sm="2"
              label-cols-md="2"
              id="input-group-1"
              label="Genre"
              label-for="genre"
            >
              <b-form-select
                v-model="selected"
                :options="options"
              ></b-form-select>
            </b-form-group>

            <b-form-group
              label-cols="3"
              label-cols-sm="2"
              label-cols-md="2"
              id="input-group-1"
              label="Image url"
              label-for="image-url"
            >
              <b-form-input
                id="image-url"
                v-model="form.image"
                type="url"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label-cols="3"
              label-cols-sm="2"
              label-cols-md="2"
              id="input-group-1"
              label="Rating"
              label-for="rating"
            >
              <b-form-rating
                class="mr-2"
                inline
                variant="primary"
                v-model="form.rating"
                icon-empty="book"
                icon-half="book-half"
                icon-full="book-fill"
              ></b-form-rating>
              {{ this.form.rating }}
            </b-form-group>

            <b-button type="submit" variant="primary">Add new book</b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import * as firebase from '../firebase.js'
  export default {
    data() {
      return {
        form: {
          isbn: '',
          title: '',
          published: '',
          pages: 0,
          publisher: '',
          plot: '',
          author: '',
          price: 0,
          image: '',
          rating: 0,
          stock: 0,
          language: 'english'
        },
        selected: null,
        options: [
          { value: null, text: 'Genre' },
          { value: 'mystery', text: 'Mystery' },
          { value: 'fiction', text: 'Fiction' },
          { value: 'crime-and-thriller', text: 'Crime and Thriller' },
          {
            value: 'fantasy-and-science-fiction',
            text: 'Fantasy and Science Fiction'
          },
          { value: 'romance', text: 'Romance' },
          { value: 'biographies-and-memoirs', text: 'Biographies and Memoirs' }
        ]
      }
    },
    methods: {
      getBookFromISBN() {
        fetch(`https://openlibrary.org/isbn/${this.form.isbn}.json`)
          .then((response) => response.json())
          .then((result) => {
            this.form.title = result.title
            this.form.published = result.publish_date
            this.form.pages = result.number_of_pages
            this.form.format = result.physical_format
            this.form.publisher = result.publishers[0]

            // MORE DETAILS
            if ('works' in result) {
              console.log('more details found!')
              fetch(`https://openlibrary.org${result.works[0].key}.json`)
                .then((response) => response.json())
                .then((result) => {
                  if (result.plot !== undefined) {
                    this.form.plot = result.plot
                  } else {
                    this.form.plot =
                      'no description found, you have to write your own, sorry.'
                  }
                })
            } else {
              console.log('could not find more details')
            }

            // GET AUTHOR
            if ('authors' in result) {
              console.log('authors found!')
              fetch(`https://openlibrary.org${result.authors[0].key}.json`)
                .then((response) => response.json())
                .then((result) => {
                  this.form.author = result.name
                })
            } else {
              console.log('could not find any authors!')
            }
          })
      },
      addNewBook() {
        firebase.booksCollection
          .doc(this.form.isbn)
          .set({
            isbn: this.form.isbn,
            title: this.form.title,
            published: this.form.published,
            pages: this.form.pages,
            publisher: this.form.publisher,
            plot: this.form.plot,
            author: this.form.author,
            price: this.form.price,
            image: this.form.image,
            rating: this.form.rating,
            stock: this.form.stock,
            genre: this.selected,
            language: 'english'
          })
          .then(() => {
            console.log('Document successfully written!')
          })
          .catch((error) => {
            console.error('Error writing document: ', error)
          })
      }
    }
  }
</script>

<style></style>
