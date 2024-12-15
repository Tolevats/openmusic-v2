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
      this.$store.dispatch("addAlbum", album);
      this.$router.push(`/category/${album.genre}`);
    },
/*     addVinyl() {
      this.$store.dispatch('addVinyl', this.newVinyl);
      this.$router.push(`/category/${this.newVinyl.genre}`);
      //reset the form
      this.newVinyl = { artist: '', album: '', image: '', genre: '' };
    }, */
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

/* Add Album Form */
/* .add-album {
  margin-top: 2em;
  text-align: center;
}

.add-album form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: 0 auto;
}

.add-album input, .add-album select, .add-album button {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.add-album button {
  background-color: #1e90ff;
  color: white;
  border: none;
  cursor: pointer;
}

.add-album button:hover {
  background-color: #0056b3;
} */
@media (min-width: 768px) {
  .categories-title {
    font-size: 2.5rem;
  }
}
</style>