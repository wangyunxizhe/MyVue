<template>
<h1>一个人的信息</h1>
<h2>姓名：{{name}}</h2>
<h2>年龄：{{age}}</h2>
<h3>工作种类：{{job.type}}</h3>
<h3>薪水：{{job.salary}}</h3>
<h3>单位：{{ent.name}}</h3>
<h3>地址：{{ent.addr}}</h3>
<h3>爱好：{{hobby}}</h3>
<button @click="changeInfo">更新信息</button>
</template>

<script>
import {
    ref,
    reactive
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
        //reactive函数只能处理对象类型
        let ent = reactive({
            name: '研究院',
            addr: '南邮'
        })
        let hobby = reactive(['抽烟', '喝酒', '烫头'])

        //方法
        function changeInfo() {
            name.value = '李四'
            age.value = 48
            //ref函数取值方式
            job.value.type = 'UI'
            job.value.salary = '40K'
            //reactive函数取值不再需要多一层 .value
            ent.name = 'ABC'
            ent.addr = '鼓楼'
            //可以直接通过数组的下标进行操作
            hobby[0] = '学习'
        }

        //返回一个对象（常用）
        return {
            name,
            age,
            job,
            ent,
            hobby,
            changeInfo
        }
    }
}
</script>
