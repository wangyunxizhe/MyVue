<template>
<!-- 头部搜索区域 -->
<section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
        <input type="text" placeholder="enter the name you search" v-model="keyWord" />&nbsp;
        <button @click="searchUsers">Search</button>
    </div>
</section>
</template>

<script>
import axios from 'axios'

export default {
    name: "GithubSearch",
    data() {
        return {
            keyWord: ''
        }
    },
    methods: {
        searchUsers() {
            //发出请求前，处理List组件中显示的内容
            this.$bus.$emit('getUsers', {
                isFirst: false,
                isLoading: true,
                errMsg: '',
                users: []
            })

            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response => {
                    console.log('请求成功，返回值为：', response.data.items)
                    this.$bus.$emit('getUsers', {
                        isLoading: true,
                        errMsg: '',
                        users: response.data.items
                    })
                },
                error => {
                    console.log('请求失败，失败原因：', error.message)
                    this.$bus.$emit('getUsers', {
                        isLoading: false,
                        errMsg: error.message,
                        users: []
                    })
                }
            )
        }
    }
}
</script>
