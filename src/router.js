import Vue from 'vue'
import VueRouter from 'vue-router'
//路由懒加载
const Login = () => import(/*webpackChunkName:'login*/ './views/Login.vue')
const Reg = () => import(/*webpackChunkName:'reg*/ './views/Reg.vue')
const Forget = () => import(/*webpackChunkName:'forget*/ './views/Forget.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'home',
    component: Login
  },
  {
    path: '/reg',
    name: 'home',
    component: Reg
  },
  {
    path: '/forget',
    name: 'home',
    component: Forget
  },
]



const router = new VueRouter({
  routes
})

export default router
