<template>
<div>
    <!-- 动画效果章节，引入第3方动画库 -->
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- name中填写第3方动画库中的名字，进入/离开的动画效果，可以按喜好配置第3方库中的class名字 -->
    <transition-group appear name="animate_animated animate_bounce" enter-active-class="animate_swing" leave-active-class="animate_backOutUp">
        <h1 v-show="isShow" key="1">猫咪3</h1>
        <h1 v-show="isShow" key="2">老猫咪3</h1>
    </transition-group>
</div>
</template>

<script>
import 'animate.css'

export default {
    name: "Cat3",
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
</style>
