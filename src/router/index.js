// 路由配置文件
import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/page/content'
import Index from '@/page/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/content/:id',
      component: Content
    }
  ]
})
