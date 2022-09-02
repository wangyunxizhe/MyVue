<!-- 
    消息订阅发布章节
 -->
<template>
<div class="doctor">
    <h2>医生姓名：{{ name }}</h2>
    <h2>医生性别：{{ sex }}</h2>
    <button @click="sendDoctorName">把医生姓名传递给Hospital组件（同级组件）</button>
</div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'Doctor',
    data() {
        return {
            name: "老军医",
            sex: "男"
        }
    },
    methods: {
        sendDoctorName() {
            //发布hello消息，内容为666
            pubsub.publish('hello', this.name)
        }
    },
    mounted() {

    }
}
</script>

<style scoped>
.doctor {
    background-color: blue;
    padding: 5px;
    margin-top: 30px;
}
</style>
