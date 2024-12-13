<template>
  <div class="home">
    <h1>Vinyl Catalog</h1>
    <CategoryList />
  </div>
  <!--   <div>
    <header>
      <h1>OpenMusic</h1>
    </header>
    <main>
      <h2>Categorías</h2>
      <div>
        <router-link to="/category/Pop">Pop</router-link>
        <router-link to="/category/Rap">Rap</router-link>
        <router-link to="/category/Rock">Rock</router-link>
      </div>
    </main>
  </div> -->
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
/* header {
  text-align: center;
  background-color: #f4f4f4;
  padding: 20px;
}

main {
  padding: 20px;
}

router-link {
  margin-right: 10px;
  text-decoration: none;
  color: blue;
} */
</style>
