##使用 vuex 管理状态

###使用方法

1. 在main.js中 
    
    ```
    import Vuex from 'vuex'
    Vue.use(Vuex)
    store.registerModule('vux', { // 名字自己定义
        state: {
            count: 1
        },
        mutations: {
            updateCountStatus (state, payload) {
                state.count = payload.count
            }
        },
        actions: {
            updateCountStatus ({commit}) {
                var num = store.state.vux.count + 1
                commit({type: 'updateCountStatus', count: num})
            }
        }
    })
    
    
    new Vue({
        store,
        router,
        render: h => h(App)
    }).$mount('#app')
    
    ```
    
1.   在 vue 组件中
    
    template:
    ```html
    <button @click.native="updateCountStatus">click</button> {{count}}
    ```
    
    script:
    ```javascript
    import {mapState, mapActions} from 'vuex'
    export default {
        //...
         computed: mapState({
            count: state => state.vux.count
        }),
        methods: {
            ...mapActions([
                'updateCountStatus'
            ])
        }
    }
    ```
    
