import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/main'
import infoMe from '@/components/infoMe'
import growth from '@/components/growth'
import learn from '@/components/learncenter'
import learnList from '@/components/learn/list/learnList'
import learnContent from '@/components/learn/content/learnContent'
import dispor from '@/components/dispor/'
import book from '@/components/dispor/photo/photobook'
import photoList from '@/components/dispor/photo/photoList'
import bbs from '@/components/bbs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: HelloWorld
    },
    {
      path: '/infoMe',
      name: 'infoMe',
      component: infoMe
    },
    {
      path: '/bbs',
      name: 'bbs',
      component: bbs
    },
    {
      path: '/growth',
      name: 'growth',
      component: growth
    },
    {
      path: '/dispor',
      name: 'dispor',
      component: dispor,
      children:[
        { path: '/dispor/book', component: book},
        { path: '/dispor/photoList/:book', component: photoList}
      ]
    },
    {
      path: '/learn',
      name: 'learn',
      component: learn,
      children:[
        { path: '/learn/list', component: learnList},
        { path: '/learn/content', component: learnContent}
      ]
    }
  ]
})
