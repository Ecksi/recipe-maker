<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddRecipe',
  data () {
    return {
      title: '',
      imgUrl: '',
      difficulty: '',
      instructions: '',
      errors: {
        title: null,
        difficulty: null,
        instructions: null
      }
    }
  },
  methods: {
    ...mapActions([
      'addRecipe'
    ]),
    onSubmit () {
      const recipe = {
        title: this.title,
        imgUrl: this.imgUrl,
        difficulty: this.difficulty,
        instructions: this.instructions
      }

      this.checkForErrors()

      if (Object.values(this.errors).includes(true)) return

      this.addRecipe(recipe)
      alert(recipe.title + ' has been added to your recipes')
      this.clearForm()
    },
    updateStarValue () {
      if (document.querySelector('[name="rating"]:checked') === null) return

      this.difficulty = document.querySelector('[name="rating"]:checked').value
    },
    checkForErrors () {
      this.title.length ? this.errors.title = false : this.errors.title = true
      this.difficulty.length ? this.errors.difficulty = false : this.errors.difficulty = true
      this.instructions.length ? this.errors.instructions = false : this.errors.instructions = true
    },
    clearForm () {
      this.title = ''
      this.imggUrl = ''
      this.difficulty = ''
      this.instructions = ''
    }
  }
}
</script>

<template>
  <main>
    <h1>Add your favorite recipes</h1>
    <form id="rating-form"  @submit.prevent="onSubmit" @change="updateStarValue">
      <label for="recipe-name">
        <span>Title:</span>
        <input id="recipe-name" :class="{'error': errors.title}" v-model="title" type="text" placeholder="Recipe Name">
      </label>
      <label for="recipe-img">
        <!-- if no image use placehodler for default -->
        <span>Image:</span>
        <input id="recipe-img" v-model="imgUrl" type="text" placeholder="Add img url">
      </label>
      <section class="difficulty">
        <span class="difficulty-label">Difficulty:</span>
        <span class="rating-star" :class="{'rating-error': errors.difficulty}">
          <input type="radio" name="rating" value="5"><span class="star"></span>
          <input type="radio" name="rating" value="4"><span class="star"></span>
          <input type="radio" name="rating" value="3"><span class="star"></span>
          <input type="radio" name="rating" value="2"><span class="star"></span>
          <input type="radio" name="rating" value="1"><span class="star"></span>
        </span>
      </section>
      <label for="recipe-instructions">
        <span class="textarea-label">Instructions:</span>
        <textarea id="recipe-instructions" :class="{'error': errors.instructions}" v-model="instructions" rows="10" placeholder="Add directions to create your recipe here"></textarea>
      </label>
      <button>Add Recipe</button>
    </form>
  </main>
</template>

<style scoped>
  h1 {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 40%;
    padding: 16px;
    border: 1px solid black;
    border-radius: 6px;
    margin: 0 auto;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 255, .1);
  }

  form label,
  section {
    padding-bottom: 12px;
  }

  span {
    font-weight: 600;
  }

  form label span {
    display: inline-block;
    width: 110px;
  }

  form label input,
  form label textarea {
    width: calc(100% - 130px);
  }

  textarea {
    resize: none;
  }

  .textarea-label {
    vertical-align: top;
  }

  .rating-star {
    display: inline-block;
    width: 200px;
    direction: rtl;
    font-size: 30px;
    text-align: center;
    margin-left: 36px;
  }

  .rating-error {
    border: 2px solid salmon;
    border-radius: 8px;
  }

  .rating-star input {
    opacity: 0;
    position: relative;
    left: -30px;
    z-index: 2;
    cursor: pointer;
    width: 24px;
  }

  .rating-star span.star:before {
    color: #777777;
  }

  .rating-star span.star {
    display: inline-block;
    position: relative;
    z-index: 1;
  }

  .rating-star span {
    margin-left: -30px;
    cursor: pointer;
  }

  .rating-star span.star:before {
    color: #777777;
    content:"☆";
    font-size: inherit;
  }

  .rating-star input:hover + span.star:before,
  .rating-star input:hover + span.star ~ span.star:before,
  .rating-star input:checked + span.star:before,
  .rating-star input:checked + span.star ~ span.star:before {
    color: #ffd100;
    content:"★";
  }

  .difficulty-label {
    vertical-align: super;
  }

  .difficulty {
    width: 100%
  }

  button {
    margin-top: 12px;
    height: 36px;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 255, .1);
  }

  button:hover {
    background-color: #E2E2E2;
  }

  .error {
    border: 2px solid salmon;
  }

  @media (max-width: 600px) {
    form {
      border: none;
      width: 85%;
      box-shadow: none;
    }

    form label input,
    form label textarea {
      width: 95%;
    }

    form label span {
      padding-bottom: 8px;
    }
  }
</style>
