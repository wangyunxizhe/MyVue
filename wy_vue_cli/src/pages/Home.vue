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
        <router-view></router-view>
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
