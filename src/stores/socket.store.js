import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client'
import uuidv4 from 'uuid/v4'
import questionStore from './question.store'

Vue.use(Vuex)

const socketStore = new Vuex.Store({
  state: {
    socket: null
  },
  mutations: {
    connect (state) {
      state.socket = io('http://localhost:3000')

      state.socket.on('student-question-published', function (question) {
        questionStore.commit('addQuestion', question)
      })

      state.socket.on('student-question-removed', function (id) {
        questionStore.commit('removeQuestion', id)
      })
    },
    newStudentQuestion (state, question) {
      question.id = uuidv4()
      state.socket.emit('new-student-question', question)
    },
    newMCQQuestion (state, question) {
      state.socket.emit('new-mcq-question', question)
    },
    removeStudentQuestion (state, id) {
      state.socket.emit('remove-student-question', id)
    }
  }
})

export default socketStore
