<template>
    <div class="category">
        <Navbar />
        <div class="content">
            <h1 class="category-title">{{ category }}</h1>
            <div class="vinyls">
                <VinylCard v-for="vinyl in vinyls" :key="vinyl.id" :vinyl="vinyl" />
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import VinylCard from '@/components/VinylCard.vue';

export default {
    name: 'category-view',
    props: ['category'],
    computed: {
        vinyls() {
            return this.$store.state.categories[this.category] || [];
        },
    },
    components: {
        Navbar,
        VinylCard,
    },
};
</script>

<style scoped>
.content {
  max-width: 1200px;
  margin: 0 auto;
}
.category-title {
  font-size: 2rem;
  color: #444;
  text-align: center;
  margin: 2rem;
}
.vinyls {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
}
</style>