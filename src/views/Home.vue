<template>
    <div>
        <panel></panel>
        <router-view></router-view>
    </div>
</template>

<script>
import Panel from '../components/Panel'
 
export default {
    name: 'home',
    data() {
    return {
        
    }
  },
  components: {
    'panel' : Panel
  }
}
</script>

<style scoped lang="scss">

</style>
