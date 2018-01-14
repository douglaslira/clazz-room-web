import Vue from 'vue'
import Router from 'vue-router'
import ViewQuestions from '@/components/ViewQuestions'
import AddStudentQuestion from '@/components/AddStudentQuestion'
import DashBoard from '@/components/DashBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/teacher/view-questions',
      name: 'ViewQuestions',
      component: ViewQuestions
    },
    {
      path: '/student/add-question',
      name: 'AddStudentQuestion',
      component: AddStudentQuestion
    },
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoard
    }
  ]
})
