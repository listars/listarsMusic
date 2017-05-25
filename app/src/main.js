
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
// import store from './vuex/store';
import api from './api';
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'

import {DevicePlugin, ToastPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin, WechatPlugin} from 'vux'

import App from './App'
import Filters from './filters'
import routes from './router-map'

Vue.use(Vuex)
Vue.use(VueValidator)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(DevicePlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(WechatPlugin)


Vue.use(Filters)

const store = new Vuex.Store({
    state: {
        audio: {
            'id': 0,
            'name': '歌曲名称',
            'singer': '演唱者',
            'albumPic': '/static/player-bar.png',
            'location': '',
            'album': '',
        },
        songTime:'0:00',    //歌曲时间
        mTime:0,    //歌曲时间没转化版
        songShow:false, //歌曲详情页面
        currentIndex: 0, // 当前播放的歌曲位置
        songList: [],    // 播放列表
        timeSong: '',
        startT:'0:0'
    },
    getters: {
        songTime: state => state.songTime,
        songShow: state => state.songShow,
        audio: state => state.audio,
        currentIndex: state => state.currentIndex,
        songList: state => state.songList,
        mTime: state => state.mTime,
        timeSong: state => state.timeSong,
        startT: state => state.startT
    },
    mutations: {
        showSong (state) {
            state.songShow = true;
        },
        HideSong (state) {
            state.songShow = false;
        },
        setAudio (state) {
            state.audio = state.songList[state.currentIndex - 1];
        },
        setAudioIndex (state, index) {
            state.audio = state.songList[index];
            state.currentIndex = index + 1;
        },
        setLocation (state, location) {
            state.audio.location = location;
        },
        getStartTime(state, time){
            state.startT = time;
        },
        getTimeSong(state, time){
            state.timeSong = time;
        },
        getSongTime(state,time){
            state.songTime = time;
        },
        getSongT(state,time){
            state.mTime = time;
        },
        addToList (state, songs) {
            let items = Array.prototype.concat.call(songs);
            items.forEach(item => {
                let flag = false;
                state.songList.forEach(function (element, index) { // 检测歌曲重复
                    if (element.id === item.id) {
                        flag = true;
                        state.currentIndex = index + 1;
                    }
                });
                if (!flag) {
                    state.songList.push(item);
                    state.currentIndex = state.songList.length;
                }
            });
        },
        setLrc (state, lrc) {
            state.lyric = lrc;
        }
    },
    // 异步的数据操作
    actions: {
        getSong ({commit}, id) {
            api.getMusicUrlResource(id).then(res => {
                let url = res.data.data[0].url;
                commit('setAudio');
                commit('setLocation', url);
            })
                .catch((error) => {     // 错误处理
                    console.log(error);
                    window.alert('获取歌曲信息出错！');
                });
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

export default store;
