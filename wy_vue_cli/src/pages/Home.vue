<!-- 路由组件Home，路由组件通常放在“pages”文件夹中（规范） -->
<template>
<div>
    <h2>Home组件内容</h2>
    <div>
        <ul class="nav nav-tabs">
            <li>
                <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
            </li>
            <li>
                <router-link class="list-group-item" active-class="active" to="/home/msg">Message</router-link>
            </li>
        </ul>
        <!-- 缓存路由组件：默认在通过路由切换组件时，组件会被销毁，
             如News中input填好了值，切换到Message组件（此时News组件会自动被销毁）再切换回News时，
             input框中的值就没了（因为之前的News组件被销毁了）
             配置了keep-alive标签后，将会把组件缓存下来，不会被销毁 -->
        <!-- include:需要缓存的组件，不写缓存所有在此处渲染的组件 -->
        <!-- include缓存多个 ==> :include="['News','A','B',...]" -->
        <keep-alive include="News">
            <router-view></router-view>
        </keep-alive>
    </div>
</div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>

</style>
