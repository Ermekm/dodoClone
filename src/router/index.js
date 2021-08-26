import { createRouter, createWebHistory } from 'vue-router'
import Menu from '@/views/Menu.vue'
import Cart from '@/views/Cart.vue'

const routes = [
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/:notFound(.*)', redirect: '/menu',
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
