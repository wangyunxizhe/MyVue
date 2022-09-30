<template>
<div class="app">
    <h3>APP组件</h3>
    <Suspense>
        <template v-slot:default>
            <Child />
        </template>
        <!-- 当<template v-slot:default>中的内容展示不出来的时候，就展示<template v-slot:fallback>中的内容 -->
        <template v-slot:fallback>
            <h3>稍等，加载中。。。</h3>
        </template>
    </Suspense>
</div>
</template>

<script>
//静态引入(当网速不佳时，App组件会等待Child组件，再共同显示)
import Child from './components/Child.vue'

//异步引入(当网速不佳时，Child组件的读取不会影响App组件的显示)
import {
    defineAsyncComponent
} from 'vue'
const Child = defineAsyncComponent(() => import('./components/Child.vue'))

export default {
    name: 'App',
    components: {
        Child
    }
}
</script>

<style>
.app {
    background-color: gray;
    padding: 10px;
}
</style>
