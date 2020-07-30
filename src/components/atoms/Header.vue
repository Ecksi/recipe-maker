<script>
export default {
  name: 'Header'
}
</script>

<template>
  <header>
    <img src="https://via.placeholder.com/75" alt="placeholder img">
    <nav class="navigation">
      <router-link to="/add">Add Recipes</router-link>
      <router-link to="/">View Recipes</router-link>
      <label>
        <input type="text" placeholder="Search">
      </label>
    </nav>
  </header>
</template>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
  }
</style>
