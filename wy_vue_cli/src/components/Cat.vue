<template>
<div>
    <h2 @click="showName">名字：{{ name }}</h2>
    <h2>性别：{{ sex }}</h2>
    <button @click="test">点击测试插件中的hello方法</button>
</div>
</template>

<script>
//引入一个“mixin”
import {
    hunhe
} from "../mixin";

export default {
    name: "Cat",
    data() {
        return {
            name: '大T子',
            sex: '母'
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
    //tips：如果mixin中出现了与组件中同名的方法、属性，以组件中的为准
    mixins: [hunhe]
}
</script>
