<template>
  <footer id="footer">
    <p>Make Your Burger &copy; 2022</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
#footer {
  padding: 30px 0;
  background-color: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
#footer p {
  color: #fefefe;
  font-size: 16px;
  margin-block: 0;
}
</style>
