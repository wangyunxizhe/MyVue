<template>
<div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
        <h2>Vue Router Demo</h2>
        <!-- 跟浏览器上的“前进”，“后退”功能相似 -->
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'Banner',
    methods: {
        back() {
            this.$router.back()
        },
        forward() {
            this.$router.forward()
        }
    }
}
</script>
