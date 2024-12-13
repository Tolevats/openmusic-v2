<template>
  <div class="categories">
    <h2>Categories</h2>
    <div v-for="category in categories" :key="category" class="category-btn">
      <router-link :to="`/category/${category}`">{{ category }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'category-component',
    computed: {
    categories() {
      return Object.keys(this.$store.state.categories);
    },
  },
}
</script>

<style scoped>
.category-btn {
  margin: 10px;
} 
</style>