<!-- 
    路由组件Detail，路由组件通常放在“pages”文件夹中（规范）
    “路由的query参数”章节，在Message组件中被触发
 -->
<template>
<ul>
    <li>消息编号：{{$route.query.id}}</li>
    <li>消息标题：{{$route.query.title}}</li>
    <li>a:{{a}}</li>
    <li>b:{{b}}</li>
</ul>
</template>

<script>
export default {
    name: 'Detail',
    props: ['a', 'b'],
    mounted() {
        //通过观察控制台，当Detail组件被挂载时，$route会将query查询字符串的内容带过来
        console.log(this.$route)
    }
}
</script>
