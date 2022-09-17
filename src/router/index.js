import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/SurveyList/SurveyList.vue')

  },
  {
    path: '/surveydetail/:id',
    name: 'surveyDetail',
    props: { default: true},
    component: () => import( '../components/SurveyDetail/SurveyDetail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
