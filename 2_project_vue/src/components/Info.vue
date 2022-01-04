<template>
  <div>
    <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
    <p v-else>Estou em busca de novas oportunidades</p>
    <p>Utilizo as seguintes tecnologias:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Java Script</li>
      <li>PHP</li>
      <li>SQL</li>
    </ul>
    <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
  </div>
</template>

<script>
export default {
  name: 'Info',
  data() {
    return {
      esta_trabalhando: true,
      mostrar_email: true,
      email: 'william.meier@outlook.com',
    }
  },
}
</script>
