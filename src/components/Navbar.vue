<template>
    <nav>
        <router-link to="/" class="nav-link">← Back to Home</router-link>
    </nav>
</template>

<script>
export default {
    name: 'nav-component',
}
</script>

<style scoped>
nav {
  position: sticky; /* stick the nav to the top of the screen */
  top: 0; /* ensure it sticks to the top */
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* subtle shadow */
  z-index: 1; /* ensure nav is on top of other content */
  padding: 1em 6em;
}
.nav-link {
  color: #333; /* darker color for better readability */
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;
}
.nav-link:hover {
  color: #1e90ff;
}
@media (min-width: 768px) {
  nav {
    padding: 1em 8em;
    font-size: 1.5em;
  }
}
</style>