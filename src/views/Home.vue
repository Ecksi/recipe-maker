<script>
export default {
  name: 'Home'
}
</script>

<template>
  <div class="landing">
    <h1>Welcome to the recipe maker...</h1>
    <h3>Store and view your favorite recipes!</h3>
    <h3>Use the navigation above to explore the site</h3>
  </div>
</template>

<style scoped>
  .landing {
    text-align: center;
  }

  @media (max-width: 600px) {
    .landing {
      padding: 16px;
    }
  }
</style>
