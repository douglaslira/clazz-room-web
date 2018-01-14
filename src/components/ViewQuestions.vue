<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3 class="text-secondary">Questions published</h3>
        <div class="question-area">
          <div class="card add-gap bg-dark" v-for="{id, title, description} in questions" :key="id">
            <div class="card-body">
              <h5 class="card-title text-white">{{title}}</h5>
              <p class="card-text text-white">{{description}}</p>
            </div>
            <button type="button" class="btn btn-light rounded-circle" v-on:click="removeQuestion(id)">
              <span class="oi oi-check"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import questionStore from '../stores/question.store.js'
import socketStore from '../stores/socket.store'

export default {
  name: 'view-questions',
  computed: {
    questions () {
      return questionStore.state.questions
    }
  },
  methods: {
    removeQuestion: function (id) {
      socketStore.commit('removeStudentQuestion', id)
    }
  }
}
</script>

<style>
h3 {
  padding-top: 50px;
  padding-bottom: 30px;
}

.add-gap {
  margin-bottom: 20px;
}

.card > button {
  position: absolute;
  top: 10px;
  right: 10px;
  height: 40px;
  width: 40px;
}
</style>
