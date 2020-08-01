<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  data () {
    return {
      isOpen: false,
      results: [],
      search: ''
    }
  },
  methods: {
    ...mapGetters(['searchList']),
    onChange () {
      this.search.length ? this.isOpen = true : this.isOpen = false
      this.filterResults()
    },
    filterResults () {
      this.results = this.searchList().filter(item => item.toLowerCase().indexOf(this.search.toLowerCase()) > -1)
    },
    setResult (result) {
      this.search = result
      this.isOpen = false
      // navigate to viewrecipes - clear search bar
    }
  }
}
</script>

<template>
  <header>
    <router-link to='/'>
      <img class="food-logo" src="../../assets/img/food-logo.png" alt="Recipe Maker Logo">
    </router-link>
    <nav class="navigation">
      <router-link to="/add">Add Recipes</router-link>
      <router-link to="/view">View Recipes</router-link>
      <label for="recipe-search">
        <input id="recipe-search" v-model="search" @input="onChange" type="text" placeholder="Find a recipe">
        <ul v-show="isOpen" class="autocomplete-results">
          <router-link to="/view">
          <li
            v-for="(result, i) in results"
            :key="i"
            @click="setResult(result)"
            class="autocomplete-result"
          >
            {{ result }}
          </li>
          </router-link>
        </ul>
        <span class="clear-search" @click="search=''">X</span>
      </label>
    </nav>
  </header>
</template>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
  }

  nav {
    align-self: center;
  }

  nav label,
  a {
    margin-right: 36px;
  }

  a {
    font-size: 18px;
    font-weight: 600;
    color: inherit;
    text-decoration: inherit;
  }

  input {
    width: 250px;
  }

  .food-logo {
    width: 125px;
    padding: 24px;
  }

  .autocomplete-results {
    position: absolute;
    right: 36px;
    width: 250px;
    border: 1px solid #eeeeee;
    overflow: hidden;
    margin-left: auto;
    padding: 0;
  }

  .autocomplete-result {
    list-style: none;
    text-align: right;
    padding: 4px 2px;
    cursor: pointer;
  }

  .autocomplete-result:hover {
    background-color: #4aae9c75;
    color: white;
  }

  .clear-search {
    position: relative;
    right: 24px;
    padding: 2px 3px;
    font-size: 10px;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 100%;
    cursor: pointer;
  }

  .clear-search:hover {
    color: white;
    background: grey;
  }

  @media (max-width: 600px) {
    nav {
      display: flex;
      flex-direction: column;
      text-align: right;
    }

    nav label,
    a {
      margin-right: 24px;
      margin-top: 6px;
    }

    .food-logo {
      width: 75px;
    }
  }
</style>
