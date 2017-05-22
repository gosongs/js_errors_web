import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '../components/dashboard/Dashboard.vue'
import Layout from '../components/common/Layout.vue'

// project
import ProjectCreate from '../components/project/Create.vue'
import ProjectMy from '../components/project/My.vue'
import ProjectInit from '../components/project/Init.vue'

// account
import ALayout from '../components/account/ALayout.vue'
import Login from '../components/account/Login.vue'
import Register from '../components/account/Register.vue'

import GenerateErr from '../components/GenerateErr.vue'

// errors
import ErrorsCount from '../components/errors/count/Count.vue'
import ErrorsList from '../components/errors/List.vue'

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
        },
        {
          path: 'generateErr',
          component: GenerateErr,
          name: 'Generate An Error'
        }
      ]
    },
    {
      path: '/project',
      component: Layout,
      children: [
        {
          path: 'create/:key',
          component: ProjectCreate,
          name: '新建项目'
        },
        {
          path: 'my/:key',
          component: ProjectMy,
          name: '我的项目'
        },
        {
          path: 'init/:type/:key',
          component: ProjectInit,
          name: '初始化项目'
        }
      ]
    },
    {
      path: '/errors',
      component: Layout,
      children: [
        {
          path: 'list/:key',
          component: ErrorsList,
          name: '错误列表'
        },
        {
          path: 'count/:key',
          component: ErrorsCount,
          name: '错误统计'
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
