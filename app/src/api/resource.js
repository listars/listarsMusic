/**
 * Created by Administrator on 2017/5/18.
 */
import {API_ROOT} from './config.js';

const apiMusic = {
    banner :'/banner',  //轮播
    personalized: '/personalized', //  推荐歌单
    privatecontent: '/personalized/privatecontent',  // 独家放送
    personalizedMv: '/personalized/mv',  // 推荐MV
    // personalizedSong: '/personalized/newsong',    //------最新歌曲  接口有问题没图片
    personalizedDj: '/personalized/djprogram',   //推荐电台
    playListDetail: '/playlist/detail',     //歌单详情
    musicUrl: '/music/url', // 获取音乐url
    highquality: '/top/playlist/highquality',    //精品歌单
    hotPlayList: '/top/playlist'    //最热歌单
};

export const PersonalizedResource = API_ROOT.concat(apiMusic.personalized);
export const PrivatecontentResource = API_ROOT.concat(apiMusic.privatecontent);
export const PersonalizedMvResource = API_ROOT.concat(apiMusic.personalizedMv);
// export const NewSongResource = API_ROOT.concat(apiMusic.personalizedSong);
export const DJResource = API_ROOT.concat(apiMusic.personalizedDj);
export const TopBanner = API_ROOT.concat(apiMusic.banner);
export const ListDetail = API_ROOT.concat(apiMusic.playListDetail);
export const MusicUrlResource = API_ROOT.concat(apiMusic.musicUrl);
export const HighQualityResource = API_ROOT.concat(apiMusic.highquality);
export const HotPlayListResource = API_ROOT.concat(apiMusic.hotPlayList);