<template>
    <div class="page-userPlaylist">
        <div class="user-top">
            <p class="history"><span class="history-icon">&#xe64f;</span>本地音乐</p>
            <p class="history">
                <span class="history-icon">&#xe637;</span>最近播放
                <span class="history-num">({{recordlist.length}})</span>
            </p>
            <p class="history"><span class="history-icon">&#xe61e;</span>下载管理</p>
            <p class="history"><span class="history-icon">&#xe706;</span>我的电台</p>
            <p class="history"><span class="history-icon">&#xe6e8;</span>我的收藏</p>
        </div>
        <header @click="playlistShow = !playlistShow"
                class="music-head"><p>我的歌单</p><span class="right">&#xe65b;</span></header>
        <transition name="hideMove">
            <ul v-if="playlistShow" class="u-playlist">
                <li v-for="item in playlist">
                    <img @click="jumpPlaylist(item.id)" :src="item.coverImgUrl"/>
                    <div>
                        <p>{{item.name}}</p>
                        <span>共{{item.trackCount}}首</span>
                    </div>
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>
    import api from '../../api'
    export default{
        data(){
            return{
                uid:'',
                playlist:[],
                recordlist:[],
                playlistShow: true
            }
        },
        methods:{
            getUserPlaylistResource(){
                this.uid = window.sessionStorage.getItem('uid');
                api.getUserPlaylist(this.uid).then(res=>{
                    this.playlist = res.data.playlist;
                },res=>{
                    console.log(res);
                })
            },
            jumpPlaylist(id){
                this.$router.push({
                    path: '/playlists/' + id
                })
            },
            getRecordResource(){
                this.uid = window.sessionStorage.getItem('uid');
                api.getRecordList(this.uid,1).then(res=>{
                    this.recordlist = res.data.weekData;
                },res=>{
                    console.log(res);
                })
            }
        },
        mounted(){
            this.getUserPlaylistResource();
            this.getRecordResource()
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    .page-userPlaylist{
        width: 100%;
        height: auto;
        padding-top: 2.5rem;
        .hideMove-enter-active, .hideMove-leave-active{
            transition: all .3s ease;
        }
        .hideMove-enter, .hideMove-leave-active{
            transform: translateY(-1rem);
            opacity: 0;
        }
        .user-top{
            padding: 0 1rem;
            .history{
                border-bottom: 1px solid rgb(220,220,220);
                height: 2.2rem;
                line-height: 2.2rem;
                text-indent: .1rem;
                font-size: .75rem;
                width: 100%;
                .history-icon{
                    font-family: iconfont;
                    font-style: normal;
                    font-size: .75rem;
                    display: inline-block;
                    vertical-align: top;
                    margin-right: .5rem;
                }
                .history-num{
                    font-size: .65rem;
                    color: #999999;
                }
            }
        }
        .music-head{
            font-size: 0;
            padding: .5rem 0;
            p{
                display: inline-block;
                vertical-align: top;
                border-left: .2rem solid red;
                font-size: .75rem;
                height: 1rem;
                line-height: 1rem;
                text-indent: .4rem;
            }
            .right{
                font-family: iconfont;
                font-style: normal;
                font-size: .65rem;
                display: inline-block;
                vertical-align: top;
            }
        }
        .u-playlist{
            list-style: none;
            li{
                font-size: 0;
                width: 100%;
                border-bottom: 1px solid rgb(230,230,230);
                padding: .2rem .2rem;
                img{
                    width: 20%;
                    vertical-align: middle;
                }
                div{
                    padding: .5rem;
                    width: 80%;
                    height: 3rem;
                    display: inline-block;
                    vertical-align: middle;
                    p{
                        font-size: .75rem;
                        width: 100%;
                        height: 1rem;
                        line-height: 1rem;
                        overflow: hidden;
                    }
                    span{
                        font-size: .65rem;
                        display: block;
                        color: #999999;
                        transform: scale(.9);
                        margin-left: -5%;
                    }
                }
            }
            li:first-child{
                border-top: 1px solid rgb(230,230,230);
            }
        }
    }
</style>