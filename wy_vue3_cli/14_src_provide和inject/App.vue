<template>
<div class="app">
    <h3>APP组件（祖组件），{{name}}---{{price}}</h3>
    <Child />
</div>
</template>

<script>
import {
    reactive,
    toRefs,
    provide
} from 'vue'
import Child from './components/Child.vue'

export default {
    name: 'App',
    components: {
        Child
    },
    setup() {
        let car = reactive({
            name: '奔驰',
            price: '40W'
        })

        //使用 provide函数 给自己的后代组件传递数据
        provide('car', car)

        return {
            ...(toRefs(car))
        }
    }
}
</script>

<style>
.app {
    background-color: gray;
    padding: 10px;
}
</style>
