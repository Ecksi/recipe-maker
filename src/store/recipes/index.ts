import { Module } from 'vuex'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { RecipesState } from './types'
import { RootState } from '../types'

export const state: RecipesState = {
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
}

const namespaced = true

export const recipes: Module<RecipesState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
