<template>
<li>
    <label>
        <input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)" />
        <span v-show="!todoObj.isEdit">{{todoObj.title}}</span>
        <input type="text" v-show="todoObj.isEdit" :value="todoObj.title" @blur="handleBlur(todoObj,$event)" ref="inputTitle">
    </label>
    <button class="btn btn-danger" @click="handleDel(todoObj.id)">删除</button>
    <button v-show="!todoObj.isEdit" class="btn btn-edit" @click="handleEdit(todoObj)">编辑</button>
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
        },
        //编辑
        handleEdit(todo) {
            //如果todo对象中已经含有isEdit属性（不是第一次点击“编辑”按钮了）那么就不用使用$set函数绑定了
            if (todo.hasOwnProperty('isEdit')) {
                todo.isEdit = true
            } else {
                this.$set(todo, 'isEdit', true)
            }
            //点击编辑时要获取input框的焦点
            //！！！重要！！！$nextTick：当模板重新解析后再去调用函数体里的逻辑。原因：此时input框还未在页面中生成
            this.$nextTick(function () {
                this.$refs.inputTitle.focus()
            })
        },
        //编辑-input框的失焦事件
        handleBlur(todo, e) {
            //此时todo对象中必然已经有了isEdit属性，所以可以不用再使用$set函数
            todo.isEdit = false
            if (!e.target.value.trim()) {
                return alert('输入不能为空')
            }
            //修改todo list中的内容
            this.$bus.$emit('updateTodo', todo.id, e.target.value)
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
