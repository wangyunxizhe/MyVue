<!-- 
    自定义事件章节：
        School组件用于演示不使用“自定义事件”，正常子组件传递数据到父组件中的写法
 -->
<template>
<div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ addr }}</h2>
    <button @click="sendSchoolName">把学校名称传递给父组件</button>
</div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name: "南京大学",
            addr: "鼓楼"
        }
    },
    props: ['getSchoolName'],
    methods: {
        sendSchoolName() {
            this.getSchoolName(this.name)
        }
    }
}
</script>

<style scoped>
.school {
    background-color: orange;
    padding: 5px;
}
</style>
