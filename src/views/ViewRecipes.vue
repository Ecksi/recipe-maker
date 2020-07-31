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
    ...mapState(['recipes'])
  },
  methods: {
    ...mapGetters(['getBurgers', 'getAlphaSorted', 'getReverseAlphaSorted'])
  },
  created () {
    this.currentRecipes = this.recipes
  }
}
</script>

<template>
  <div>
    <button @click="currentRecipes=getBurgers()">sup</button>
    <button @click="currentRecipes=getAlphaSorted()">Alphj</button>
    <button @click="currentRecipes=getReverseAlphaSorted()">reverse</button>
    <h1>Look at all the food!</h1>
    <ul v-for="(recipe, index) in currentRecipes" :key="index">
      <li>{{ recipe.title }}</li>
    </ul>
  </div>
</template>
