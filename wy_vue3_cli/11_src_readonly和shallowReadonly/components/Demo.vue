<template>
<h2>当前求和为：{{sum}}</h2>
<button @click="sum++">点击+1</button>
<hr>
<h2>姓名：{{name}}</h2>
<h2>年龄：{{age}}</h2>
<h2>薪资：{{job.j1.salary}}</h2>
<button @click="name+='~'">修改姓名</button>
<button @click="age++">增长年龄</button>
<button @click="salary++">涨薪</button>
</template>

<script>
import {
    ref,
    reactive,
    toRefs,
    readonly,
    shallowReadonly
} from 'vue'

export default {
    name: 'Demo',
    setup() {
        let sum = ref(0)

        let person = reactive({
            name: '张三',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        })

        //应用场景：都是在不希望数据被修改时使用
        //readonly() ===> 将person的数据保护起来，无法被修改（深只读）
        // person = readonly(person)
        //shallowReadonly() ===> 与readonly功能类似（浅只读）
        person = shallowReadonly(person)

        return {
            sum,
            ...toRefs(person)
        }
    }
}
</script>
