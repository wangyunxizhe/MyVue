<template>
<h2>姓名：{{name}}</h2>
<h2>年龄：{{age}}</h2>
<h2>薪资：{{salary}}</h2>

<!-- 使用 toRefs 时，需要点到需要的那一层 -->
<!-- <h2>薪资：{{job.j1.salary}}</h2> -->

<button @click="name+='~'">修改姓名</button>
<button @click="age++">增长年龄</button>
<button @click="salary++">涨薪</button>

<!-- 使用 toRefs 时，需要点到需要的那一层 -->
<!-- <button @click="job.j1.salary++">涨薪</button> -->
</template>

<script>
import {
    reactive,
    toRef,
    toRefs
} from 'vue'

export default {
    name: 'Demo',
    setup() {
        let person = reactive({
            name: '张三',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        })

        const name1 = person.name
        console.log('####', name1)

        //toRef 处理某个对象中的 某一个 属性值
        const name2 = toRef(person, 'name')
        console.log('@@@@', name2)

        const x = toRefs(person)
        console.log('####', x)

        return {
            name: toRef(person, 'name'),
            age: toRef(person, 'age'),
            salary: toRef(person.job.j1, 'salary')

            // ...toRefs(person)
        }
    }
}
</script>
