<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3 class="text-secondary">Add new question</h3>
        <form @submit.prevent="addQuestion">
          <div class="form-group">
            <label for="question-title">Title</label>
            <input type="text" class="form-control" id="question-title" name="title" placeholder="Enter title"
              v-model="question.title" required>
          </div>
          <div class="form-group">
            <label for="question-description">Description</label>
            <textarea class="form-control" id="question-description" v-model="question.description" rows="4"></textarea>
          </div>
          <button class="btn btn-dark btn-block btn-lg">
            Publish
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import socketStore from '../stores/socket.store'

export default {
  name: 'add-student-question',
  data () {
    return {
      question: { title: '', description: '' },
      submited: false
    }
  },
  methods: {
    addQuestion: function () {
      if (!this.errors.has('title')) {
        socketStore.commit('newStudentQuestion', this.question)
        this.question = {
          title: '',
          description: ''
        }
      }
    }
  }
}
</script>

<style>
h3 {
  padding-top: 50px;
  padding-bottom: 30px;
}

.error {
  font-size: 12px;
  color: red;
}
</style>
