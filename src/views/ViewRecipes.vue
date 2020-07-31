<script>
import { mapState, mapGetters } from 'vuex'
import Modal from '@/components/molecules/Modal'

export default {
  name: 'ViewRecipes',
  components: {
    Modal
  },
  data () {
    return {
      currentRecipes: '',
      isModalOpen: false,
      currentRecipe: {
        title: '',
        imgUrl: '',
        difficulty: '',
        instructions: ''
      }
    }
  },
  computed: {
    ...mapState(['recipes']),
    ...mapGetters(['sortByBurgers', 'sortByAlpha', 'sortByReverseAlpha', 'sortByDifficulty'])
  },
  methods: {
    updateRecipes (recipe) {
      this.currentRecipe.title = recipe.title
      this.currentRecipe.imgUrl = recipe.imgUrl
      this.currentRecipe.difficulty = recipe.difficulty
      this.currentRecipe.instructions = recipe.instructions
    },
    viewRecipe (recipe) {
      this.updateRecipes(recipe)
      console.log(recipe)
      this.isModalOpen = true
    }
  },
  created () {
    this.currentRecipes = this.recipes
  }
}
</script>

<template>
  <div class="view-recipes">
    <Modal v-if="isModalOpen" @closeModal="isModalOpen=false">
      <h2>{{ currentRecipe.title }}</h2>
      <span>Difficulty Rating: {{ currentRecipe.difficulty }}</span><br />
      <img :src="currentRecipe.imgUrl" width="150" alt="">
      <!-- setup if statement to pull placeholder image if no url is provided -->
      <p>Directions: {{ currentRecipe.instructions }}</p>
    </Modal>
    <button @click="currentRecipes=sortByBurgers()">Burgers</button>
    <button @click="currentRecipes=sortBy('title')">Title A-Z</button>
    <button @click="currentRecipes=sortByReverseAlpha()">Title Z-A</button>
    <button @click="currentRecipes=sortBy('difficulty')">Difficulty</button>
    <h1>Look at all the food!</h1>
    <div class="top-banner">
      <span>Title</span>
      <span>Difficulty</span>
    </div>
    <ul class="recipe-list" @click="viewRecipe(recipe)" v-for="(recipe, index) in currentRecipes" :key="index">
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
