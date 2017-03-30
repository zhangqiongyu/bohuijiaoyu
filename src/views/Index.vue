<template>
  <div class="index">
    <nav-bar></nav-bar>
    <intro></intro>
    <contact></contact>
    <myfooter></myfooter>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Intro from '@/components/Intro'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default {
  name: 'index',
  data () {
    return {
    }
  },
  components: {
    'nav-bar': NavBar,
    'intro': Intro,
    'contact': Contact,
    'myfooter': Footer
  }
}
</script>

<style scoped>
</style>
