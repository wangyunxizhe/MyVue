<!-- 
    用于汇总所有关于 “todoList章节” 的组件。
    练习需要才这样写，正常工作中该层目录只会存在一个“App.vue”，用于管理所有的组件
-->

<template>
<div id="root">
    <div class="todo-container">
        <div class="todo-wrap">
            <!-- 将“addTodo函数”传给MyHeader组件 -->
            <MyHeader :addTodo="addTodo" />
            <!-- 将“todos数组”传给MyList组件 -->
            <MyList :todos="todos" :checkTodo="checkTodo" :delTodo="delTodo" />
            <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo" />
        </div>
    </div>
</div>
</template>

<script>
// 引入todoList章节相关组件
import MyHeader from './components/todo_list/MyHeader.vue'
import MyList from './components/todo_list/MyList.vue' //因为Item组件是List组件的子组件，所以这里只需引入List组件即可
import MyFooter from './components/todo_list/MyFooter.vue'

//vc实例对象
export default {
    name: "AppTodoList",
    components: {
        MyHeader: MyHeader,
        MyList: MyList,
        MyFooter: MyFooter
    },
    data() {
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
    },
    methods: {
        //函数作用：添加一个todo
        addTodo(todo) {
            console.log('AppTodoList组件收到了数据：', todo)
            //处理业务：将收到的todos单个对象，添加到todos数组头部中
            this.todos.unshift(todo)
        },
        //函数作用：勾选or取消勾选一个todo
        checkTodo(id) {
            this.todos.forEach((todo) => {
                if (todo.id === id) {
                    //将对应id todo对象的done值取反
                    todo.done = !todo.done
                }
            })
        },
        //函数作用：删除一个todo
        delTodo(id) {
            this.todos = this.todos.filter((todo) => {
                return todo.id !== id
            })
        },
        //函数作用：footer中的全选 or 取消全选
        checkAllTodo(done) {
            this.todos.forEach((todo) => {
                todo.done = done
            })
        },
        //函数作用：清除所有已经完成的todo
        clearAllTodo() {
            this.todos = this.todos.filter((todo) => {
                return !todo.done
            })
        }
    }
}
</script>

<style>
/*base*/
body {
    background: #fff;
}

.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;
}

.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>
