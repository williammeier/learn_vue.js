<template>
      <div class="result">
        <div class="title">{{ results[resultIndex].title }}</div>
        <div class="desc">{{ results[resultIndex].desc }} {{totalCorrect}}</div>
    </div>
</template>

<script>
export default {
    name: 'Result',
    props: ['results', 'totalCorrect'],
    computed: {
        resultIndex() {
            let index = 0;

            this.results.forEach((e, i) => {
                if(e.min <= this.totalCorrect && e.max >= this.totalCorrect) {
                    index = i;
                }
            })

            return index;
        }
    }
}
</script>

<style scoped>
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
.desc {
  border: 1px solid #8e959f;
  padding: 20px;
  font-size: 18px;
  width: 100%;
  background-color: #fff;
  transition: 0.4s linear all;
  text-align: center;
}
.result{ 
  width: 100%;
}
</style>