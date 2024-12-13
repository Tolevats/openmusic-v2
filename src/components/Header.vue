<template>
    <header>
        <!-- <img src="@assets/logo/logo-white-transparent.svg" alt="openMusic Logo" class="logo" /> -->
        <h1>openMusic</h1>
    </header>
</template>

<script>
export default {
    name: 'header-component',
/*     data() {
        return {
            logo: require('@assets/logo/logo-white-transparent.svg'),
        };
    } */
};
</script>

<style scoped>
header {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(45deg, #1e90ff, #ff6347);
    color: white;
    padding: 1rem;
}

.logo {
    width: 50px;
    height: auto;
    margin-right: 10px;
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
    text-align: center;
  }
  .logo {
    margin-bottom: 10px;
  }
}
</style>