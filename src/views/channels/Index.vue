<template>
  <div class="layui-container">
        <div class="layui-row layui-col-space15">
            <div class="layui-col-md8">
                <top></top>
                <list></list>
            </div>
            <div class="layui-col-md4">
                <tips></tips>
                <sign></sign>
                <hotlist></hotlist>
                <links></links>
                <ads></ads>
            </div>
        </div>
    </div>
</template>

<script>
import Tips from '../../components/sidebar/Tips'
import Sign from '../../components/sidebar/Sign'
import HotList from '../../components/sidebar/HotList'
import Links from '../../components/sidebar/Links'
import Ads from '../../components/sidebar/Ads'
import List from '../../components/content/List'
import Top from '../../components/content/Top'
export default {
    name:'index',
    data() {
        return {

        }
    },
    components: {
        'tips' : Tips,
        'sign' : Sign,
        'hotlist' : HotList,
        'links' : Links,
        'ads' : Ads,
        'list':List,
        'top' :Top
    }
}
</script>

<style scoped lang="scss">

</style>
