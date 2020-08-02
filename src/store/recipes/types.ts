export interface Recipe {
  title: string,
  imgUrl?: string,
  difficulty: string,
  instructions: string
}

export interface RecipesState {
  recipes: Array<Recipe>
}
