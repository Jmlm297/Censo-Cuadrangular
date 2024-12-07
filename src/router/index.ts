import { createRouter, createWebHistory } from 'vue-router'
import CensoForm from '../views/CensoForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/censo',
      name: 'censo',
      component: CensoForm,
    },
  ],
})

export default router
