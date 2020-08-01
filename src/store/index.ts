import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recipes: [
      {
        title: 'Raspberry Icebox Cake',
        imgUrl: 'https://bit.ly/2DkVWIa',
        difficulty: '3',
        instructions: 'Buy jello, cool-whip, and grahmn crackers. Put everything in a pot and then look up the actual recipe.'
      },
      {
        title: 'Around the world oatmeal',
        imgUrl: 'https://bit.ly/31a4tWj',
        difficulty: '2',
        instructions: 'In a pot combine oatmeal, chocolate chunks, cayenne pepper, and milk. Over medium heat, cook for 10 minutes.'
      },
      {
        title: 'New Bacon-ings Burger',
        imgUrl: 'https://bit.ly/311qTcs',
        difficulty: '1',
        instructions: 'Make burger, add bacon, cheese optional. Enjoy your new bacon-ings'
      },
      {
        title: 'Fig-eta Bout It Burger',
        imgUrl: 'https://bit.ly/33fR1ms',
        difficulty: '4',
        instructions: 'Cook burger to desired temperature, add fig sauce.'
      },
      {
        title: 'Shake Your Honeymaker Burger',
        imgUrl: 'https://bit.ly/39IIlXd',
        difficulty: '5',
        instructions: 'Something something hamburger, add honey mustard'
      }
    ]
  },
  getters: {
    searchList (state) {
      return state.recipes.map(recipe => recipe.title)
    },
    sortByBurgers (state) {
      return state.recipes.filter(recipe => recipe.title.includes('Burger'))
    },
    // These sorting methods can be refactored into a single method
    sortByAlpha (state) {
      const sortedTitles = state.recipes.map(recipe => recipe.title).sort()
      const sortedRecipes = sortedTitles.map(recipe => state.recipes.find(rep => rep.title === recipe))

      return sortedRecipes
    },
    sortByReverseAlpha (state) {
      const sortedTitles = state.recipes.map(recipe => recipe.title).sort().reverse()
      const sortedRecipes = sortedTitles.map(recipe => state.recipes.find(rep => rep.title === recipe))

      return sortedRecipes
    },
    sortByDifficulty (state) {
      const sortedDifficulties = state.recipes.map(recipe => recipe.difficulty).sort()
      const sortedRecipes = sortedDifficulties.map(recipe => state.recipes.find(rep => rep.difficulty === recipe))

      return sortedRecipes
    },
    sortByReverseDifficulty (state) {
      const sortedDifficulties = state.recipes.map(recipe => recipe.difficulty).sort().reverse()
      const sortedRecipes = sortedDifficulties.map(recipe => state.recipes.find(rep => rep.difficulty === recipe))

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
