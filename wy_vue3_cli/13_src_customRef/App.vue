<template>
<input type="text" v-model="keyWord">
<h3>{{keyWord}}</h3>
</template>

<script>
import {
    ref,
    customRef
} from 'vue'

export default {
    name: 'App',
    setup() {
        //使用vue提供的ref函数来做响应式数据
        // let keyWord = ref('hello')

        //使用程序员自定义的ref函数
        let keyWord = myRef('hello', 500)

        function myRef(value, delay) {
            console.log('~~~myRef~~~', value)
            let timer
            //track, trigger为customRef自带参数
            return customRef((track, trigger) => {
                return {
                    get() {
                        console.log('###get###')
                        //作用：通知vue追踪数据的变化（在模板被重新解析后返回set后的新value）
                        track()
                        return value
                    },
                    set(newValue) {
                        console.log('###set###', newValue)
                        clearTimeout(timer)
                        timer = setTimeout(() => {
                            value = newValue
                            //作用：通知vue重新解析模板（在set新值后调用）
                            trigger()
                        }, delay);

                    }
                }
            })
        }

        return {
            keyWord
        }
    }
}
</script>
