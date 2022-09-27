<template>
<h2>当前求和为：{{sum}}</h2>
<button @click="sum++">点击+1</button>
<hr>
<h2>姓名：{{name}}</h2>
<h2>年龄：{{age}}</h2>
<h2>薪资：{{job.j1.salary}}</h2>
<h2 v-show="person.car">座驾信息：{{person.car}}</h2>
<button @click="name+='~'">修改姓名</button>
<button @click="age++">增长年龄</button>
<button @click="salary++">涨薪</button>
<button @click="showRawPerson">输出最原始的person</button>
<button @click="addCar">给人添加一台车</button>
<button @click="person.car.name += '@'">换车名</button>
<button @click="changePrice">换价格</button>
</template>

<script>
import {
    ref,
    reactive,
    toRefs,
    toRaw,
    markRaw
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

        function showRawPerson() {
            //将person还原成最初的样子（包括数据格式，不再是响应式数据，成了最原始的json）
            //只对reactive封装的响应式数据可以起到还原的效果，对ref封装的无效
            const p = toRaw(person)
            console.log(p)
        }

        function addCar() {
            let car = {
                name: '奔驰',
                price: 40
            }
            // person.car = car
            //car被markRaw包装过后将不再是响应式的数据，将不再被Proxy代理，任何修改都不会被与vue交互
            person.car = markRaw(car)
        }

        function changePrice() {
            person.car.price++
            console.log(person.car.price)
        }

        return {
            sum,
            ...toRefs(person),
            showRawPerson,
            addCar,
            person,
            changePrice
        }
    }
}
</script>
