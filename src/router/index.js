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
      path: '/composables',
      name: 'composables',
      component: () => import('../views/ComposablesView.vue')
    },
    {
      path: '/define-props-emits',
      name: 'define-props-emits',
      component: () => import('../views/DefinePropsDefineEmitsView.vue')
    },
    {
      path: '/provide-inject',
      name: 'provide-inject',
      component: () => import('../views/ProvideInjectView.vue')
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('../views/StoreView.vue')
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('../views/PiniaView.vue')
    }
  ]
})

export default router
