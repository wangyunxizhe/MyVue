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

<style scoped>
/*组件的样式*/
/*
注意：3个组件中的样式最终会在页面上汇总到一起。
思考：如果class类名冲突了会怎样？
结论：如果类名冲突，则看App.vue中对组件的注册顺序，以后注册的样式class类为准

推荐解决方案：scoped样式，一般来说，在实际工作中scoped不会写在App.vue中，因为App.vue都需要应用在全局
*/
.demo {
    background-color: orange;
}
</style>
