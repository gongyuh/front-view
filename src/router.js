import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from'./views/Home.vue'

//路由懒加载
const Login = () => import('./views/Login.vue')
const Reg = () => import('./views/Reg.vue')
const Forget = () => import('./views/Forget.vue')
const Index = () =>
  import(/* webpackChunkName: 'index' */ './views/channels/Index.vue')
const Template1 = () =>
  import(/* webpackChunkName: 'template1' */ './views/channels/Template1.vue')
const Center = () => {
  import ('./views/Center.vue')
}

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
    path: '/center',
    name: 'center',
    component: Center
  },
  {
    path: '/forget',
    name: 'forget',
    component: Forget
  },
]



const router = new VueRouter({
  routes
})

export default router
