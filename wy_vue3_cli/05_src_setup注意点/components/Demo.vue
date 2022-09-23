<template>
<h1>一个人的信息</h1>
<h2>姓名：{{person.name}}</h2>
<h2>年龄：{{person.age}}</h2>
<button @click="test">触发Demo组件的hello事件(在App组件中)</button>
</template>

<script>
import {
    reactive
} from 'vue'

export default {
    name: 'Demo',
    //声明props后，setup的第一个入参才能有值
    props: ['msg', 'name'],
    //声明emits后，setup的第二个入参才能正常使用
    emits: ['hello'],
    beforeCreate() {
        console.log('~~~beforeCreate~~~')
    },
    setup(props, context) {
        console.log('~~~setup~~~', props, context)
        console.log(context.slots)
        let person = reactive({
            name: '张三',
            age: 18
        })

        function test() {
            context.emit('hello', 666)
        }

        return {
            person,
            test
        }
    }
}
</script>
