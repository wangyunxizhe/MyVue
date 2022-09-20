<!-- 
    用于演示 “路由” 章节
-->

<template>
<div>
    <div class="row">
        <Banner />
    </div>
    <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
            <div class="list-group">
                <!-- 没有使用“路由（vue-router）” 插件前，使用a标签实现跳转-->
                <!-- <a class="list-group-item active" href="./about.html">About</a>
                <a class="list-group-item" href="./home.html">Home</a> -->

                <!-- 使用“路由（vue-router）” 插件后，使用router-link标签实现跳转，注意：to后面是URL -->
                <!-- :to="{name:'eBaoTe'}" ==> “命名路由”章节，在“to”里使用index.js中路由的name取代URL（使用场景：URL特别长的情况） -->
                <router-link replace class="list-group-item" active-class="active" :to="{name:'eBaoTe'}">About</router-link>
                <!-- replace属性的作用：控制页面跳转历史记录，直接影响页面的“前进”，“后退”操作 -->
                <router-link replace class="list-group-item" active-class="active" to="/home">Home</router-link>
            </div>
        </div>
        <div class="col-xs-6">
            <div class="panel">
                <div class="panel-body">
                    <!-- 指定组件在此处呈现 -->
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Banner from './components/route/Banner.vue'

export default {
    name: "AppRouter",
    components: {
        Banner: Banner
    }
}
</script>
