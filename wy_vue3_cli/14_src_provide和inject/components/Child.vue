<template>
<div class="child">
    <h3>Child组件（子组件）</h3>
    <Son />
</div>
</template>

<script>
import {
    inject
} from 'vue'
import Son from './Son.vue'

export default {
    name: 'Child',
    components: {
        Son
    },
    setup() {
        let x = inject('car')
        console.log('**Child**', x, '****')
    }
}
</script>

<style>
.child {
    background-color: skyblue;
    padding: 10px;
}
</style>
