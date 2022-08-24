/*
mixin（混入）
功能：可以把多个组件共用的配置提取成一个混入对象
使用方式：
    第一步：定义混入
    {
        data(){......},
        methods:{......}
    }
    第二步：使用混入
    （1）全局混入：Vue.mixin(xxx)
    （2）局部混入：mixins: [xxx]
*/

export const hunhe = {
    methods: {
        //当Emp,Ent,Cat组件中都有showName函数时，可使用“mixin”特性
        showName() {
            alert(this.name)
        }
    }
}