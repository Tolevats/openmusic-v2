<template>
  <div class="categories">
    <h2 class="categories-title">Categories ({{ totalVinyls }} albums)</h2>
    <div class="category-grid">
      <div v-for="(count, category) in vinylsByCategory" :key="category" class="category-btn">
        <router-link :to="`/category/${category}`" class="link">{{ category }} ({{ count }})</router-link>
      </div>
    </div>
    <!-- AddAlbumForm -->
    <AddAlbumForm :categories="categories" @add-album="handleAddAlbum" />
  </div>
</template>

<script>
import AddAlbumForm from "@/components/AddAlbumForm.vue";

export default {
  name: 'category-component',    
  // props: {},
  data () {
    return {
      newVinyl: {
        artist: '',
        album: '',
        image: '',
        genre: '',
      },
    };
  },
  computed: {
    categories() {
      return Object.keys(this.$store.state.categories);
    },
    totalVinyls() {
      return this.$store.getters.totalVinyls;
    },
    vinylsByCategory() {
      return this.$store.getters.vinylsByCategory;
    },
  },
  methods: {
    handleAddAlbum(album) {
      //to get the category from the album object
      const category = album.genre;
      
      //checking if the category exists in the state
      if (!this.$store.state.categories[category]) {
        //if not, create a new array for the category
        this.$store.state.categories[category] = []; //to be tested
      }
      
      //push the new album to the category array
      this.$store.state.categories[category].push(album);

      this.$router.push(`/category/${album.genre}`);
    },
  },
  components: {
    AddAlbumForm,
  },
}
</script>

<style scoped>
.categories {
  margin: 2em;
}
.categories-title {
  font-size: 1.8rem;
  color: #333;
  text-align: center;
  margin: 1rem;
}
.category-grid {
  display: flex;
  flex-wrap: wrap; /* allow buttons to wrap to the next line */
  justify-content: center; /* center the grid horizontally */
}
.category-btn {
  margin: 10px;
  flex: 0 0 calc(33.33% - 20px); /* calculate width for 3 columns with margins */
  max-width: calc(33.33% - 20px); /* limit width to prevent overflow */
}
.category-btn .link {
  display: block;
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: linear-gradient(-45deg, #1e90ff, #ff6347);
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