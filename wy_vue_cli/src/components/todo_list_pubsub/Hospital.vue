<!-- 
    消息订阅发布章节
 -->
<template>
<div class="hospital">
    <h2>医院名称：{{ name }}</h2>
    <h2>医院地址：{{ addr }}</h2>
    <h2>医生的姓名是：{{dname}}</h2>
</div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'Hospital',
    data() {
        return {
            name: "省人民医院",
            addr: "清凉山",
            dname: ""
        }
    },
    mounted() {
        //当Hospital组件一旦被挂载，就开启消息订阅
        //默认参数1--消息名，参数2--消息内容。使用箭头函数的写法可以使方法体内的this指向vc
        this.pubId = pubsub.subscribe('hello', (msgName, data) => {
            console.log('~~~有人发布了hello消息，hello消息的回调执行了~~~', msgName, data)
            this.dname = data
        })
    },
    beforeDestroy() {
        //组件销毁前，记得取消订阅消息
        pubsub.unsubscribe(this.pubId)
    }
}
</script>

<style scoped>
.hospital {
    background-color: orange;
    padding: 5px;
}
</style>
