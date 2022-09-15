<!-- “求和案例” 章节 -- 一、使用纯vue的方式达到目的 -->

<template>
<div>
    <h1>纯vue版--当前求和为：{{sum}}</h1>
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
    name: 'CountVue',
    data() {
        return {
            //用户选择的数字
            num: 1,
            //当前的和
            sum: 0
        }
    },
    methods: {
        add() {
            this.sum += this.num
        },
        down() {
            this.sum -= this.num
        },
        addOdd() {
            if (this.sum % 2) {
                this.sum += this.num
            }
        },
        addWait() {
            setTimeout(() => {
                this.sum += this.num
            }, 500);
        }
    }
}
</script>

<style scoped>
button {
    margin-left: 5px;
}
</style>
