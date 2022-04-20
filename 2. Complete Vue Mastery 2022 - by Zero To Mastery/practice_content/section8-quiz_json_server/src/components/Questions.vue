<template>
  <div class="questions-ctr">
    <div class="progress">
      <div
        class="bar"
        :style="{ width: `${(questionsAnswered / questions.length) * 100}%` }"
      ></div>
      <div class="status">
        {{ questionsAnswered }} de {{ questions.length }} questões respondidas
      </div>
    </div>

    <transition-group name="fade">
      <div
        class="single-question"
        v-for="(question, qi) in questions"
        :key="question.q"
        v-show="questionsAnswered === qi"
      >
        <div class="question">{{ question.q }}</div>
        <div class="answers">
          <div
            class="answer"
            v-for="answer in question.answers"
            :key="answer.text"
            @click.prevent="selectAnswer(answer.is_correct)"
          >
            {{ answer.text }}
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Questions',
  props: ['questions', 'questionsAnswered'],
  emits: ['question-answered'],
  methods: {
    selectAnswer(is_correct) {
      this.$emit('question-answered', is_correct)
    },
  },
}
</script>

<style scoped lang="scss">
.questions-ctr {
  position: relative;
  width: 100%;

  .question {
    width: 100%;
    padding: 20px;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    background-color: #ddd;
    color: #21251f;
    box-sizing: border-box;
  }

  .answer {
    border-bottom: 1px solid #ccc;
    padding: 20px;
    font-size: 18px;
    width: 100%;
    background-color: #fff;
    transition: 0.2s linear all;
    @media (min-width: 1400px) {
      padding: 23px;
    }
    &:last-child {
      border-bottom: none;
    }
    span {
      display: inline-block;
      margin-left: 5px;
      font-size: 0.75em;
      font-style: italic;
    }
    &:not(.is-answered) {
      cursor: pointer;
      &:hover {
        background-color: #eeeeee;
        color: #21251f;
      }
    }
  }

  .progress {
    height: 50px;
    background-color: #ff6372;
    position: relative;
    .bar {
      height: 50px;
      background-color: #38ef7d;
      transition: all 0.3s linear;
    }
    .status {
      position: absolute;
      top: 15px;
      left: 0;
      text-align: center;
      color: #fff;
      width: 100%;
    }
  }
}
</style>
