import ColoresView from '@/views/ColoresView.vue'
import EquipoView from '@/views/EquipoView.vue'

import { createRouter, createWebHashHistory } from 'vue-router' 

const routes = [
  {
    path: '/colores',
    name: 'colores',
    component: ColoresView
  }, 
  {
    path: '/equipo',
    name: 'equipo',
    component: EquipoView
  },
  {
    path: '/',
    redirect: '/equipo'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
