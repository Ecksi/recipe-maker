<script>
import Footer from '@/components/atoms/Footer'
import Header from '@/components/atoms/Header'

export default {
  name: 'App',
  components: {
    Footer,
    Header
  }
}
</script>

<template>
  <div class="site-container">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style>
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
  }

  .site-container {
    position: relative;
    padding-bottom: 60px;
    min-height: 100%;
    background-image: url("./assets/img/food-bg.jpg");
    background-color: #EEE;
    background-position: center;
    background-repeat: repeat;
  }

  input,
  textarea {
    padding: 8px;
    background: transparent;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 255, .1);
    border-radius: 6px;
  }

  textarea {
    border: 2px solid black;
  }
</style>
