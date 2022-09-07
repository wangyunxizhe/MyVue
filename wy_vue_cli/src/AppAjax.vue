<!-- 
    用于演示 “Vue发送Ajax章节” 
-->

<template>
<div>
    <button @click="getMockA">获取假数据A</button>
    <button @click="getMockB">获取假数据B</button>
</div>
</template>

<script>
// 安装完毕后，引入axios库发送ajax请求
import axios from 'axios'

export default {
    name: "AppAjax",
    methods: {
        getMockA() {
            axios.get('代理服务器的URL(http://localhost:8080),代理服务器配置在vue.config.js中').then(
                //成功的回调
                response => {
                    console.log('请求成功了，返回值为：', response.data)
                },
                //失败的回调
                error => {
                    console.log('请求失败了，失败的原因是：', error.message)
                }
            )
        }
    }
}
</script>
