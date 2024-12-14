<template>
    <header>
        <img src="@/assets/logo/logo-white-transparent.svg" alt="openMusic Logo" class="logo" />
    </header>
</template>

<script>
export default {
    name: 'header-component',
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: left;
  background: linear-gradient(45deg, #1e90ff, #ff6347);
  max-height: 100px; /* Limit the header size */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}
.logo {
  max-width: 100px;
  height: auto;
}

@media (min-width: 768px) {
  .logo {
    max-width: 200px;
  }
}
</style>