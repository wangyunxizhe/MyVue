<!-- 用于汇总所有“github案例章节”的相关组件 -->

<template>
<div class="container">
    <GithubSearch />
    <GithubList />
</div>
</template>

<script>
// 引入组件
import GithubList from './components/github_list/GithubList.vue'
import GithubSearch from './components/github_list/GithubSearch.vue'

//vc实例对象
export default {
    name: "AppGithubList",
    components: {
        GithubList: GithubList,
        GithubSearch: GithubSearch
    }
}
</script>
