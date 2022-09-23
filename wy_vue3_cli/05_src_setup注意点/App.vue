<template>
<Demo @hello="sayHi" msg="hi" name="wyuan">
    <template v-slot:abc>
        <span>研究院1</span>
    </template>
    <template v-slot:def>
        <span>研究院2</span>
    </template>
</Demo>
</template>

<script>
import Demo from './components/Demo.vue'
export default {
    name: 'App',
    components: {
        Demo: Demo
    },
    setup() {
        function sayHi(value) {
            alert(`触发了hello事件，收到的参数是${value}`)
        }

        return {
            sayHi
        }
    }
}
</script>
