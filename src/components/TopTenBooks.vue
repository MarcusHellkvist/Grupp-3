<template>
  <div>
    <div>
      <b-list-group>
        <h4 class="text-left">Top 10</h4>

        <b-list-group-item
          v-for="(product, index) in topTen"
          :key="index"
          class="d-flex justify-content-between"
          :to="{ name: 'Product', params: { isbn: product.isbn } }"
        >
          <div class="text-left">
            <h6>
              <span class="top-ten">{{ index + 1 }}.</span> {{ product.title }}
            </h6>

            <small>{{ product.author }}</small>

            <p>Price: ${{ product.price }}</p>
            <b-rating
              inline
              :value="product.rating"
              size="sm"
              readonly
              no-border
            ></b-rating>
          </div>

          <div>
            <div>
              <img :src="product.image" width="50" height="80" />
            </div>
          </div>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: this.$store.state.books,
    };
  },
  created() {
    this.topTenRating();
  },
  computed: {
    topTen() {
      return this.$store.state.books.slice(0, 10);
    },
  },
  methods: {
    topTenRating() {
      this.books.sort(function(a, b) {
        return b.rating - a.rating;
      });
      console.log(this.books);
    },
  },
};
</script>

<style scoped>
h6 {
  margin-bottom: 0rem;
}
p {
  color: red;
  margin-top: 0rem;
  margin-bottom: 0rem;
}
small {
  margin-top: 0rem;
}
.top-ten {
  color: red;
}
b-rating {
  padding: 0rem 0rem;
  margin: 0rem;
  text-align: right;
}
</style>
