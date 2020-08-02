import { ActionTree } from 'vuex'
import { RecipesState, Recipe } from './types'
import { RootState } from '../types'

export const actions: ActionTree<RecipesState, RootState> = {
  addRecipe (context, recipe: Recipe) {
    context.commit('addRecipe', recipe)
  }
}
