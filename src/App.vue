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
  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .site-container {
    position: relative;
    min-height: 100%;
    background-image: url("./assets/img/food-bg.jpg");
    background-color: #EEE;
    background-position: center;
    background-repeat: repeat;
  }
</style>
