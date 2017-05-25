<template>
    <div class="page-playlist">
        <header class="playlist-head" >
            <div class="phead-back" v-bind:style="{backgroundImage: 'url(' + (playsheet[0].coverImgUrl) + ')'}"></div>
            <div class="phead-con">
                <img :src="playsheet[0].coverImgUrl"/>
                <div class="hcon-text">
                    <router-link to="fineSong">
                        <p class="text-tit"><span class="vip-icon">&#xe6b8;</span>精品歌单 ></p>
                    </router-link>
                    <p class="text-name">{{playsheet[0].name}}</p>
                    <p class="text-con">{{playsheet[0].copywriter}}</p>
                </div>
            </div>
        </header>
        <nav class="playlist-nav">
            <p>全部歌单 ></p>
        </nav>
        <ul class="playlist-con">
            <li v-for="(item,index) in hotsheet">
                <div @click="jumpPlaylist(item.id)" class="con-hot">
                    <span class="hot-count">&#xe63e; {{item.playCount}}</span>
                    <span class="hot-name">&#xe655; {{item.creator.nickname}}</span>
                    <img :src="item.coverImgUrl"/>
                </div>
                <p>{{item.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import api from '../../api'
    export default{
        data(){
            return{
                playsheet:[{coverImgUrl:''}],
                hotsheet:[],
            }
        },
        methods:{
            getHighQualityResource(){
                api.getHighQuality(20,0).then(res =>{
                    this.playsheet = res.data.playlists;
                }).catch(res =>{
                    console.log(res);
                })
            },
            getHotPlayListResource(){
                api.getHotPlayList(20,'hot').then(res =>{
                    this.hotsheet = res.data.playlists;
                }).catch(res=>{
                    console.log(res);
                })
            },
            jumpPlaylist(id){
                this.$router.push({
                    path:'/playLists/'+ id
                })
            }
        },
        mounted(){
            this.getHighQualityResource();
            this.getHotPlayListResource()
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    .page-playlist{
        .playlist-head{
            width: 100%;
            height: 8rem;
            overflow: hidden;
            position: relative;
            font-size: 0;
            .phead-back{
                position: absolute;
                filter: blur(5px);
                width: 100%;
                height: 8rem;
                background-size: 100%;
                z-index: 40;
            }
            .phead-con{
                z-index: 999;
                width: 100%;
                height: 8rem;
                background: rgba(0,0,0,0.3);
                position: absolute;
                padding: 1rem .8rem 1rem .8rem;
                font-size: 0;
                img{
                    display: inline-block;
                    vertical-align: top;
                    width: 6rem;
                    height: 6rem;
                }
                .hcon-text{
                    vertical-align: top;
                    display: inline-block;
                    margin-top: .1rem;
                    font-size: .75rem;
                    width: 55%;
                    margin-left: 5%;
                    .text-tit{
                        color: #ffffff;
                        .vip-icon{
                            margin-right: .3rem;
                            font-family: iconfont;
                            font-style: normal;
                            font-size: .75rem;
                            color: orange;
                            display: inline-block;
                            width: 1.15rem;
                            height: 1.15rem;
                            text-align: center;
                            line-height: 1.1rem;
                            background: rgba(255,140,0,0.3);
                            border: 1px solid orange;
                            border-radius: 50%;
                        }
                    }
                    .text-name{
                        margin-top: .3rem;
                        width: 100%;
                        font-size: .7rem;
                        color: #ffffff;
                    }
                    .text-con{
                        margin-top: .15rem;
                        width: 100%;
                        color: rgb(200,200,200);
                        font-size: .65rem;
                    }
                }
            }
        }
        .playlist-nav{
            padding: .5rem .8rem;
            width: 100%;
            height: auto;
            p{
                font-size: .65rem;
                width: 4.5rem;
                height: auto;
                text-align: center;
                padding: .15rem;
                border: 1px solid rgb(200,200,200);
                border-radius: 2.5rem;
            }
        }
        .playlist-con{
            width: 100%;
            height: auto;
            list-style: none;
            font-size: 0;
            li{
                display: inline-block;
                margin-right: 1%;
                width: 49.5%;
                height: auto;
                .con-hot{
                    position: relative;
                    width: 100%;
                    .hot-count{
                        position: absolute;
                        z-index: 88;
                        top: 0;
                        right: 0;
                        display: inline-block;
                        width: 100%;
                        height: 2rem;
                        line-height: 1.3rem;
                        color: #ffffff;
                        text-align: right;
                        padding-right: .3rem;
                        background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0));
                        font-size: .65rem;
                        font-family: iconfont;
                        font-style: normal;
                    }
                    .hot-name{
                        position: absolute;
                        bottom: 0;
                        display: inline-block;
                        vertical-align: top;
                        overflow: hidden;
                        width: 100%;
                        height: 1.2rem;
                        line-height: 1.2rem;
                        font-size: .65rem;
                        text-indent: .3rem;
                        color: #ffffff;
                        background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
                        font-family: iconfont;
                        font-style: normal;
                    }
                    img{
                        width: 100%;
                    }
                }
                p{
                    display: inline-block;
                    vertical-align: top;
                    font-size: .65rem;
                    width: 100%;
                    height: auto;
                    transform: scale(.9);
                    margin-bottom: .25rem;
                }
            }
            li:nth-child(2n){
                margin-right: 0;
            }
        }
    }
</style>