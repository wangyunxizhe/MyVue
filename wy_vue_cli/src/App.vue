<!-- 用于汇总所有的组件 -->

<template>
<div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点击输出上方DOM元素</button>
    <img src="./assets/logo.png" alt="logo">
    <Ent ref="ent"></Ent>
    <!-- 利用Emp组件中的props属性，实现动态赋值，达到组件复用的目的 -->
    <Emp name="wyuan" :age="18" sex="男" />
    <hr>
    <!-- :age解释：因为age需要作为数字型处理，如果不用v-bind让vue来处理的话，原生解析方式都会将值当作字符串处理 -->
    <Emp name="李四" :age="16" sex="女" />
</div>
</template>

<script>
// 引入组件
import Ent from './components/Ent.vue'
import Emp from './components/Emp.vue'

//vc实例对象
export default {
    name: "App",
    data() {
        return {
            msg: "欢迎！！！"
        }
    },
    components: {
        Ent: Ent,
        Emp: Emp
    },
    methods: {
        showDOM() {
            //在vc中获取DOM元素的方式（ref属性）
            console.log(this.$refs.title) //真实的DOM元素
            console.log(this.$refs.btn) //真实的DOM元素
            console.log(this.$refs.ent) //Ent组件的实例对象（Ent的vc）
        }
    }
}
</script>

<style>

</style>
