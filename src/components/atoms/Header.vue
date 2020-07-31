<script>
export default {
  name: 'Header'
}
</script>

<template>
  <header>
    <img class="food-logo" src="../../assets/img/food-logo.png" alt="placeholder img">
    <nav class="navigation">
      <router-link to="/add">Add Recipes</router-link>
      <router-link to="/view">View Recipes</router-link>
      <label for="recipe-search">
        <input id="recipe-search" type="text" placeholder="Find a recipe">
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
    padding: 8px;
    background: transparent;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 255, .1);
  }

  .food-logo {
    width: 125px;
    padding: 24px;
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
