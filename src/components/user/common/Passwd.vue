<template>
  <!-- 修改密码 -->
  <div class="layui-form layui-form-pane layui-tab-item layui-show">
    <form>
      <div class="layui-form-item">
        <div class="layui-row">
          <label for="L_nowpass" class="layui-form-label">当前密码</label>
          <div class="layui-input-inline">
            <input type="password" class="layui-input" />
          </div>
        </div>
        <div class="layui-row">
          <span style="color: #c00">123</span>
        </div>
      </div>
      <div class="layui-form-item">
        <div class="layui-row">
          <label for="L_pass" class="layui-form-label">新密码</label>
          <div class="layui-input-inline">
            <input type="password" class="layui-input" />
          </div>
          <div class="layui-form-mid layui-word-aux">6到16个字符</div>
        </div>
        <div class="layui-row">
          <span style="color: #c00">123</span>
        </div>
      </div>
      <div class="layui-form-item">
        <div class="layui-row">
          <label for="L_repass" class="layui-form-label">确认密码</label>
          <div class="layui-input-inline">
            <input type="password" v-model="repassword" class="layui-input" />
          </div>
        </div>
        <div class="layui-row">
          <span style="color: #c00">123</span>
        </div>
      </div>
      <div class="layui-form-item">
        <button type="button" class="layui-btn">确认修改</button>
      </div>
    </form>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
</style>
