<template>
  <div id="main-banner">
    <h1>Make your Burger</h1>
  </div>
</template>

<script>
export default {
  name: 'Banner',
}
</script>

<style scoped>
#main-banner {
  background-image: url('/img/burger.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: none;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
}
#main-banner h1 {
  color: #fff;
  text-align: center;
  font-size: 40px;
  background-color: #2222228f;
  padding: 25px 40px;
  margin-top: 50px;
}
@media (min-width: 768px) {
  #main-banner {
    height: 600px;
  }
  #main-banner h1 {
    font-size: 60px;
  }
}
</style>
