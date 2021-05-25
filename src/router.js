import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from'./views/Home.vue'

//路由懒加载
const Login = () => import('./views/Login.vue')
const Reg = () => import('./views/Reg.vue')
const Forget = () => import('./views/Forget.vue')
const Center = () => import ('./views/Center.vue')
const Index = () =>import(/* webpackChunkName: 'index' */ './views/channels/Index.vue')
const Template1 = () =>import(/* webpackChunkName: 'template1' */ './views/channels/Template1.vue')
const UserCenter = () => import('./components/user/Center')
const Settings = () => import('./components/user/Settings')
const Posts = () => import('./components/user/Posts')
const Msg = () => import('./components/user/Msg')
const Others = () => import('./components/user/Others')
const User = () => import ('./views/User.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component: Home,
    children:[
    {
      path: '',
      name:'index',
      component:Index
    },
    {
      path: '/index/:catalog',
      name: 'catalog',
      component: Template1
    }
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/reg',
    name: 'reg',
    component: Reg,
    beforeEnter: (to, from, next) => {
      if (from.name === 'login') {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/forget',
    name: 'forget',
    component: Forget
  },
  {
    path: '/user/:uid',
    name: 'user',
    props: true,
    component: User
  },
  {
    path: '/center',
    name: 'center',
    component: Center,
    linkActiveClass: 'layui-this',
    children: [
      {
        path: '',
        name: 'centet',
        component: UserCenter
      },
      {
        path: '/settings',
        name: 'settings',
        component: Settings
      },
      {
        path: '/msg',
        name: 'msg',
        component: Msg
      },
      {
        path: '/posts',
        name: 'posts',
        component: Posts
      },
      {
        path: '/others',
        name: 'others',
        component: Others
      },
    ]
  }
]



const router = new VueRouter({
  routes
})

export default router
