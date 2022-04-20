<template>
  <div>
    <h3>Hey!</h3>
    <gree-ting :age="age"></gree-ting>
    <main-user :age="age" @age-change="updateAge" :ageChangeFn="updateAgeCB"></main-user>
  </div>
</template>

<script>
import GreeTing from './components/Greeting.vue'
import MainUser from './components/MainUser.vue'

export default {
  name: 'App',
  components: {
    GreeTing,
    MainUser,
  },
  data() {
    return {
      age: 20
    }
  },
  methods: {
    updateAge(num) {
      this.age += num
    },
    updateAgeCB(num) {
      this.age += num
    }
  }
}
</script>
