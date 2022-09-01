<template>
<ul class="todo-main">
    <BusItem v-for="todo in todos" :key="todo.id" :todoObj="todo" />
</ul>
</template>

<script scoped>
import BusItem from './BusItem.vue'

export default {
    name: 'BusList',
    components: {
        BusItem: BusItem
    },
    props: ['todos']
}
</script>

<style scoped>
/*main*/
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>
