<template>
  <button type="button" @click="onClickAge">Update Age Eve</button>
  <button type="button" @click="ageChangeFn(3)">Update Age CB</button>
  <p>The user is {{age}} years old</p>
  <p>{{ageDouble}}</p>
</template>

<script>
export default {
    name: "MainUser",
    props: {
      age: {
        type: Number,
        // required: true,
        // default: 20
        validator(value) {
          // this.onClickAge()
          return value < 130
        }
      },
      ageChangeFn: Function
    },
    emits: ['age-change'],
    computed: {
      ageDouble() {
        return this.age * 2
      }
    },
    methods: {
      onClickAge() {
        this.$emit('age-change', 3)
      }
    }
}
</script>

<style>

</style>