import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import CourseList from '../views/courses/CourseList.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    children: [
      {name: 'Home', path: '/', component: Home},
      {name: 'CourseList', path: '/courses/list', component: CourseList},
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
