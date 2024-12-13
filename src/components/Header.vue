<template>
    <header>
       <!--  <img src="@assets/logo/main-logo-white-transparent.png" alt="openMusic Logo" class="logo" /> -->
        <h1>openMusic</h1>
    </header>
</template>

<script>
export default {
    name: 'header-component',
/*     data() {
        return {
            logo: require('@/assets/logo/main-logo-white-transparent.png'),
        };
    } */
};
</script>

<style scoped>
header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333;
    color: white;
    padding: 1rem;
}

.logo {
    width: 50px;
    /* Ajusta el tamaño según tus necesidades */
    height: auto;
    margin-right: 10px;
    /* Espacio entre el logo y el texto */
}
</style>