import Vue from 'vue'
import Router from 'vue-router'

import Rank from '@/components/rank/rank'
import Recommend from '@/components/recommend/recommend'
import Singer from '@/components/singer/singer'
import Search from '@/components/search/search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
