import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '../components/dashboard/Dashboard.vue'
import Layout from '../components/common/Layout.vue'

// setting
import SettingLayout from '../components/setting/common/SetLayout.vue'
import SettingHome from '../components/setting/SettingHome.vue'

// setting > project
import Projects from '../components/setting/projects/Projects.vue'
import ProCreate from '../components/setting/projects/ProCreate.vue'
import ProInit from '../components/setting/projects/ProInit.vue'
import ProConfig from '../components/setting/projects/ProConfig.vue'

// account
import ALayout from '../components/account/ALayout.vue'
import Login from '../components/account/Login.vue'
import Register from '../components/account/Register.vue'

// dashboard
import DashLayout from '../components/dashboard/common/DashLayout.vue'
import DashAll from '../components/dashboard/DashAll.vue'

Vue.use(Router)


const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/dashboard/:key',
      component: DashLayout,
      children: [
        {
          path: 'all',
          component: DashAll,
          name: 'All'
        }
      ]
    },
    {
      path: '/settings',
      component: SettingLayout,
      children: [
        {
          path: '/',
          component: SettingHome,
          name: 'Settings'
        },
        {
          path: 'projects',
          component: Projects,
          name: 'Projects',
        },
        {
          path: 'proconfig/:type/:key',
          component: ProConfig,
          name: 'Config'
        },
        {
          path: 'procreate',
          component: ProCreate,
          name: 'Create new project'
        },
        {
          path: 'proinit/:type/:key',
          component: ProInit,
          name: 'Integrate your application'
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
