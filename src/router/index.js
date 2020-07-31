import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
      {
        name: 'pos',
        path: '/',
        component:resolve => require(['../views/pos.vue'],resolve)
      }
]

const router = new VueRouter({
  routes
})

export default router
