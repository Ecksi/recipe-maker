<script lang="ts">
import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import { Recipe } from '../store/recipes/types'
import { mapState, mapGetters } from 'vuex'
import Modal from '../components/molecules/Modal.vue'

@Component({
  components: {
    Modal
  },
  computed: {
    ...mapState('recipes', ['recipes'])
  },
  methods: {
    ...mapGetters('recipes', ['sortByBurgers', 'sortByAlpha', 'sortByReverseAlpha', 'sortByDifficulty', 'sortByReverseDifficulty'])
  }
})
export default class ViewRecipes extends Vue {
  public recipes!: Array<Recipe>
  public sortByBurgers!: Array<Recipe>
  public sortByAlpha!: Array<Recipe>
  public sortByReverseAlpha!: Array<Recipe>
  public sortByDifficulty!: Array<Recipe>
  public sortByReverseDifficulty!: Array<Recipe>

  myData: {
    currentRecipes: Array<Recipe>;
    isModalOpen: boolean;
    currentRecipe: Recipe;
  } = {
    currentRecipes: [],
    isModalOpen: false,
    currentRecipe: {
      title: '',
      imgUrl: '',
      difficulty: '',
      instructions: ''
    }
  }

  updateRecipes (recipe: Recipe) {
    this.myData.currentRecipe.title = recipe.title
    this.myData.currentRecipe.imgUrl = recipe.imgUrl
    this.myData.currentRecipe.difficulty = recipe.difficulty
    this.myData.currentRecipe.instructions = recipe.instructions
  }

  viewRecipe (recipe: Recipe) {
    this.updateRecipes(recipe)
    this.myData.isModalOpen = true
  }

  printRecipe () {
    window.print()
  }

  created () {
    this.myData.currentRecipes = this.recipes
  }
}
</script>

<template>
  <div class="view-recipes">
    <Modal v-if="isModalOpen" @closeModal="isModalOpen=false">
      <h2>{{ currentRecipe.title }}</h2>
      <span>Difficulty Rating: {{ currentRecipe.difficulty }}</span><br />
      <img :src="currentRecipe.imgUrl" width="150"><!-- alt attribute was left out so no placeholder text would show up if an image was not included -->
      <p>Directions: {{ currentRecipe.instructions }}</p>
      <button class="print-recipe" @click="printRecipe()">Print Recipe</button>
    </Modal>
    <button @click="currentRecipes=sortByBurgers()">Burgers</button>
    <button @click="currentRecipes=sortByAlpha()">Title A-Z</button>
    <button @click="currentRecipes=sortByReverseAlpha()">Title Z-A</button>
    <button @click="currentRecipes=sortByDifficulty()">Difficulty Asc</button>
    <button @click="currentRecipes=sortByReverseDifficulty()">Difficulty Des</button>
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
    background-color: #75a6ff6b;
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

  @media (max-width: 600px) {
    .view-recipes {
      width: 100%;
      border: none;
      box-shadow: none;
    }

    .top-banner {
      width: 85%;
    }

    .print-recipe {
      display: none
    }
  }
</style>
