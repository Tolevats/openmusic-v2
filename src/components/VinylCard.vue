<template>
  <div class="vinyl-card">
    <img :src="vinyl.image" :alt="vinyl.album" />
    <h3>{{ vinyl.artist }}</h3>
    <p>{{ vinyl.album }}</p>
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
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  text-align: center;
}
</style>