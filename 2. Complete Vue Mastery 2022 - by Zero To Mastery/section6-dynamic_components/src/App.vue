<template>
  <select v-model="componentName">
    <option value="HomePage">Home</option>
    <option value="AboutPage">About</option>
  </select>
  <keep-alive>
    <component :is="componentName"></component>
  </keep-alive>
</template>

<script>
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    AboutPage
  },
  data() {
    return {
      componentName: "HomePage",
    }
  }
}
</script>