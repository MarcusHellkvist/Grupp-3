<template>
  <div class="home">
    <h1>Start page - Home</h1>
    <p></p>
  </div>
</template>

<script>
  export default {
    name: 'Home',

    created() {
      this.fetchLocalData()
    },
    methods: {
      fetchLocalData() {
        fetch('products.json')
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
          })
      }
    }
  }
</script>
