<template>
  <div class="layui-container">
        <div class="layui-row layui-col-space15">
            <div class="layui-col-md8">
                <list></list>
            </div>
            <div class="layui-col-md4">
                <hotlist></hotlist>
                <links></links>
                <ads></ads>
            </div>
        </div>
    </div>
</template>

<script>
import HotList from '../../components/sidebar/HotList'
import Links from '../../components/sidebar/Links'
import Ads from '../../components/sidebar/Ads'
import List from '../../components/content/List'
export default {
    name:'index',
    data() {
        return {

        }
    },
    components: {
        'hotlist' : HotList,
        'links' : Links,
        'ads' : Ads,
        'list':List
    }
}
</script>

<style scoped lang="scss">

</style>
