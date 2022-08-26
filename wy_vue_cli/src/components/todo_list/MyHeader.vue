<template>
<div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" />
</div>
</template>

<script>
//引入nanoid，用于生成唯一id
import {
    nanoid
} from 'nanoid'

export default {
    name: 'MyHeader',
    //接收从“AppTodoList.vue”传来的“addTodo函数”
    props: ['addTodo'],
    methods: {
        add(e) {
            //打印用户的输入
            console.log(e.target.value)
            //将用户输入包装成 MyList 组件中的 todo 对象
            const todoObj = {
                id: nanoid(),
                title: e.target.value,
                done: false //默认false
            }
            //通过 addTodo函数 把 todoObj 传递到 todos数组 中
            this.addTodo(todoObj)
            //顺便清空输入框中的内容
            e.target.value = ''
        }
    }
}
</script>

<style scoped>
/*header*/
.todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}

.todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
