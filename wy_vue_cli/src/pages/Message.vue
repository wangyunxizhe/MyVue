<!-- 
    路由组件Message，路由组件通常放在“pages”文件夹中（规范）
    “嵌套路由”章节
 -->
<template>
<div>
    <ul>
        <li>
            <a href="/message1">message001</a>&nbsp;&nbsp;
        </li>
        <li>
            <a href="/message2">message002</a>&nbsp;&nbsp;
        </li>
        <li>
            <a href="/message/3">message003</a>&nbsp;&nbsp;
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'Message'
}
</script>

<style>

</style>
