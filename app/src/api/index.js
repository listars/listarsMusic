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
    MusicUrlResource,
    HighQualityResource,
    HotPlayListResource,
    RankResource,
    AnchorResource,
    SingerResource
} from './resource';

export default {
    //获取热门歌手    参数同下
    getSingerList(limit,offset){
        return axios.get(SingerResource,{
            params:{
                limit: limit || 30,
                offset: offset || 0
            }
        })
    },

    //获取推荐节目
    getAnchorList(){
        return axios.get(AnchorResource);
    },

    //获取排行榜
    getRankList(idx){
        return axios.get(RankResource,{
            params:{
                idx: idx
            }
        })
    },

    //获取最热歌单, limit为显示的数量， order为hot
    getHotPlayList(limit,order){
        return axios.get(HotPlayListResource,{
            params:{
                limit: limit || 20,
                order: order || 'hot'
            }
        })
    },

    //获取精品歌单, limit为显示的数量， offset为分页
    getHighQuality(limit,offset){
        return axios.get(HighQualityResource, {
            params: {
                limit: limit || 20,
                offset: offset || 0
            }
        })
    },

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