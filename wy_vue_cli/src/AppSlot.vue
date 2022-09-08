<!-- 
    用于演示 “Vue 插槽章节” 
-->

<template>
<div>
    <!-- <SlotDefaultCategory title="美食" :listData="foods" />
    <SlotDefaultCategory title="游戏" :listData="games" />
    <SlotDefaultCategory title="电影" :listData="films" /> -->

    <h2>默认插槽 使用样例</h2>
    <div class="demo">
        <SlotDefaultCategory title="美食" :listData="foods">
            <img src="./assets/srJlq0.jpg" alt="">
        </SlotDefaultCategory>
        <SlotDefaultCategory title="游戏">
            <ul>
                <li v-for="(g,index) in games" :key="index">{{g}}</li>
            </ul>
        </SlotDefaultCategory>
        <SlotDefaultCategory title="电影" :listData="films">
            <video controls src=""></video>
        </SlotDefaultCategory>
    </div>

    <h2>具名插槽 使用样例</h2>
    <div class="demo">
        <SlotNamedCategory title="美食" :listData="foods">
            <img slot="center" src="./assets/srJlq0.jpg" alt="">
            <a slot="footer" href="http://www.baidu.com">更多美食</a>
        </SlotNamedCategory>
        <SlotNamedCategory title="游戏">
            <ul slot="center">
                <li v-for="(g,index) in games" :key="index">{{g}}</li>
            </ul>
            <div class="foot" slot="footer">
                <a href="http://www.baidu.com">单机游戏</a>
                <a href="http://www.baidu.com">网络游戏</a>
            </div>
        </SlotNamedCategory>
        <SlotNamedCategory title="电影" :listData="films">
            <video slot="center" controls src=""></video>
            <!-- 如果使用了<template>标签，还可以使用如下写法使用slot功能 -->
            <template v-slot:footer>
                <div class="foot">
                    <a href="http://www.baidu.com">经典</a>
                    <a href="http://www.baidu.com">热门</a>
                    <a href="http://www.baidu.com">推荐</a>
                </div>
                <h4>欢迎前来观影</h4>
            </template>
        </SlotNamedCategory>
    </div>

    <h2>作用域插槽 使用样例</h2>
    <div class="demo">
        <SlotScopeCategory title="汽车">
            <!-- 作用域插槽必须使用<template>标签将元素包裹起来，否则拿不到SlotScopeCategory组件传递过来的cars数组 -->
            <template scope="getCars">
                <ul>
                    <li v-for="(car,index) in getCars.cars" :key="index">{{car}}</li>
                </ul>
            </template>
        </SlotScopeCategory>
        <SlotScopeCategory title="汽车">
            <template scope="getCars">
                <ol>
                    <li style="color:red" v-for="(car,index) in getCars.cars" :key="index">{{car}}</li>
                </ol>
                {{getCars.diy}}
            </template>
        </SlotScopeCategory>
        <SlotScopeCategory title="汽车">
            <!-- scope="getCars" 还可以这样写 slot-scope="{cars}"  -->
            <template slot-scope="{cars}">
                <h4 v-for="(car,index) in cars" :key="index">{{car}}</h4>
            </template>
        </SlotScopeCategory>
    </div>

</div>
</template>

<script>
import SlotDefaultCategory from './components/slot/SlotDefaultCategory.vue'
import SlotNamedCategory from './components/slot/SlotNamedCategory.vue'
import SlotScopeCategory from './components/slot/SlotScopeCategory.vue'

export default {
    name: "AppSlot",
    components: {
        SlotDefaultCategory: SlotDefaultCategory,
        SlotNamedCategory: SlotNamedCategory,
        SlotScopeCategory: SlotScopeCategory

    },
    data() {
        return {
            foods: ['火锅', '烧烤', '小龙虾', '牛排'],
            games: ['GTA', '大表哥', '魔兽', '神秘海域'],
            films: ['《教父》', '《蜘蛛侠》', '《复仇者联盟》', '《雷神》']
        }
    }
}
</script>

<style scoped>
.demo,
.foot {
    display: flex;
    justify-content: space-around;
}

img,
video {
    width: 100%;
}

h2 {
    text-align: center;
}
</style>
