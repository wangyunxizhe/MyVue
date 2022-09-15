<!-- 
    用于演示 “求和案例” 章节
-->

<template>
<div>
    <CountVue />
    <CountVuex />
</div>
</template>

<script>
import CountVue from './components/count/CountVue.vue'
import CountVuex from './components/count/CountVuex.vue'

export default {
    name: "AppCount",
    components: {
        CountVue: CountVue,
        CountVuex: CountVuex
    }
}
</script>
