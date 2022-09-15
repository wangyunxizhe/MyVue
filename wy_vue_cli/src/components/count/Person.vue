<!-- 用于演示共享“求和案例” 章节中的数据 -->
<template>
<div>
    <h3 style="color:red">CountVuex组件的求和为：{{sum}}</h3>
    <h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
    <input type="text" placeholder="输入名字" v-model="name">
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
</div>
</template>

<script>
import {
    nanoid
} from 'nanoid'

export default {
    name: 'Person',
    data() {
        return {
            name: ''
        }
    },
    computed: {
        personList() {
            // return this.$store.state.personList
            //加入“模块化管理”后改为
            return this.$store.state.share.personList
        },
        sum() {
            // return this.$store.state.sum
            //加入“模块化管理”后改为
            return this.$store.state.count.sum
        },
        firstPersonName() {
            //注意这里的写法（share/firstPersonName）
            return this.$store.getters['share/firstPersonName']
        }
    },
    methods: {
        add() {
            const p = {
                id: nanoid(),
                name: this.name
            }
            // this.$store.commit('ADD_PERSON', p)
            //加入“模块化管理”后改为，注意这里的写法（share/ADD_PERSON）
            this.$store.commit('share/ADD_PERSON', p)
            this.name = ''
        },
        addWang() {
            const p = {
                id: nanoid(),
                name: this.name
            }
            this.$store.dispatch('share/addPersonWang', p)
            this.name = ''
        }
    }
}
</script>

<style>

</style>
