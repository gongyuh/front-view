<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li class="layui-this">登入</li>
          <li>
            <router-link :to="{ name: 'reg' }">注册</router-link>
          </li>
        </ul>
        <div
          class="layui-form layui-tab-content"
          id="LAY_ucm"
          style="padding: 20px 0;"
        >
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <form method="post">
                <div class="layui-form-item">
                  <label for="L_email" class="layui-form-label">邮箱</label>
                  <div class="layui-input-inline">
                    <input
                      type="text"
                      v-model="username"                     
                      id="L_email"
                      name="email"
                      placeholder="输入您的邮箱"
                      autocomplete="off"
                      class="layui-input"
                    />
                  </div>                 
                </div>
                <div class="layui-form-item">
                  <label for="L_pass" class="layui-form-label">密码</label>
                  <div class="layui-input-inline">
                    <input
                      type="password"
                      v-model="password"
                      name="pass"
                      placeholder="输入您的密码"
                      autocomplete="off"
                      class="layui-input"
                    />
                  </div>
                </div>
                <div class="layui-form-item">
                  <div class="layui-row">
                    <label for="L_vercode" class="layui-form-label"
                      >验证码</label
                    >
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        v-model="code"
                        name="vercode"
                        placeholder="请输入验证码"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="layui-form-mid">
                      <span class="svg" style="color: #c00;" @click="_getCode()" v-html="svg"></span>
                    </div>
                  </div>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn" type="button" @click="submit()">
                    立即登录
                  </button>
                  <span style="padding-left:20px;">
                    <router-link :to="{ name: 'forget' }">忘记密码</router-link>
                  </span>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者使用社交账号登入</span>
                  <a
                    href=""
                    onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-qq"
                    title="QQ登入"
                  ></a>
                  <a
                    href=""
                    onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-weibo"
                    title="微博登入"
                  ></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCode, login } from '@/api/login'
import { v4 as uuidv4 } from 'uuid'
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      code: "",
      svg: "",
    };
  },
  mounted() {
    let sid = ''
    if (localStorage.getItem('sid')) {
      sid = localStorage.getItem('sid')
    } else {
      sid = uuidv4()
      localStorage.setItem('sid', sid)
    }
    this.$store.commit('setSid', sid)
    console.log(sid)
    this._getCode()
  },
  methods:{
    _getCode () {
      let sid = this.$store.state.sid
      getCode(sid).then((res)=>{
        if(res.code === 200 ){
          console.log(res)
          this.svg = res.data
        }
      })
    },
    submit () {
      login({
        username: this.username,
        password: this.password,
        code: this.code,
        sid: this.$store.state.sid
      }).then((res) => {
        if (res.code === 200) {
          console.log(res)
          // 存储用户的登录名
          res.data.username = this.username
          this.$store.commit('setUserInfo', res.data)
          this.$store.commit('setIsLogin', true)
          this.$store.commit('setToken', res.token)
          this.username = ''
          this.password = ''
          this.code = ''
          requestAnimationFrame(() => {
            this.$refs.observer && this.$refs.observer.reset()
          })
          this.$router.push({ name: 'index' })
        }
      }).catch((err) => {
        const data = err.response.data
        if (data.code === 500) {
          this.$alert('用户名密码校验失败，请检查！')
        } else {
          this.$alert('服务器错误')
        }
        console.log(err.response)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.svg {
  position:relative;
  top:-10px;
}
</style>
