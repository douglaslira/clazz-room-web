<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3 class="text-secondary">Add new question</h3>
        <form>
          <div class="form-group">
            <label for="question-title">Title</label>
            <input type="text" class="form-control" id="question-title" name="title" placeholder="Enter title"
              v-model="question.title" v-validate="'required'">
            <span v-show="errors.has('title') || submited" class="error" >* {{'title field is required'}}</span>
          </div>
          <div class="form-group">
            <label for="question-description">Description</label>
            <textarea class="form-control" id="question-description" v-model="question.description" rows="4"></textarea>
          </div>
          <button type="button" class="btn btn-dark btn-block btn-lg" v-on:click="addQuestion">
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
      this.submited = true
      if (this.errors.has('title')) {
        return
      }
      socketStore.commit('newStudentQuestion', this.question)
      this.question = {
        title: '',
        description: ''
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
