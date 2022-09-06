<template>
<div>
    <!-- 动画效果章节，与Cat的区别：着重“过度效果” -->
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- transition只能包裹一个元素，transition-group可以包裹多个元素。注意：被包裹的元素要增加一个key的属性，并各自有唯一的赋值，否则报错 -->
    <transition-group name="hi" appear>
        <h1 v-show="isShow" key="1">猫咪2</h1>
        <h1 v-show="isShow" key="2">老猫咪2</h1>
    </transition-group>
</div>
</template>

<script>
export default {
    name: "Cat2",
    data() {
        return {
            isShow: true
        }
    }
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
/* 进入的起点、离开的终点 */
.hi-enter,.hi-leave-to {
    transform: translateX(-100%);
}

/* 进入的终点、离开的起点 */
.hi-enter-to,.hi-leave {
    transform: translateX(0px);
}

/* 过度效果写在这里 */
.hi-enter-active,.hi-leave-active {
    transition: 0.5s linear;
}
</style>
