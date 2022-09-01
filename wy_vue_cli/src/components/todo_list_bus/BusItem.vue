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
    name: 'BusItem',
    props: ['todoObj'],
    methods: {
        handleCheck(id) {
            //使用 全局事件总线--$bus 完成checkTodo功能
            this.$bus.$emit('checkTodo', id)
        },
        //删除
        handleDel(id) {
            if (confirm('确定删除吗？')) {
                //使用 全局事件总线--$bus 完成delTodo功能
                this.$bus.$emit('delTodo', id)
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
