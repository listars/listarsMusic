<template>
    <article class="page-sheet">
        <section class="sheet-head">
            <div style="overflow: hidden" class="head-back">
                <img width="100%" :src="datas.picUrl" alt=""/>
            </div>
            <div class="head-tic">
                <div class="head-top">
                    <a href="javascript:history.go(-1)" class="icon">&#xe602;</a>
                    <span class="top-text">歌单</span>
                    <span class="icon">&#xe672;</span>
                    <span class="icon">&#xe60f;</span>
                </div>
                <div class="head-con">
                    <img :src="datas.picUrl" alt=""/>
                    <div class="con-user">
                        <p class="sheet-name">{{datas.name}}</p>
                        <div class="sheet-user">
                            <img :src="creator.avatarUrl" alt=""/><span>{{creator.nickname}} ></span>
                        </div>
                    </div>
                </div>
                <ul class="head-nav">
                    <li><span class="nav-icon">&#xe696;</span><p id="playCount">{{datas.playCount}}</p></li>
                    <li><span class="nav-icon">&#xe669;</span><p>{{datas.commentCount}}</p></li>
                    <li><span class="nav-icon">&#xe64e;</span><p>{{datas.shareCount}}</p></li>
                    <li><span class="nav-icon">&#xe61e;</span><p>下载</p></li>
                </ul>
            </div>
        </section>
        <section class="sheet-con">
            <div class="con-head">
                <i class="iconfont">&#xe721;</i>
                <p>播放全部<span>(共{{songList.length}}首)</span></p>
                <i class="iconfont list">&#xe6b7;<span>多选</span></i>
            </div>
            <ul class="container">
                <li @click="playAudio(item)" v-for="(item,index) in songList">
                    <span class="con-id">{{index+1}}</span>
                    <div class="con-song">
                        <p class="song-name">{{item.name}}</p>
                        <p class="singer">{{item.al.name}}</p>
                        <span class="list2">&#xe60f;</span>
                    </div>
                </li>
            </ul>
        </section>
        <div v-if="loadShow" class="song-loading">
            <div class="loading-back"></div>
            <div class="round"></div>
            <p>Loading...</p>
        </div>

        <song v-if="songShow"></song>
    </article>
</template>

