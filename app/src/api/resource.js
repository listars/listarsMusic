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
    hotPlayList: '/top/playlist',    //最热歌单
    rankList: '/top/list',  //排行榜
    anchorList: '/program/recommend',   //节目
    singerList: '/top/artists',     //热门歌手
    search: '/search',   //搜索
    suggest: '/search/suggest', //搜索建议
    login: '/login/cellphone',  //登录接口
    userPlaylist: '/user/playlist', //用户歌单
    recordList: '/user/record',  //播放记录
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
export const RankResource = API_ROOT.concat(apiMusic.rankList);
export const AnchorResource = API_ROOT.concat(apiMusic.anchorList);
export const SingerResource = API_ROOT.concat(apiMusic.singerList);
export const SearhResource = API_ROOT.concat(apiMusic.search);
export const SuggestResource = API_ROOT.concat(apiMusic.suggest);
export const LoginResource = API_ROOT.concat(apiMusic.login);
export const UserPlaylistResource = API_ROOT.concat(apiMusic.userPlaylist);
export const RecordResource = API_ROOT.concat(apiMusic.recordList);