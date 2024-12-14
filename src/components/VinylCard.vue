<template>
  <div class="vinyl-card">
    <h3 class="vinyl-info">{{ vinyl.artist }}</h3>
    <img :src="vinyl.image" :alt="vinyl.album" class="vinyl-image" />
    <p class="vinyl-info">{{ vinyl.album }}</p>
  </div>
</template>

<script>
export default {
    name: 'card-component',
    props: ['vinyl'],
}
</script>

<style scoped>
.vinyl-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  max-width: 300px;
  text-align: center;
  transition: transform 0.3s ease;
}
.vinyl-card:hover {
  transform: scale(1.05);
}
.vinyl-image {
  width: 100%;
  height: auto;
  border-radius: 5px;
}
.vinyl-info {
  margin: 10px 0 10px;
}
.vinyl-artist {
  font-size: 1.2rem;
  font-weight: bold;
}
.vinyl-album {
  font-size: 1rem;
  color: #666;
}
</style>