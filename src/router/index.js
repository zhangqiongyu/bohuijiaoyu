import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Video from '@/views/Video'
import Students from '@/views/Students'
import Teachers from '@/views/Teachers'
import Hardware from '@/views/Hardware'
import History from '@/views/History'
import Future from '@/views/Future'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/video',
      name: 'video',
      component: Video
    },
    {
      path: '/students',
      name: 'students',
      component: Students
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: Teachers
    },
    {
      path: '/hardware',
      name: 'hardware',
      component: Hardware
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      path: '/future',
      name: 'future',
      component: Future
    }
  ]
})
