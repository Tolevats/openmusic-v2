<template>
  <main class="home">
    <h1 class="home-title">Find Your Sound</h1>
    <p class="home-description">
      From classic rock anthems to the latest indie hits, we have something for every music lover.
    </p>
    <p class="home-description">
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
.home-title {
  font-size: 2.5rem;
  font-weight: 700; /* bold for emphasis */
  color: #333;
  margin: 2.5rem 0 1.5rem;
  text-align: center; /* ensure centered text */
}
.home-description {
  font-size: 1rem; /* slightly smaller for better readability */
  color: #666; /* slightly lighter color for contrast */
  margin: 0 2rem 0.5rem;
  text-align: center;
}

@media (min-width: 768px) {
  .home-title {
    font-size: 3.5rem;
  }
  .home-description {
    font-size: 1.3rem;
    text-align: center;
    padding: 0 3em;
  }
}
</style>
