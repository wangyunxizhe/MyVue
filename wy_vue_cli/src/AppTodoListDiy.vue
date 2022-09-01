<!-- 
    用于汇总所有“自定义事件”章节的相关组件
    组件的自定义事件：
        1，一种组件间的通信方式，适用于：子组件 ===> 父组件
        2，使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中，如getStudentName方法）
 -->
<template>
<div>
    <h1 class="app">{{msg}}，学生姓名是：{{sname}}</h1>
    <!-- 不使用“自定义事件”，通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（写法1：使用@或v-on，写法更简洁（优先使用）） -->
    <Student @diy="getStudentName" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（写法2：使用ref，灵活性更强） -->
    <!-- tips:@click.native 加上修饰符.native后click才会作为原生DOM事件去解析，否则一样会作为自定义事件解析 -->
    <!-- <Student ref="student" @click.native="show" /> -->
</div>
</template>

<script>
// 引入组件
import School from './components/todo_list_diy/School.vue'
import Student from './components/todo_list_diy/Student.vue'

//vc实例对象
export default {
    name: "AppTodoListDiy",
    data() {
        return {
            msg: "欢迎！！！",
            sname: ''
        }
    },
    components: {
        School: School,
        Student: Student
    },
    methods: {
        getSchoolName(value) {
            console.log("AppTodoListDiy 收到了学校名：", value)
        },
        getStudentName(name) {
            console.log("AppTodoListDiy 收到了学生姓名：", name)
            this.sname = name
        },
        show() {
            alert(123)
        }
    },
    mounted() {
        //写法2：使用挂载（支持有延迟加载的场景下使用）
        // this.$refs.student.$on('diy', this.getStudentName)

        /* setTimeout(() => {
            this.$refs.student.$on('diy', this.getStudentName)
        }, 3000) */
    }
}
</script>

<style>
.app {
    background-color: aquamarine;
    padding: 5px;
}
</style>
