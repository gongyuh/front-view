import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => {/*webpackChunkName:'login*/ './views/Login.vue'}
const Reg = () => {/*webpackChunkName:'reg*/ './views/Reg.vue'}
const Forget = () => {/*webpackChunkName:'forget*/ './views/Forget.vue'}


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/reg',
    name: 'login',
    component: Reg
  },
  {
    path: '/forget',
    name: 'login',
    component: Forget
  },
]



const router = new VueRouter({
  routes
})

export default router
