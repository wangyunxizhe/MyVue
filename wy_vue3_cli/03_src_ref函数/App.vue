<template>
<h1>一个人的信息</h1>
<h2>姓名：{{name}}</h2>
<h2>年龄：{{age}}</h2>
<h3>工作种类：{{job.type}}</h3>
<h3>薪水：{{job.salary}}</h3>
<button @click="changeInfo">更新信息</button>
</template>

<script>
import {
    ref
} from 'vue'

export default {
    name: 'App',
    //vue3中的属性
    setup() {
        //ref函数处理基本类型
        let name = ref('张三')
        let age = ref(18)
        //ref函数处理对象类型
        let job = ref({
            type: '后端',
            salary: '30K'
        })

        //方法
        function changeInfo() {
            name.value = '李四'
            age.value = 48
            job.value.type = 'UI'
            job.value.salary = '40K'
        }

        //返回一个对象（常用）
        return {
            name,
            age,
            job,
            changeInfo
        }
    }
}
</script>
