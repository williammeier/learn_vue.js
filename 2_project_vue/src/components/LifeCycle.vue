<template>
  <div>
    <h1>Meu nome é {{ nome }}</h1>
  </div>
</template>

<script>
export default {
  name: 'LifeCycle',
  data() {
    return {
      nome: 'ainda não sei',
    }
  },
  created() {
    setTimeout(() => {
      this.nome = 'William'
    }, 1000)
  },
  mounted() {
    setTimeout(() => {
      this.nome = 'Will'
    }, 2000)
  },
}
</script>
