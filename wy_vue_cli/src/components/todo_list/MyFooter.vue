<template>
<div class="todo-footer" v-show="total">
    <label>
        <!-- checkAll 的写法一 -->
        <input type="checkbox" :checked="isAll" @change="checkAll" />
        <!-- checkAll 的写法二（使用完整写法的计算属性实现） -->
        <input type="checkbox" v-model="isAll" />
    </label>
    <span>
        <span>已完成{{doneTotal}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
</div>
</template>

<script>
export default {
    name: 'MyFooter',
    props: ['todos', 'checkAllTodo', 'clearAllTodo'],
    computed: {
        total() {
            return this.todos.length
        },
        doneTotal() {
            //reduce函数：第二个参数代表统计的初始值
            return this.todos.reduce((pre, todo) => {
                //reduce内部函数：pre==上一次统计的值，todo==当前的todo对象
                return pre + (todo.done ? 1 : 0)
            }, 0)
        },
        isAll() {
            //当 已完成 = 全部 时，底部checkbox选中
            return this.doneTotal === this.total && this.total > 0
        }
        //checkAll 的写法二：使用计算属性完整写法实现
        /* isAll: {
            get() {
                return this.doneTotal === this.total && this.total > 0
            },
            set(val) {
                this.checkAllTodo(val)
            }
        } */
    },
    methods: {
        //checkAll 的写法一：使用event事件对象获取是否选中
        checkAll(e) {
            this.checkAllTodo(e.target.checked)
        },
        clearAll() {
            this.clearAllTodo()
        }
    }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>
