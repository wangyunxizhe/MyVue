<template>
<!-- Vue3中不再需要一个顶级元素把其他元素都包裹起来了 -->
<h1>一个人的信息</h1>
<h2>姓名：{{name}}</h2>
<h2>年龄：{{age}}</h2>
<h2>性别：{{sex}}</h2>
<button @click="sayHi">说话(Vue3)</button>
<br>
<br>
<button @click="sayWelcom">说话(Vue2)</button>
</template>

<script>
/* import {
    h
} from 'vue' */

export default {
    name: 'App',
    //vue3中的属性
    setup() {
        //数据
        let name = '张三'
        let age = 18

        //方法
        function sayHi() {
            alert(`我叫${name}，我${age}岁了，Hi`)
        }

        //返回一个对象（常用）
        return {
            name,
            age,
            sayHi
        }

        //返回一个函数（渲染函数）
        // return () => h('h1', 'Vue3')
    },
    //Vue2中的写法同样兼容（不建议混写，会出问题）
    data() {
        return {
            sex: '男'
        }
    },
    methods: {
        sayWelcom() {
          alert('欢迎')
        }
    }
}
</script>
