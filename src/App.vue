<template>
  <div id="app">
    <myPro-header></myPro-header>
    <router-view></router-view>
    <myPro-footer></myPro-footer>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: "app",
  components:{
    'myPro-header':Header,
    'myPro-footer':Footer
  }
};
</script>
<style lang="scss" >
@import "assets/layui/css/layui.css";
@import "assets/css/global.css";
@import "assets/layui/css/modules/layer/default/layer.css";
</style>
