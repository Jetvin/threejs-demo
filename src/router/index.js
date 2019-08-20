import Vue from 'vue'
import Router from 'vue-router'
import ThreeDemo from '@/components/ThreeDemo'
import Demo1 from '@/components/Demo1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ThreeDemo',
      component: ThreeDemo
    },
    {
      path: '/demo1',
      name: 'Demo1',
      component: Demo1
    }
  ]
})
