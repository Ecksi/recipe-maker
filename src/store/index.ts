import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recipes: [
      {
        title: 'Raspberry Icebox Cake',
        instructions: 'Buy jello, cool-whip, and grahmn crackers. Put everything in a pot and then look up the actual recipe.'
      },
      {
        title: 'Around the world oatmeal',
        instructions: 'In a pot combine oatmeal, chocolate chunks, cayenne pepper, and milk. Over medium heat, cook for 10 minutes.'
      }
    ]
  },
  getters: {
    getBurgers (state) {
      return state.recipes.filter(recipe => recipe.title.includes('Burger'))
    },
    getAlphaSorted (state) {
      const sortedTitles = state.recipes.map(recipe => recipe.title).sort()
      const sortedRecipes = sortedTitles.map(recipe => state.recipes.find(rep => rep.title === recipe))

      return sortedRecipes
    },
    getReverseAlphaSorted (state) {
      const sortedTitles = state.recipes.map(recipe => recipe.title).sort().reverse()
      const sortedRecipes = sortedTitles.map(recipe => state.recipes.find(rep => rep.title === recipe))

      return sortedRecipes
    }
  },
  mutations: {
    addRecipe (state, recipe) {
      state.recipes.push(recipe)
    }
  },
  actions: {
    addRecipe (context, recipe) {
      context.commit('addRecipe', recipe)
    }
  },
  modules: {
  }
})
