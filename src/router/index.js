import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:id',
      name: 'film',
      component: () => import('../views/CurrentFilm.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
