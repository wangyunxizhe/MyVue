<template>
<li>
    <label>
        <input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)" />
        <span>{{todoObj.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDel(todoObj.id)">删除</button>
</li>
</template>

<script>
export default {
    name: 'MyItem',
    props: ['todoObj', 'checkTodo', 'delTodo'],
    methods: {
        //勾选 or 取消勾选
        handleCheck(id) {
            //通知AppTodoList组件，将对应id todo对象的done值取反
            //注意：checkTodo函数的来源是“AppTodoList组件”，再经过“MyList组件”传递到“MyItem组件”中
            this.checkTodo(id)
        },
        //删除
        handleDel(id) {
            if (confirm('确定删除吗？')) {
                //传递原理和 checkTodo 一样
                this.delTodo(id)
            }
        }
    }
}
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover {
    background-color: #ddd;
}

li:hover button {
    display: block;
}
</style>
