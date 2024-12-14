<template>
  <main class="home">
    <h1 class="home-title">Find Your Sound</h1>
    <p class="home-description">
      Explore our vast collection of vinyl records, spanning decades and genres.<br>
      <br>
      From classic rock anthems to the latest indie hits, we have something for every music lover.<br>
      <br>
      Browse our curated categories below to discover your next favorite album!
    </p>
    <CategoryList />
  </main>
</template>

<script>
import CategoryList from '@/components/CategoryList.vue';

export default {
  name: 'home-view',
  components: {
    CategoryList,
  },
};
</script>

<style scoped>
main {
  height: 100vh;
}
.home-title {
  font-size: 2.5rem; /* Slightly larger for impact */
  font-weight: 700; /* Bold for emphasis */
  color: #333;
  margin: 2.5rem 0 1.5rem;
  text-align: center; /* Ensure centered text */
}
.home-description {
  font-size: 1.1rem; /* Slightly smaller for better readability */
  color: #666; /* Slightly lighter color for contrast */
  margin: 2.5rem 2rem 1.5rem;
  text-align: left;
}

@media (min-width: 768px) {
  .home-title {
    font-size: 3.5rem;
  }
  .home-description {
    font-size: 1.9rem;
    padding: 0 3em;
  }
}
</style>
