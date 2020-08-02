import { GetterTree } from 'vuex'
import { RecipesState, Recipe } from './types'
import { RootState } from '../types'

export const getters: GetterTree<RecipesState, RootState> = {
  searchList (state): Array<string> {
    return state.recipes.map((recipe: Recipe) => recipe.title)
  },
  sortByBurgers (state): Array<Recipe> {
    return state.recipes.filter((recipe: Recipe) => recipe.title.includes('Burger'))
  },
  // These sorting methods can be refactored into a single method
  sortByAlpha (state) {
    const sortedTitles: Array<string> = state.recipes.map((recipe: Recipe) => recipe.title).sort()
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
}
