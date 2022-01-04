<template>
  <form action="">
    <div>
      <InputText />
    </div>
    <div>
      <InputText />
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
}
</script>
