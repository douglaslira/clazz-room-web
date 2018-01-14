import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const questionStore = new Vuex.Store({
  state: {
    questions: []
  },
  mutations: {
    addQuestion (state, question) {
      state.questions.push(question)
    },
    removeQuestion (state, id) {
      const elements = state.questions.filter(question => question.id === id)
      if (elements && elements.length > 0) {
        const index = state.questions.indexOf(elements[0])
        if (index > -1) {
          state.questions.splice(index, 1)
        }
      }
    },
    clearAll (state) {
      state.questions = []
    }
  },
  getters: {
    questionCount: state => {
      return state.questions.length
    }
  }
})

export default questionStore
