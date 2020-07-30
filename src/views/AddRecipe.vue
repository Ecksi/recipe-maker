<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddRecipe',
  methods: {
    ...mapActions([
      'addRecipe'
    ]),
    onSubmit (e) {
      const title = e.target[0].value
      const instructions = e.target[1].value
      const recipe = { title, instructions }

      this.addRecipe(recipe)
    }
  }
}
</script>

<template>
  <div>
    <h1>Add some recipes</h1>
    <form action="" v-on:submit.prevent="onSubmit">
      <label for="">
        Title
        <input type="text" placeholder="Recipe Name">
      </label>
      <label for="">
        Directions
        <textarea name="" id="" cols="30" rows="10" placeholder="Instructions"></textarea>
      </label>
      <button>Add Recipe</button>
    </form>
  </div>
</template>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    width: 30%;
  }
</style>
