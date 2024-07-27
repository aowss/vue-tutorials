import { h } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:  () => import('@/pages/HomeView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/pages/projects/ProjectsView.vue')
    },
    {
      path: '/projects/:id',
      name: 'single-project',
      component: () => import('@/pages/projects/SingleProjectView.vue')
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('@/pages/tasks/TasksView.vue')
    },
    {
      path: '/:catchAll(.*)*',
      name: 'not-found',
      component: h('p', { style: 'color: red' }, 'Page Not Found')
    }
  ]
})

export default router
