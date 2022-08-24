<!-- 没有样式的组件 -->

<template>
<!-- 组件的结构 -->
<div>
    <h1>{{msg}}</h1>
    <h2>姓名：{{ name }}</h2>
    <h2>性别：{{ sex }}</h2>
    <h2>年龄：{{ myAge }}</h2>
    <button @click="showName">点击提示姓名</button>
    <button @click="updateAge">点击修改年龄</button>
</div>
</template>

<script>
//引入一个“mixin”
import {
    hunhe
} from "../mixin";

//组件交互相关的代码
export default {
    //最好跟文件同名
    name: 'Emp',
    data() {
        return {
            msg: "我是一个帅气的学生",
            // tips：如果data中的属性和props中的属性重名了，props中的优先级更高（可利用这个特性，但不要这样写）
            //因为props的优先级更高，所以data中的myAge在读age时，age属性就已经存在了，可以顺利读到值
            myAge: this.age
        }
    },
    methods: {
        //当Emp,Ent,Cat组件中都有showName函数时，可使用“mixin”特性
        /* showName() {
            alert(this.name)
        }, */
        updateAge() {
            this.myAge++
        }
    },
    //props属性
    //简单接收写法（不限制属性的类型）
    // props: ['name', 'sex', 'age']

    //写法2：接收的同时对数据进行类型限制
    /* props: {
        name: String,
        sex: String,
        age: Number
    } */

    //写法3：接收的同时对数据进行类型限制 + 默认值的指定 + 必要性的限制
    props: {
        name: {
            type: String,
            required: true
        },
        sex: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            default: 99
        }
    },
    //使用mixins属性，将showName方法引入组件，不必在3个组件中重复编写了
    mixins: [hunhe]
}
</script>
