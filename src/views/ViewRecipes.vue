<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'ViewRecipes',
  data () {
    return {
      currentRecipes: ''
    }
  },
  computed: {
    ...mapState(['recipes']),
    ...mapGetters(['sortByBurgers', 'sortByAlpha', 'sortByReverseAlpha', 'sortByDifficulty'])
  },
  methods: {
  },
  created () {
    this.currentRecipes = this.recipes
  }
}
</script>

<template>
  <div class="view-recipes">
    <button @click="currentRecipes=sortByBurgers()">Burgers</button>
    <button @click="currentRecipes=sortBy('title')">Title A-Z</button>
    <button @click="currentRecipes=sortByReverseAlpha()">Title Z-A</button>
    <button @click="currentRecipes=sortBy('difficulty')">Difficulty</button>
    <h1>Look at all the food!</h1>
    <div class="top-banner">
      <span>Title</span>
      <span>Difficulty</span>
    </div>
    <ul class="recipe-list" v-for="(recipe, index) in currentRecipes" :key="index">
      <li>{{ recipe.title }}</li>
      <li>{{ recipe.difficulty }}</li>
    </ul>
  </div>
</template>

<style scoped>
  .view-recipes {
    width: 40%;
    padding: 16px;
    margin: 0 auto;
    border: 1px solid black;
    border-radius: 8px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 255, .1);
  }

  .top-banner {
    display: flex;
    justify-content: space-between;
    padding: 12px;
    font-weight: bold;
    background-color: cornflowerblue;
    border: 1px solid black;
  }

  .top-banner span:last-child {
    padding-right: 4px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    cursor: pointer;
  }

  .recipe-list {
    display: flex;
    justify-content: space-between;
  }

  li:first-child {
    padding-left: 8px;
  }

  li:last-child {
    padding-right: 36px;
  }
</style>
