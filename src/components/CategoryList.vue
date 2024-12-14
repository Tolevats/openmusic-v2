<template>
  <div class="categories">
    <h2 class="categories-title">Categories</h2>
    <div class="category-grid">
      <div v-for="category in categories" :key="category" class="category-btn">
        <router-link :to="`/category/${category}`" class="link">{{ category }}</router-link>
      </div>
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
.categories {
  margin: 2em;
}

.categories-title {
  font-size: 1.8rem;
  color: #555;
  text-align: center;
  margin: 1rem;
}
.category-grid {
  display: flex;
  flex-wrap: wrap; /* Allow buttons to wrap to the next line */
  justify-content: center; /* Center the grid horizontally */
}
.category-btn {
  margin: 10px;
  flex: 0 0 calc(33.33% - 20px); /* Calculate width for 3 columns with margins */
  max-width: calc(33.33% - 20px); /* Limit width to prevent overflow */
}

.category-btn .link {
  display: block;
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: linear-gradient(45deg, #1e90ff, #ff6347);
  color: white;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.3s ease;
}

.category-btn .link:hover {
  background: linear-gradient(45deg, #092f54, #66261b);
  transform: scale(1.1); /* subtle hover effect */
}

@media (min-width: 768px) {
  .categories-title {
    font-size: 2.5rem;
  }
}
</style>