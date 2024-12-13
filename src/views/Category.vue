<template>
    <div class="category">
        <h1>{{ category }}</h1>
        <div class="vinyls">
            <VinylCard v-for="vinyl in vinyls" :key="vinyl.id" :vinyl="vinyl" />
        </div>
    </div>
</template>

<script>
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
        VinylCard,
    },
};
</script>

<style scoped>
.vinyls {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>