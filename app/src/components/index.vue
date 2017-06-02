<template>
    <div class="page-home">
        <header class="home-head">
            <ul>
                <li @click="sideShow=!sideShow" class="list"></li>
                <li @click="musicIndex = 0" class="music"></li>
                <li @click="musicIndex = 1" class="logo"></li>
                <li class="user"></li>
                <li @click="jumpSearch" class="search"></li>
            </ul>
        </header>
        <transition name="side-tran">
            <div v-if="sideShow" class="home-side">
                <div class="side-con">
                    <div class="side-head">
                        <template v-if="userName != ''">
                            <div class="back">
                                <i class="side-icon" @click="sideShow=!sideShow">&#xe602;</i>
                                <img :src="userImg"/>
                                <p>{{userName}}</p>
                            </div>
                        </template>
                        <template v-else>
                                <p @click="jumpLogin">点我登录</p>
                        </template>
                    </div>
                </div>
            </div>
        </transition>
        <article v-if="musicIndex == 0" class="home-con">
            <userPlaylist></userPlaylist>
        </article>
        <article v-if="musicIndex == 1" class="home-con">
            <nav class="home-nav">
                <span :class="{active:navNum == index}"
                      @click="navNum = index"
                      v-for="(item,index) in navList">{{item.name}}</span>
            </nav>
            <section v-if="navNum==0">
                <recommend></recommend>
            </section>
            <section v-if="navNum==1">
                <playlist></playlist>
            </section>
            <section v-if="navNum==2">
                <anchor></anchor>
            </section>
            <section v-if="navNum==3">
                <rank></rank>
            </section>
        </article>
    </div>
</template>

<script>
    import { mapGetters,mapMutations } from 'vuex'
    import UserPlaylist from './views/userPlaylist.vue'
    import MHead from './views/head.vue'
    import Recommend from './views/recommend.vue'
    import Playlist from './views/playlist.vue'
    import Rank from './views/rank.vue'
    import Anchor from './views/anchor.vue'
    export default {
        components:{
            MHead,Recommend,Playlist,Rank,Anchor,UserPlaylist
        },
        data(){
            return{
                navNum: 0,
                index: 1,
                musicIndex: 1,
                userName: '',
                userImg:'',
                sideShow:false,
                navList: [
                    {
                        name: '个性推荐'
                    },
                    {
                        name: '歌单'
                    },
                    {
                        name: '歌手节目'
                    },
                    {
                        name: '排行榜'
                    }
                ]
            }
        },
        methods:{
//            userShow(){
//
//            },
            jumpUserPlaylist(){
                this.$router.push({
                    path: '/'
                })
            }
            ,
            jumpSearch(){
                this.$router.push({
                    path: '/search'
                })
            },
            jumpLogin(){
                this.$router.push({
                    path: '/login'
                })
            },
            ...mapMutations([
                'getUsers'
            ]),
            getUser(){
                this.userName = window.sessionStorage.getItem('username');
                this.userImg = window.sessionStorage.getItem('userImg');
            }
        },
        computed:{
            ...mapGetters([
                'users'
            ])
        },
        mounted(){
            this.getUser();
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    .page-home{
        .side-tran-enter-active, .side-tran-leave-active {
            transition: all .3s ease;
        }
        .side-tran-enter, .side-tran-leave-active {
            transform: translateX(-2rem);
            opacity: 0;
        }
        .home-side{
            position: fixed;
            z-index: 999;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: rgba(0,0,0,0.5);
            .side-con{
                position: relative;
                width: 80%;
                height: 100%;
                background: #ffffff;
                .side-icon{
                    font-family: iconfont;
                    font-style: normal;
                    font-size: 1rem;
                    display: block;
                    width: 1.5rem;
                    height: 1.5rem;
                    line-height: 1.5rem;
                    text-align: center;
                    position: absolute;
                    top: 0;
                    right: 0;
                    color: #ffffff;
                }
                .side-head{
                    width: 100%;
                    height: 30%;
                    background: url("../assets/song-sheet.png") no-repeat;
                    background-size: 100%;
                    .back{
                        width: 100%;
                        height: 100%;
                        position: relative;
                        background: rgba(0,0,0,0.4);
                        img{
                            position: absolute;
                            top: 30%;
                            left: 1.5rem;
                            width: 4rem;
                            height: 4rem;
                            border-radius: 50%;
                        }
                        p{
                            position: absolute;
                            font-size: .75rem;
                            color: #ffffff;
                            bottom: 12%;
                            left: 1.5rem;
                        }
                    }
                }
            }
        }
        .home-head{
            position: fixed;
            width: 100%;
            z-index: 888;
            top: 0;
            ul{
                list-style: none;
                height: 2.5rem;
                background: red;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            li{
                float: left;
                width: 2.5rem;
                height: 2.5rem;
            }
            .list{
                background: url("../assets/icon-list.png") no-repeat;
                background-size: 1rem 1rem;
                background-position: .5rem;
                margin-right: -.7rem;
                margin-left: .5rem;
            }
            .music{
                background: url("../assets/icon-music.png") no-repeat;
                background-size: 1rem 1rem;
                background-position: .6rem;
                margin-right: -2rem;
            }
            .user{
                background: url("../assets/icon-user.png") no-repeat;
                background-size: 1.2rem 1.2rem;
                background-position: .6rem;
                margin-left: -2rem;
            }
            .logo{
                background: url("../assets/icon-logo.png") no-repeat;
                background-size: 1.4rem 1.4rem;
                background-position: .5rem .5rem;
            }
            .search{
                background: url("../assets/icon-search.png") no-repeat;
                background-size: 1.4rem 1.4rem;
                background-position: .5rem .5rem;
                margin-right: .5rem;
            }
        }
        .home-nav{
            margin-top: 2.5rem;
            width: 100%;
            height: 1.8rem;
            line-height: 1.8rem;
            font-size: 0;
            span{
                display: inline-block;
                width: 25%;
                font-size: .75rem;
                vertical-align: top;
                text-align: center;
            }
            span.active{
                color: red;
                position: relative;
            }
            span.active:after{
                content: '';
                position: absolute;
                width: 100%;
                height: .1rem;
                bottom: 0;
                display: block;
                background: red;
                left: 0;
            }
        }
        .home-con{
            width: 100%;
            height: auto;
        }
    }
</style>