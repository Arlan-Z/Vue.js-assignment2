import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/students/:filter?',
    name: 'students',
    component: Dashboard
  }
]


export const router = createRouter({
  history: createWebHistory(),
  routes
})
