<!-- 
    自定义事件章节：
        Student组件用于演示使用“自定义事件”，将子组件中的数据传递到父组件中的写法
 -->
<template>
<div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生姓名传递给父组件</button>
    <button @click="unbind">解绑diy事件</button>
    <button @click="death">销毁当前Student组件的实例(vc)</button>
</div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: "张三",
            sex: "男"
        }
    },
    methods: {
        sendStudentName() {
            //$emit()：参数1--需要触发的事件名，参数2--事件需要的入参数据
            this.$emit('diy', this.name)
        },
        unbind() {
            //该写法只适用解绑一个自定义事件
            this.$off('diy')
            //解绑多个自定义事件
            // this.$off(['diy','diy2','diy3'])
            //解绑所有自定义事件
            // this.$off()
        },
        death() {
            //直接销毁当前Student组件的实例，销毁后所有Student实例的自定义事件都会失效
            this.$destroy()
        }
    }
}
</script>

<style scoped>
.student {
    background-color: blue;
    padding: 5px;
    margin-top: 30px;
}
</style>
