//自定义Hook函数，类似于vue2中的mixin，例子中在Demo组件中使用

import {
    reactive,
    onMounted,
    onBeforeUnmount
} from 'vue'

export default function () {
    //实现鼠标“打点”相关的数据
    let point = reactive({
        x: 0,
        y: 0
    })

    //实现鼠标“打点”相关的方法
    function savePoint(event) {
        console.log(event.pageX, event.pageY)
        point.x = event.pageX
        point.y = event.pageY
    }

    //实现鼠标“打点”相关的生命周期钩子
    //挂载完毕后
    onMounted(() => {
        window.addEventListener('click', savePoint)
    })

    //卸载之前
    onBeforeUnmount(() => {
        window.removeEventListener('click', savePoint)
    })

    return point
}