<script>
    import { mapMutations,mapGetters } from 'vuex'
    import Song from './song.vue'
    import api from '../../api';
    export default{
        components:{
            Song
        },
        data(){
            return{
                datas: {},
                creator:{},
                songList:[],
                loadShow:true
            }
        },
        methods:{
            ...mapMutations([
                'showSong'
            ]),
            getListDetail(){
                api.getPlaylistDetailResource(this.$route.params.id).then(res => {
                    this.datas = res.data.playlist;
                    this.creator = res.data.playlist.creator;
                    this.songList = res.data.playlist.tracks;
                }).catch(res => {
                    console.log(res);
                })
            },
            playAudio(song){
                let audio = {};
                audio.id = song.id;
                audio.name = song.name;
                audio.singer = song.al.name;
                audio.pic = song.al.picUrl;
                // 通过Vuex改变状态
                this.$store.commit('addToList', audio);
                this.$store.dispatch('getSong', audio.id);
//                console.log(audio);
//                console.log((this.datas.playCount).toString().length);
            },
            NumTransform(){
                this.loadShow = false;
                let count = document.getElementById('playCount');
                let num = (this.datas.playCount).toString();
                if(num.length >= 4){
                    let num2 = num.slice(0,-4);
                    count.innerHTML = num2 + '万';
//                    console.log(num);
                }
            }
        },
        mounted(){
            this.getListDetail();
        },
        updated(){
//            console.log('111');
            this.NumTransform();
        },
        computed: {
            ...mapGetters([
                'audio',
                'songShow',
                'timeSong'
            ])
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import '../../assets/css/common.css';
    .page-sheet{
        background: rgb(248,248,248);
        .song-loading{
            position: fixed;
            top: 0;
            width: 100%;
            height: 100%;
            background: #ffffff;
            z-index: 999;
            .loading-back{
                position: fixed;
                width: 100%;
                height: 100%;
                background: url("../../assets/song-sheet.png");
                filter: blur(5px);
            }
            .round{
                position: fixed;
                top: 10rem;
                left: 38%;
                width: 5rem;
                height: 5rem;
                border-radius: 50%;
                border: .15rem solid red;
                border-left: .15rem solid transparent;
                animation: outRound 1s infinite linear;
                z-index: 10;
            }
            p{
                color: darkred;
                position: fixed;
                top: 11.7rem;
                font-size: .85rem;
                left: 41%;
                z-index: 10;
            }
            @keyframes outRound {
                0%{ transform: rotate(130deg) }
                100%{ transform: rotate(-230deg) }
            }
        }
        .sheet-head{
            width: 100%;
            height: 12.3rem;
            position: relative;
            background: rgba(0,0,0,0.4);
            .head-back{
                position: absolute;
                width: 100%;
                height: 100%;
                filter: blur(5px);
                z-index: 1;
            }
            .head-tic{
                position: absolute;
                width: 100%;
                z-index: 99;
                background: rgba(0,0,0,0.4);
            }
            .head-top{
                width: 100%;
                height: 2.5rem;
                font-size: 0;
                .top-text{
                    display: inline-block;
                    vertical-align: top;
                    width: 64%;
                    height: 2.5rem;
                    line-height: 2.5rem;
                    color: #ffffff;
                    text-indent: .2rem;
                    font-size: .85rem;
                }
                .icon{
                    font-family: "iconfont";
                    font-size: .85rem;
                    font-style: normal;
                    color: #ffffff;
                    height: 2.5rem;
                    line-height: 2.5rem;
                    display: inline-block;
                    vertical-align: top;
                    width: 12%;
                    text-align: center;
                }
            }
            .head-con{
                width: 100%;
                height: auto;
                font-size: 0;
                padding: .5rem 1rem .75rem 1rem;
                img{
                    width: 35%;
                    margin-right: 1rem;
                    vertical-align: top;
                }
                .con-user{
                    display: inline-block;
                    vertical-align: top;
                    width: 58%;
                    .sheet-name{
                        font-size: .75rem;
                        color: #ffffff;
                        margin-bottom: .5rem;
                    }
                    .sheet-user{
                        display: inline-block;
                        vertical-align: top;
                        img{
                            width: 1rem;
                            border-radius: 50%;
                            vertical-align: middle;
                            margin-right: .1rem;
                        }
                        span{
                            font-size: .65rem;
                            display: inline-block;
                            vertical-align: middle;
                            text-align: left;
                            transform: scale(.9);
                            color: #ffffff;
                        }
                    }
                }
            }
            .head-nav{
                width: 100%;
                height: auto;
                font-size: 0;
                li{
                    display: inline-block;
                    vertical-align: top;
                    width: 25%;
                    height: auto;
                    color: #ffffff;
                    text-align: center;
                    font-size: .65rem;
                    .nav-icon{
                        font-family: "iconfont";
                        font-size: .85rem;
                        font-style: normal;
                        text-align: center;
                        width: 100%;
                        height: 1.5rem;
                        text-align: center;
                    }
                    p{
                        height: .85rem;
                        line-height: .85rem;
                        margin-bottom: .5rem;
                    }
                }
            }
        }
        .sheet-con{
            .con-head{
                display: flex;
                font-size: 0;
                height: 2.5rem;
                border-bottom: 1px solid rgb(240,240,240);
                width: 100%;
                .iconfont{
                    font-family: "iconfont";
                    font-size: .85rem;
                    font-style: normal;
                    text-align: center;
                    display: inline-block;
                    vertical-align: top;
                    width: 12%;
                    height: 2.5rem;
                    line-height: 2.5rem;
                }
                .iconfont.list{
                    text-align: center;
                    width: 18%;
                    span{
                        font-size: .5rem;
                        display: inline-block;
                        vertical-align: top;
                        text-indent: .1rem;
                    }
                }
                p{
                    width: 70%;
                    font-size: .75rem;
                    height: 2.5rem;
                    line-height: 2.5rem;
                    span{
                        display: inline-block;
                        vertical-align: top;
                        font-size: .65rem;
                        color: #999999;
                    }
                }
            }
            .container{
                list-style: none;
                width: 100%;
                height: auto;
                li{
                    font-size: 0;
                    height: 2.5rem;
                    width:100%;
                    .con-id{
                        display: inline-block;
                        vertical-align: top;
                        font-size: .75rem;
                        width: 12%;
                        text-align: center;
                        color: #888888;
                        height: 2.5rem;
                        line-height: 2.5rem;
                    }
                    .con-song{
                        display: inline-block;
                        vertical-align: top;
                        text-indent: .1rem;
                        height: 2.5rem;
                        overflow: hidden;
                        width: 88%;
                        position: relative;
                        border-bottom: 1px solid rgb(230,230,230);
                        font-size: .75rem;
                        .song-name{
                            font-size: .65rem;
                            height: 1.5rem;
                            line-height: 1.5rem;
                            overflow: hidden;
                        }
                        .singer{
                            font-size: .65rem;
                            width: 100%;
                            margin-left: -10%;
                            margin-top: -.25rem;
                            transform: scale(.8);
                            color: #888888;
                        }
                        .list2{
                            position: absolute;
                            font-family: "iconfont";
                            font-size: .85rem;
                            font-style: normal;
                            text-align: center;
                            display: inline-block;
                            vertical-align: top;
                            height: 2.5rem;
                            line-height: 2.5rem;
                            right: 0;
                            top: 0;
                            color: #888888;
                            width: 12%;
                        }
                    }
                }
                li:last-child{
                    .con-song{
                        border-bottom: 0;
                    }
                }
            }
        }
    }
</style>