<script>
import Header from '@/components/atoms/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>
