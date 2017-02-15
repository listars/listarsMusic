// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'

import {DevicePlugin, ToastPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin, WechatPlugin, AjaxPlugin} from 'vux'

import App from './App'
import routes from './router-map'

Vue.use(Vuex)
Vue.use(VueRouter)

Vue.use(DevicePlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)

const store = new Vuex.Store({}) // 这里你可能已经有其他 module

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

const router = new VueRouter({
    routes
})

router.beforeEach(function (to, from, next) {
    next()
})

router.afterEach(function (to) {
})

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
