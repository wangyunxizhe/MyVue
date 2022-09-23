<template>
<h2>当前求和为：{{sum}}</h2>
<button @click="sum++">点击+1</button>
<hr>
<h2>当前的信息为：{{msg}}</h2>
<button @click="msg+='!'">修改信息</button>
<hr>
<h2>姓名：{{person.name}}</h2>
<h2>年龄：{{person.age}}</h2>
<h2>薪资：{{person.job.j1.salary}}</h2>
<button @click="person.name+='~'">修改姓名</button>
<button @click="person.age++">增长年龄</button>
<button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import {
    ref,
    reactive,
    watch
} from 'vue'

export default {
    name: 'Demo',
    //vue2中监视属性的写法
    /* watch: {
        //简写
        // sum(newVal, oldVal) {
        //     console.log('sum的值发生了变化', newVal, oldVal)
        // } 

        //完整写法
        sum: {
            //挂载完毕后立即执行一次
            immediate: true,
            //深度监视
            deep: true,
            handler(newVal, oldVal) {
                console.log('sum的值发生了变化', newVal, oldVal)
            }
        }
    }, */
    setup() {
        let sum = ref(0)
        let msg = ref('hello')
        let person = reactive({
            name: '张三',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        })

        //vue3监视属性
        //情况1：监视ref所定义的 一个 响应式数据
        watch(sum, (newVal, oldVal) => {
            console.log('情况1：sum的值发生了变化', newVal, oldVal)
        })

        //情况2：监视ref所定义的 多个 响应式数据
        watch([sum, msg], (newVal, oldVal) => {
            console.log('情况2：sum或msg的值发生了变化', newVal, oldVal)
        })

        /*
        情况3：监视reactive所定义的 一个 响应式数据的 全部属性。
        1，注意：此处无法正确的获取oldVal
        2，注意：强制开启了“深度监视”，导致deep:false配置无效
        */
        watch(person, (newVal, oldVal) => {
            console.log('情况3：person发生了变化', newVal, oldVal)
        }, {
            deep: false
        })

        //情况4：监视reactive所定义的 一个 响应式数据的 某个属性。
        watch(() => person.age, (newVal, oldVal) => {
            console.log('情况4：person.age发生了变化', newVal, oldVal)
        })

        //情况5：监视reactive所定义的 一个 响应式数据的 某些属性。
        watch([() => person.name, () => person.age], (newVal, oldVal) => {
            console.log('情况5：person的name或者age发生了变化', newVal, oldVal)
        })

        //特殊情况
        watch(() => person.job, (newVal, oldVal) => {
            console.log('特殊情况：person的job发生了变化', newVal, oldVal)
        }, {
            deep: true
        })

        return {
            sum,
            msg,
            person
        }
    }
}
</script>
