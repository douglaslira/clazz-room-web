<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3 class="text-secondary">Add new question</h3>
        <form>
          <div class="form-group">
            <label for="question-title">Title</label>
            <input type="text" class="form-control" id="question-title" placeholder="Enter title"
              v-model="question.title">
          </div>
          <div class="form-group">
            <label for="question-description">Description</label>
            <input type="text" class="form-control" id="question-description" placeholder="Enter description"
              v-model="question.description">
          </div>
          <button type="button" class="btn btn-primary" v-on:click="addQuestion">
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
      question: { title: '', description: [] }
    }
  },
  methods: {
    addQuestion: function () {
      socketStore.commit('newStudentQuestion', this.question)
    }
  }
}
</script>

<style>
h3 {
  padding-top: 50px;
  padding-bottom: 30px;
}
</style>
