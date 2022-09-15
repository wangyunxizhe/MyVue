<!-- “求和案例” 章节 -- 二、使用vuex的方式达到目的 -->

<template>
<div>
    <!-- <h1>vuex版--当前求和为：{{$store.state.sum}}</h1> -->
    <!--  写成“计算属性”[或结合mapState]后可以不用再写成$store.state.sum（ent，subject也可以使用同样的方式） -->
    <h1>vuex版--当前求和为：{{he}}</h1>
    <!--  写成“计算属性”[或结合mapGetters]后可以不用再写成$store.getters.doubleSum（bigSum也可以使用同样的方式） -->
    <h1>vuex版--当前求和放大2倍后为：{{shuangBei}}</h1>
    <h1>vuex版--当前求和放大10倍后为：{{$store.getters.bigSum}}</h1>
    <h1>vuex版--在{{danWei}}，岗位{{$store.state.subject}}</h1>
    <!-- v-model.number  将value中的值强转成数字类型 -->
    <select v-model.number="num">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="down">-</button>

    <!-- 适配methods==>对应的写法三 -->
    <!-- <button @click="add(num)">+</button>
    <button @click="down(num)">-</button> -->

    <button @click="addOdd">当前为奇数再加</button>
    <button @click="addWait">等一等再加</button>

    <!-- 适配methods==>对应的写法二 -->
    <!-- <button @click="addOdd(num)">当前为奇数再加</button>
    <button @click="addWait(num)">等一等再加</button> -->
</div>
</template>

<script>
import {
    mapActions,
    mapGetters,
    mapMutations,
    mapState
} from 'vuex'
export default {
    name: 'CountVuex',
    data() {
        return {
            //用户选择的数字
            num: 1
        }
    },
    methods: {
        //写法一，二都属于程序员自己手动写方法，方法中去调用commit
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

        //写法三（在写法二的基础上继续优化）：使用mapMutations，对象写法
        //和mapState一样也有“数组写法”，同样要求method名与mutations中的方法名一模一样，要么都叫add，要么都叫JIA
        /* ...mapMutations({
            add: 'JIA',
            down: 'JIAN'
        }), */

        /* **************************************************************** */
        //写法一：自己手动写方法，方法中去调用dispatch
        /* addOdd() {
            //与 vue版 区别：判断逻辑不放在vc中
            this.$store.dispatch('jiaOdd', this.num)
        },
        addWait() {
            //与 vue版 区别：定时器不放在vc中
            this.$store.dispatch('jiaWait', this.num)
        } */

        //写法二：使用mapActions，对象写法，也有数组写法，命名要求一样
        ...mapActions({
            addOdd: 'jiaOdd',
            addWait: 'jiaWait'
        })
    },
    computed: {
        //写法一：靠程序员自己手写“计算属性”，完成h5元素中的赋值
        /* he() {
            return this.$store.state.sum
        },
        danWei() {
            return this.$store.state.ent
        } */

        //写法二（对象写法，推荐）：使用mapState实现写法一的功能
        ...mapState({
            he: 'sum',
            danWei: 'ent'
        }),

        //写法三（数组写法，方法二熟练后推荐）：还是使用mapState
        //vue会自动解析并生成名为'sum','ent'的“计算属性”方法，方法内会自动引用$store.state中的'sum','ent'
        // ...mapState(['sum','ent'])

        /* **************************************************************** */

        //写法一
        /* shuangBei() {
            return this.$store.getters.doubleSum
        } */

        //写法二：使用mapGetters
        ...mapGetters({
            shuangBei: 'doubleSum'
        })

        //写法三
        // ...mapGetters(['doubleSum'])
    },
    mounted() {

    }
}
</script>

<style scoped>
button {
    margin-left: 5px;
}
</style>
