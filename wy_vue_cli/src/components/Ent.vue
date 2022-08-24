<!-- 一个标准的组件 -->

<template>
<!-- 组件的结构 -->
<div class="demo">
    <h2>单位名称：{{ name }}</h2>
    <h2>单位地址：{{ addr }}</h2>
    <button @click="showName">点击提示单位名</button>
    <button @click="test">点击测试插件中的hello方法</button>
</div>
</template>

<script>
//引入一个“mixin”
import {
    hunhe
} from "../mixin";

//组件交互相关的代码
export default {
    //最好跟文件同名
    name: 'Ent',
    data() {
        return {
            name: "研究院",
            addr: "南京鼓楼"
        }
    },
    methods: {
        //当Emp,Ent,Cat组件中都有showName函数时，可使用“mixin”特性
        /* showName() {
            alert(this.name)
        } */
        //调用插件中的hello方法
        test() {
            this.hello()
        }
    },
    //使用mixins属性，将showName方法引入组件，不必在3个组件中重复编写了
    mixins: [hunhe]
}
</script>

<style>
/*组件的样式*/
.demo {
    background-color: orange;
}
</style>
