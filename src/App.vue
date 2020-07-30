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
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
