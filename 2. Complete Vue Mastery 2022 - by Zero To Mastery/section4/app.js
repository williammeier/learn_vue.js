let vm = Vue.createApp({
  data() {
    return {
      message: 'Hello world!',
    }
  },
  beforeCreate() {
    console.log('beforeCreate() function called!', this.message)
  },
  created() {
    console.log('created() function called!', this.message)
  },
  beforeMount() {
    console.log('beforeMout() function called!', this.$el)
  },
  mounted() {
    console.log('mounted() function called!', this.$el)
  },
  beforeUpdate() {
    console.log('beforeUpdate() function called!')
  },
  updated() {
    console.log('update() function called!')
  },
  beforeUnmount() {
    console.log('beforeUnmount() function called!')
  },
  unmount() {
    console.log('unmout() function called!')
  },
})

vm.mount('#app')

// setTimeout(() => {
//   vm.mount('#app')
// }, 3000)
// mount('#app')
