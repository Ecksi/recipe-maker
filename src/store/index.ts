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
