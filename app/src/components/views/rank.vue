<template>
    <div class="page-rank">
        <article class="first-rank">
            <header class="rank-head"><p>官方榜</p></header>
            <!--飙升榜 参数3-->
            <div class="rank-list">
                <img :src="rankInfo.coverImgUrl"/>
                <ul>
                    <li v-for="(item,index) in rankList">{{index+1}}. {{item.name}} - {{item.artists[0].name}}</li>
                </ul>
            </div>
            <!--新歌榜 参数0-->
            <div class="rank-new">
                <img :src="newInfo.coverImgUrl"/>
                <ul>
                    <li v-for="(item,index) in newList">{{index+1}}. {{item.name}} - {{item.artists[0].name}}</li>
                </ul>
            </div>
            <!--原创榜 参数2-->
            <div class="rank-original">
                <img :src="originalInfo.coverImgUrl"/>
                <ul>
                    <li v-for="(item,index) in originalList">{{index+1}}. {{item.name}} - {{item.artists[0].name}}</li>
                </ul>
            </div>
            <!--热歌榜 参数1-->
            <div class="rank-hot">
                <img :src="hotInfo.coverImgUrl"/>
                <ul>
                    <li v-for="(item,index) in hotList">{{index+1}}. {{item.name}} - {{item.artists[0].name}}</li>
                </ul>
            </div>
            <!--电音榜 参数4-->
            <div class="rank-dj">
                <img :src="djInfo.coverImgUrl"/>
                <ul>
                    <li v-for="(item,index) in djList">{{index+1}}. {{item.name}} - {{item.artists[0].name}}</li>
                </ul>
            </div>
            <header class="rank-head"><p>全球榜</p></header>
            <section class="rank-con">
                <ul>
                    <li>
                        <img :src="GobalInfo1.coverImgUrl"/>
                        <p>{{GobalInfo1.name}}</p>
                    </li>
                    <li>
                        <img :src="GobalInfo2.coverImgUrl"/>
                        <p>{{GobalInfo2.name}}</p>
                    </li>
                    <li>
                        <img :src="GobalInfo3.coverImgUrl"/>
                        <p>{{GobalInfo3.name}}</p>
                    </li>
                    <li>
                        <img :src="GobalInfo4.coverImgUrl"/>
                        <p>{{GobalInfo4.name}}</p>
                    </li>
                    <li>
                        <img :src="GobalInfo5.coverImgUrl"/>
                        <p>{{GobalInfo5.name}}</p>
                    </li>
                    <li>
                        <img :src="GobalInfo6.coverImgUrl"/>
                        <p>{{GobalInfo6.name}}</p>
                    </li>
                </ul>
            </section>
        </article>
    </div>
</template>

<script>
    import api from '../../api'
    export default{
        data(){
            return{
                rankInfo:{},
                newInfo:{},
                originalInfo:{},
                hotInfo:{},
                djInfo:{},
                GobalInfo1:{},
                GobalInfo2:{},
                GobalInfo3:{},
                GobalInfo4:{},
                GobalInfo5:{},
                GobalInfo6:{},
                djList:[],
                hotList:[],
                originalList:[],
                newList:[],
                rankList:[],
            }
        },
        methods:{
            getSuper(){
                api.getRankList(3).then(res=>{
                    this.rankInfo = res.data.result;
                    this.rankList = res.data.result.tracks.slice(0,3);
                })
            },
            getNewSong(){
                api.getRankList(0).then(res=>{
                    this.newInfo = res.data.result;
                    this.newList = res.data.result.tracks.slice(0,3);
                })
            },
            getOriginal(){
                api.getRankList(2).then(res=>{
                    this.originalInfo = res.data.result;
                    this.originalList = res.data.result.tracks.slice(0,3);
                })
            },
            getHot(){
                api.getRankList(1).then(res=>{
                    this.hotInfo = res.data.result;
                    this.hotList = res.data.result.tracks.slice(0,3);
                })
            },
            getDj(){
                api.getRankList(4).then(res=>{
                    this.djInfo = res.data.result;
                    this.djList = res.data.result.tracks.slice(0,3);
                })
            },
            getGlobal(){
//                for(let i=5;i<10;i++){
                    api.getRankList(10).then(res=>{
                        this.GobalInfo1 = res.data.result;
                    });
                    api.getRankList(6).then(res=>{
                        this.GobalInfo2 = res.data.result;
                    });
                    api.getRankList(12).then(res=>{
                        this.GobalInfo3 = res.data.result;
                    });
                    api.getRankList(8).then(res=>{
                        this.GobalInfo4 = res.data.result;
                    });
                    api.getRankList(9).then(res=>{
                        this.GobalInfo5 = res.data.result;
                    });
                    api.getRankList(5).then(res=>{
                        this.GobalInfo6 = res.data.result;
                    });
//                }
            }
        },
        mounted(){
            this.getSuper();
            this.getNewSong();
            this.getOriginal();
            this.getHot();
            this.getDj();
            this.getGlobal();
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    .page-rank{
        background: rgb(240,240,240);
        height: auto;
        width: 100%;
        .first-rank{
            width: 100%;
            height: auto;
            .rank-head{
                font-size: 0;
                padding: .5rem 0;
                p{
                    display: inline-block;
                    vertical-align: top;
                    border-left: .2rem solid red;
                    font-size: .75rem;
                    height: .8rem;
                    line-height: .8rem;
                    text-indent: .4rem;
                }
            }
            .rank-con{
                width: 100%;
                height: auto;
                ul{
                    list-style: none;
                    font-size: 0;
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;
                    height: auto;
                    li:nth-child(2),li:nth-child(2n+3){
                        margin-left: .5%;
                        margin-right: .5%;
                    }
                    li:nth-child(3){
                        margin: 0;
                    }
                    li{
                        display: inline-block;
                        vertical-align: top;
                        font-size: .65rem;
                        width: 33%;
                        position: relative;
                        img{
                            width: 100%;
                            vertical-align: top;
                        }
                        p{
                            transform: scale(.9);
                            vertical-align: top;
                            margin-bottom: .5rem;
                        }
                    }
                }
            }
            .rank-dj{
                margin-bottom: 1rem !important;
            }
            .rank-new,.rank-list,.rank-original,.rank-hot,.rank-dj{
                width: 100%;
                height: auto;
                border-bottom: 1px solid rgb(220,220,220);
                margin-bottom: .15rem;
                font-size: 0;
                img{
                    width: 5rem;
                    height: 5rem;
                    vertical-align: top;
                }
                ul{
                    display: inline-block;
                    width: 65%;
                    font-size: .65rem;
                    list-style: none;
                    padding: .7rem .5rem;
                    li{
                        height: 1rem;
                        line-height: 1rem;
                        overflow: hidden;
                        font-size: .65rem;
                        margin-bottom: .25rem;
                    }
                    li:last-child{
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
</style>