import AlertViewVue from '@/views/AlertView.vue'
import CardViewVue from '@/views/CardView.vue'
import FormViewVue from '@/views/FormView.vue'
import GridViewVue from '@/views/GridView.vue'
import TableViewVue from '@/views/TableView.vue'
import TabsViewVue from '@/views/TabsView.vue'
import { createRouter, createWebHashHistory } from 'vue-router' 

const routes = [
  {
    path: '/',
    name: 'Grid',
    component: GridViewVue
  },
  {
    path: '/alert',
    name: 'Alert',
    component: AlertViewVue
  },
  {
    path: '/card',
    name: 'Card',
    component: CardViewVue
  },
  {
    path: '/form',
    name: 'Form',
    component: FormViewVue
  },
  {
    path: '/table',
    name: 'Table',
    component: TableViewVue
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: TabsViewVue
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
