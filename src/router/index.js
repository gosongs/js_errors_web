import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '../components/dashboard/Dashboard.vue'
import Layout from '../components/common/Layout.vue'
import ProjectCreate from '../components/project/Create.vue'
import ProjectMy from '../components/project/My.vue'

// account
import ALayout from '../components/account/ALayout.vue'
import Login from '../components/account/Login.vue'
import Register from '../components/account/Register.vue'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          component: Dashboard,
          name: 'dashboard'
        }
      ]
    },
    {
      path: '/project',
      component: Layout,
      children: [
        {
          path: 'create',
          component: ProjectCreate,
          name: '新建项目'
        },
        {
          path: 'my',
          component: ProjectMy,
          name: '我的项目'
        }
      ]
    },
    {
      path: '/account',
      component: ALayout,
      children: [
        {
          path: 'login',
          component: Login,
          name: '登录'
        },
        {
          path: 'register',
          component: Register,
          name: '注册'
        }
      ]
    }
  ]
})

export default router
