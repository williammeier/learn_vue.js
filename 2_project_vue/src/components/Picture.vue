<template>
  <img :src="avatar" :alt="description" />
</template>
<script>
export default {
  name: 'Picture',
  data() {
    return {
      avatar: '/img/avatar.png',
      description: 'William Meier Avatar',
    }
  },
}
</script>
