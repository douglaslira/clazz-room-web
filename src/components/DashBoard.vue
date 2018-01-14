<template>
  <div class="container">
    <h3 class="text-secondary">Clazz Room</h3>
    <div class="row">
      <div class="col">
        <button type="button big-button" class="btn btn-dark btn-block big-button" v-on:click="openViewQuestionsPage">
          Lecturer
        </button>
        <button type="button big-button" class="btn btn-dark btn-block big-button" v-on:click="openAddQuestionPage">
          Student
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dash-board',
  methods: {
    openAddQuestionPage: function () {
      this.$router.push('/student/add-question')
    },
    openViewQuestionsPage: function () {
      this.$router.push('/teacher/view-questions')
    }
  }
}
</script>

<style scoped>
h3 {
  padding-top: 50px;
  padding-bottom: 30px;
}
img {
  height: auto;
  width: 60%;
  margin-top: 20px;
}
.big-button{
  height: 100px;
  margin-bottom: 20px;
}
</style>
