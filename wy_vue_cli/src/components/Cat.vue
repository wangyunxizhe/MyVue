<template>
<div>
    <!-- 动画效果章节 -->
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 将需要添加动画效果的内容用<transition>标签包裹，appear属性表示页面一加载就触发一次动画效果 -->
    <transition name="hi" appear>
        <h1 v-show="isShow">猫咪</h1>
    </transition>

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
            sex: '母',
            isShow: true
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

<style scoped>
h1 {
    background-color: orange;
}

/* 
vue动画效果 
注意：class的命名不是随意自定义的，要遵循vue的命名规范，否则不会被vue解析
*/
.hi-enter-active {
    animation: myCat 1s;
}

.hi-leave-active {
    animation: myCat 1s reverse;
}

@keyframes myCat {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0px);
    }
}
</style>
