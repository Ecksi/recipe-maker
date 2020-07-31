<script>
export default {
  name: 'ViewRecipes',
</script>

<template>
  <div>
    <h1>Look at all the food!</h1>
    <ul v-for="(recipe, index) in currentRecipes" :key="index">
      <li>{{ recipe.title }}</li>
    </ul>
  </div>
</template>
