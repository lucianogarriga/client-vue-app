import AnimalesList from '@/views/AnimalesList.vue'
import CalculadoraView from '@/views/CalculadoraView.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [ 
  {
    path: '/',
    name: 'animal',
    component: AnimalesList
  },
  {
    path: '/calculadora',
    name: 'calculadora',
    component: CalculadoraView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
