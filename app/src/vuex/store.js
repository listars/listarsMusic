/**
 * Created by Administrator on 2017/5/22.
 */
import Vue from 'vue';
// import api from '../api';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.store({
    state:{
        audio:{
            'id': 0,
            'name': '歌曲名称',
            'singer': '演唱者',
            'albumPic': '../static/player-bar.png',
            'location': '',
            'album': ''
        }
    },
    getters:{
        audio: state => state.audio,
    },
    mutations:{

    },
    actions:{

    }
});
export default store;