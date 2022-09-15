<!-- “求和案例” 章节 -- 二、使用vuex的方式达到目的 -->

<template>
<div>
    <h1>vuex版--当前求和为：{{$store.state.sum}}</h1>
    <h1>vuex版--当前求和放大10倍后为：{{$store.getters.bigSum}}</h1>
    <!-- v-model.number  将value中的值强转成数字类型 -->
    <select v-model.number="num">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="down">-</button>
    <button @click="addOdd">当前为奇数再加</button>
    <button @click="addWait">等一等再加</button>
</div>
</template>

<script>
export default {
    name: 'CountVuex',
    data() {
        return {
            //用户选择的数字
            num: 1
        }
    },
    methods: {
        add() {
            //写法一：向vuex的store--dispatch中传递信息（触发“jia”这个action，而参数就是vc中的num）
            // this.$store.dispatch('jia', this.num)

            //写法二（推荐）：直接通过commit方法，调用index.js(store)中的mutations
            this.$store.commit('JIA', this.num)
        },
        down() {
            //写法一：与触发“jia”同理
            // this.$store.dispatch('jian', this.num)

            //写法二（推荐）：直接通过commit方法，调用index.js(store)中的mutations
            this.$store.commit('JIAN', this.num)
        },
        addOdd() {
            //与 vue版 区别：判断逻辑不放在vc中
            this.$store.dispatch('jiaOdd', this.num)
        },
        addWait() {
            //与 vue版 区别：定时器不放在vc中
            this.$store.dispatch('jiaWait', this.num)
        }
    }
}
</script>

<style scoped>
button {
    margin-left: 5px;
}
</style>
