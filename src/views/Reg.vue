<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li><router-link :to="{name : 'login'}">登录</router-link></li>
          <li class="layui-this">注册</li>
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
                      id="L_email"
                      name="email"
                      required
                      lay-verify="email"
                      autocomplete="off"
                      class="layui-input"
                    />
                  </div>
                  <div class="layui-form-mid layui-word-aux">
                    将会成为您唯一的登入名
                  </div>
                </div>
                <div class="layui-form-item">
                  <label for="L_username" class="layui-form-label">昵称</label>
                  <div class="layui-input-inline">
                    <input
                      type="text"
                      id="L_username"
                      name="username"
                      required
                      lay-verify="required"
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
                      id="L_pass"
                      name="pass"
                      required
                      lay-verify="required"
                      autocomplete="off"
                      class="layui-input"
                    />
                  </div>
                  <div class="layui-form-mid layui-word-aux">6到16个字符</div>
                </div>
                <div class="layui-form-item">
                  <label for="L_repass" class="layui-form-label"
                    >确认密码</label
                  >
                  <div class="layui-input-inline">
                    <input
                      type="password"
                      id="L_repass"
                      name="repass"
                      required
                      lay-verify="required"
                      autocomplete="off"
                      class="layui-input"
                    />
                  </div>
                </div>
                <div class="layui-form-item">
                  <label for="L_vercode" class="layui-form-label"
                    >验证码</label
                  >
                  <div class="layui-input-inline">
                    <input
                      type="text"
                      id="L_vercode"
                      name="vercode"
                      required
                      lay-verify="required"
                      placeholder="输入验证码"
                      autocomplete="off"
                      class="layui-input"
                    />
                  </div>
                  <div class="layui-form-mid">
                    <span class="svg" style="color: #c00;" @click="_getCode()" v-html="svg"></span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn" type="button" @click="submit()">
                    立即注册
                  </button>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者直接使用社交账号快捷注册</span>
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
import { getCode, reg } from '@/api/login'
export default {
  name: 'reg',
  data () {
    return {
      username: '',
      name: '',
      password: '',
      repassword: '',
      code: '',
      svg: ''
    }
  },
  components: {
  },
  mounted () {
    this._getCode()
  },
  methods: {
    _getCode () {
      let sid = this.$store.state.sid
      getCode(sid).then((res) => {
        if (res.code === 200) {
          this.svg = res.data
        }
      })
    },
    async submit () {
      reg({
        username: this.username,
        password: this.password,
        name: this.name,
        code: this.code,
        sid: this.$store.state.sid
      }).then((res) => {
        if (res.code === 200) {
          this.username = ''
          this.password = ''
          this.repassword = ''
          this.name = ''
          this.code = ''
          // 跳转到登录界面，让用户登录
          this.$alert('注册成功')
          setTimeout(() => {
            this.$router.push('/login')
          }, 1000)
          console.log(res)
        } else {
          // username -> '用户名已经注册'
          // res.msg = { username: [], name: [], code: []}
          this.$alert(res.msg)
        }
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
