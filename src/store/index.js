import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  sid: '',
	isLogin: false,
	token: '',
	userInfo: {},
  },
  mutations: {
    setSid (state, value) {
      state.sid = value
    },
    setUserInfo (state, value) {
      if (value === '') return
      state.userInfo = value
      // 本地存储用户的基本信
      localStorage.setItem('userInfo', JSON.stringify(value))
    },
    // 设置isLogin的状态
    setIsLogin (state, value) {
      state.isLogin = value
    },
  },
  actions: {  
  },
  modules: {
  }
})
