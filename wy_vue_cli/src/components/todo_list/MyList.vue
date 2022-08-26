<template>
<ul class="todo-main">
    <!-- todoObj，checkTodo传给MyItem组件去处理 -->
    <MyItem v-for="todo in todos" :key="todo.id" :todoObj="todo" :checkTodo="checkTodo" :delTodo="delTodo" />
</ul>
</template>

<script scoped>
//引入子组件 MyItem
import MyItem from './MyItem.vue'

export default {
    name: 'MyList',
    components: {
        MyItem: MyItem
    },
    //第一步，为了完成todos中对象的传递，现阶段只能将todos迁往“AppTodoList.vue”中（todoList章节所有组件的父类）
    /* data() {
        return {
            todos: [{
                    id: "001",
                    title: "抽烟",
                    done: false
                },
                {
                    id: "002",
                    title: "喝酒",
                    done: true
                },
                {
                    id: "003",
                    title: "开车",
                    done: true
                }
            ]
        }
    } */
    //第二步：接收从“AppTodoList.vue”传来的“todos数组”
    //注意，后面两个参数是List帮忙传递给Item组件的，实际使用者是Item组件
    props: ['todos', 'checkTodo', 'delTodo']
}
</script>

<style scoped>
/*main*/
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>
