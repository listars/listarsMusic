/**
 * Created by Administrator on 2017/5/18.
 */
import axios from 'axios';
import {
    PersonalizedResource,
    PrivatecontentResource,
    PersonalizedMvResource,
    // NewSongResource,
    DJResource,
    TopBanner,
    ListDetail,
    MusicUrlResource
} from './resource';

export default {

    // 获取音乐url， id为单曲id
    getMusicUrlResource (id) {
        return axios.get(MusicUrlResource, {
            params: {
                id: id
            }
        });
    },

    //获取歌单详情
    getPlaylistDetailResource (id) {
        return axios.get(ListDetail, {
            params: {
                id: id
            }
        });
    },

    //获取轮播
    getBanner () {
        return axios.get(TopBanner);
    },

    // 获取推荐歌单
    getPersonalized () {
        return axios.get(PersonalizedResource);
    },

    // 获取独家放送
    getPrivatecontent () {
        return axios.get(PrivatecontentResource);
    },

    // 获取推荐MV
    getPersonalizedMv () {
        return axios.get(PersonalizedMvResource);
    },

/*    //获取最新音乐
    getNewSongs () {
        return axios.get(NewSongResource);
    },*/

    //获取推荐电台
    getDj () {
        return axios.get(DJResource);
    }
};