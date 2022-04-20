<template>
  <div class="ctr">
    <transition name="fade" mode="out-in">
      <questions
        v-if="questionsAnswered < questions.length"
        :questions="questions"
        :questionsAnswered="questionsAnswered"
        @question-answered="questionAnswered"
        v-cloak
      />
      <result
        v-else
        :results="results"
        :totalCorrect="totalCorrect"
        :questions="questions.length"
        v-cloak
      />
    </transition>

    <button
      type="button"
      v-if="this.questionsAnswered === questions.length"
      class="reset-btn"
      @click.prevent="reset"
    >
      Reiniciar
    </button>
  </div>
</template>

<script>
import Questions from './components/Questions.vue'
import Result from './components/Result.vue'

export default {
  name: 'App',
  components: {
    Questions,
    Result,
  },
  data() {
    return {
      questionsAnswered: 0,
      totalCorrect: 0,
      questions: [],
      results: [{}],
    }
  },
  mounted() {
    this.getQuestions()
    this.getResults()
  },
  methods: {
    async getQuestions() {
      const req = await fetch('http://localhost:3000/questions')
      const data = await req.json()
      this.questions = data
    },
    async getResults() {
      const req = await fetch('http://localhost:3000/results')
      const data = await req.json()
      this.results = data
    },
    questionAnswered(is_correct) {
      if (is_correct) {
        this.totalCorrect++
      }

      this.questionsAnswered++
    },
    reset() {
      this.questionsAnswered = 0
      this.totalCorrect = 0
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500;700&display=swap');

[v-cloak] {
  display: none;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
  // font-family: sans-serif;

  background: #11998e;
  background: -webkit-linear-gradient(to right, #38ef7d, #11998e);
  background: linear-gradient(to right, #38ef7d, #11998e);
}
#app {
  min-height: 100vh;
  display: flex;
}

.ctr {
  margin: auto;
  max-width: 700px;
  padding: 30px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  @media (min-width: 1400px) {
    max-width: 900px;
  }
}

.single-question {
  position: relative;
  width: 100%;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.3s linear;
}
.fade-leave-active {
  transition: all 0.3s linear;
  opacity: 0;
  position: absolute;
}

.reset-btn {
  background-color: #f75968;
  border: none;
  outline: 0;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  padding: 15px 20px;
  min-width: 150px;
  margin: 20px auto;
  display: block;
  cursor: pointer;
  transition: all 0.3s linear;

  &:active,
  &:focus,
  &:hover {
    background-color: #dd4151;
  }
}
</style>
