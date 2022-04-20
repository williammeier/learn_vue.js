<template>
  <div class="result">
    <div class="title">{{ results[resultIndex].title }}</div>
    <div class="desc">{{ results[resultIndex].desc }}</div>
    <div class="correct">
      Você acertou {{ totalCorrect }} de {{ questions }} questões.
    </div>
  </div>
</template>

<script>
export default {
  name: 'Result',
  props: ['results', 'totalCorrect', 'questions'],
  computed: {
    resultIndex() {
      let index = 0

      this.results.forEach((e, i) => {
        if (e.min <= this.totalCorrect && e.max >= this.totalCorrect) {
          index = i
        }
      })

      return index
    },
  },
}
</script>

<style scoped lang="scss">
.result {
  width: 100%;
  .title {
    width: 100%;
    padding: 20px;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    background-color: #12cbc4;
    color: #fff;
    box-sizing: border-box;
  }
  .desc,
  .correct {
    border-bottom: 1px solid #ccc;
    padding: 20px;
    background-color: #fff;
    transition: 0.4s linear all;
    text-align: center;
    color: #21251f;
    font-size: 18px;
    width: 100%;
  }
  .correct {
    border-bottom: none;
    font-size: 18px;
    font-weight: 600;
  }
}
</style>
