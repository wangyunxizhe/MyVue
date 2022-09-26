<template>
<h2>当前求和为：{{sum}}</h2>
<button @click="sum++">点击+1</button>
</template>

<script>
import {
    ref,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted
} from 'vue'

export default {
    name: 'Demo',
    setup() {
        let sum = ref(0)

        //通过组合式API的形式去使用生命周期钩子（与 配置项的形式 二选一即可）
        //setup() 相当于 beforeCreate 和 created
        //onBeforeMount ===> beforeMount
        //onMounted ===> mounted
        //onBeforeUpdate ===> beforeUpdate
        //onUpdated ===> updated
        //onBeforeUnmount ===> beforeUnmount
        //onUnmounted ===> unmounted
        onBeforeMount(() => {
            console.log('~~~onBeforeMount~~~')
        })
        onMounted(() => {
            console.log('~~~onMounted~~~')
        })
        onBeforeUpdate(() => {
            console.log('~~~onBeforeUpdate~~~')
        })
        onUpdated(() => {
            console.log('~~~onUpdated~~~')
        })
        onBeforeUnmount(() => {
            console.log('~~~onBeforeUnmount~~~')
        })
        onUnmounted(() => {
            console.log('~~~onUnmounted~~~')
        })

        return {
            sum
        }
    },
    //跟vue2中一样，通过配置项的形式使用生命周期钩子
    beforeCreate() {
        console.log('~~~beforeCreate~~~')
    },
    created() {
        console.log('~~~created~~~')
    },
    beforeMount() {
        console.log('~~~beforeMount~~~')
    },
    mounted() {
        console.log('~~~mounted~~~')
    },
    beforeUpdate() {
        console.log('~~~beforeUpdate~~~')
    },
    updated() {
        console.log('~~~updated~~~')
    },
    //vue3中加入的生命周期函数
    beforeUnmount() {
        console.log('~~~beforeUnmount~~~')
    },
    unmounted() {
        console.log('~~~unmounted~~~')
    }
}
</script>
