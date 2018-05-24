import Vue from 'vue'
import Router from 'vue-router'
import Ecran from '@/jeu/ecran'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ecran',
      component: Ecran
    }
  ]
})
