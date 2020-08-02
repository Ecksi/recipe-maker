import { MutationTree } from 'vuex'
import { RecipesState, Recipe } from './types'

export const mutations: MutationTree<RecipesState> = {
  addRecipe (state, recipe: Recipe) {
    state.recipes.push(recipe)
  }
}
