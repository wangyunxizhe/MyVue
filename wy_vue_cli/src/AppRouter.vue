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
                <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
                <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
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
