<template>
<div class="son">
    <h3>Son组件（孙组件），{{car.name}}---{{car.price}}</h3>
</div>
</template>

<script>
import {
    inject
} from 'vue'

export default {
    name: 'Son',
    setup() {
        //接收App组件通过provide函数传过来的“car”
        let car = inject('car')
        console.log('**Son**', car, '****')

        return {
            car
        }
    }
}
</script>

<style>
.son {
    background-color: orange;
    padding: 10px;
}
</style>
