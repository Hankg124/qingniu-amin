import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //登录页
    {
      path: '/login',
      name: 'login',
      component: () => import('@/login/Login.vue')
    },

    {
      path: '/',
      name: 'index',
      component: () => import('@/layout/index.vue'),
      meta: {
        title: '首页'
      },
      children: [
        //面板
        {
          path: '/dashboard/home',
          name: 'home',
          component: () => import('@/views/dashboard/home.vue'),
          meta: {
            title: '面板'
          },
        },
        //权限管理
        {
          path: '/permission',
          name: 'permission',
          meta:{
            title:'权限管理'
          },
          children: [
            {
              path: '/permission/user',
              name: 'user',
              component: () => import('@/views/permission/user.vue'),
              meta: {
                title: '用户管理'
              },
            },
            {
              path: '/permission/role',
              name: 'role',
              component: () => import('@/views/permission/role.vue'),
              meta: {
                title: '角色管理'
              },
            },
            {
              path: '/permission/menu',
              name: 'menu',
              component: () => import('@/views/permission/menu.vue'),
              meta: {
                title: '菜单管理'
              },
            }
          ]
        },
        //训练管理
        {
          path: '/train',
          name: 'train',
          meta:{
            title:'训练管理'
          },
          children: [
            {
              path: '/train/classroom',
              name: 'classroom',
              component: () => import('@/views/train/classroom.vue'),
              meta: {
                title: '课堂训练'
              },
            },
            {
              path: '/train/afterclass',
              name: 'afterclass',
              component: () => import('@/views/train/afterclass.vue'),
              meta: {
                title: '课后训练'
              },
            },
            {
              path: '/train/character',
              name: 'character',
              component: () => import('@/views/train/character.vue'),
              meta: {
                title: '品格教育'
              },
            }
          ]
        }
      ]
    }
  ]
})

export default router
