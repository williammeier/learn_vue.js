<template>
  <form action="" @submit="enviarFormulario($event)">
    <div>
      <input type="text" v-model="name" />
    </div>
    <div>
      <input type="text" v-model="email" />
    </div>
    <div>
      <Submit />
    </div>
  </form>
</template>

<script>
import InputText from './form/InputText.vue'
import Submit from './form/Submit.vue'

export default {
  name: 'Form',
  components: {
    InputText,
    Submit,
  },
  data() {
    return {
      name: '',
      email: '',
    }
  },
  methods: {
    enviarFormulario(e) {
      e.preventDefault()
      const name = this.name
      const email = this.email

      console.log('Formulário Enviado')
      console.log('O nome é ' + name)
      console.log('O email é ' + email)
    },
  },
}
</script>
