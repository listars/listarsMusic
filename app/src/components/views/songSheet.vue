<template>
    <article class="page-sheet">
        <section class="sheet-head">
            <div class="head-top">
                <span class="icon">&#xe602;</span>
                <span class="top-text">歌单</span>
                <span class="icon">&#xe672;</span>
                <span class="icon">&#xe60f;</span>
            </div>
            <div class="head-con">
                <img src="../../assets/song-sheet.png" alt=""/>
                <div class="con-user">
                    <p class="sheet-name">我的歌单</p>
                    <div class="sheet-user">
                        <img src="../../assets/song-sheet1.png" alt=""/><span>不自主的冲动 ></span>
                    </div>
                </div>
            </div>
            <ul class="head-nav">
                <li><span class="nav-icon">&#xe696;</span><p>收藏</p></li>
                <li><span class="nav-icon">&#xe669;</span><p>评论</p></li>
                <li><span class="nav-icon">&#xe64e;</span><p>分享</p></li>
                <li><span class="nav-icon">&#xe61e;</span><p>下载</p></li>
            </ul>
        </section>
        <section class="sheet-con">
            <div class="con-head">
                <i class="iconfont">&#xe721;</i>
                <p>播放全部<span>(共{{songList.length}}首)</span></p>
                <i class="iconfont list">&#xe6b7;<span>多选</span></i>
            </div>
            <ul class="container">
                <li v-for="(item,index) in songList">
                    <span class="con-id">{{index+1}}</span>
                    <div class="con-song">
                        <p class="song-name">{{item.song}}</p>
                        <p class="singer">{{item.singer}} - {{item.album}}</p>
                        <span class="list2">&#xe60f;</span>
                    </div>
                </li>
            </ul>
        </section>
    </article>
</template>

<script>
    export default{
        components:{
        },
        data(){
            return{
                songList:[
                    { song: 'Cry for you', singer: '岚', album: 'Time' },
                    { song: '光年之外', singer: 'G.E.M.邓紫棋', album: '光年之外' },
                    { song: 'Supernova', singer: 'V6', album: 'Supernova' },
                    { song: '走狗', singer: '周柏豪', album: '传闻' },
                    { song: 'Everything', singer: '岚', album: 'Everything' },
                    { song: '5x10', singer: '岚', album: 'Arashi 10con' }
                ]
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    .page-sheet{
        @font-face {
            font-family: 'iconfont';  /* project id 304764 */
            src: url('//at.alicdn.com/t/font_y5378ju8a0d7k3xr.eot');
            src: url('//at.alicdn.com/t/font_y5378ju8a0d7k3xr.eot?#iefix') format('embedded-opentype'),
            url('//at.alicdn.com/t/font_y5378ju8a0d7k3xr.woff') format('woff'),
            url('//at.alicdn.com/t/font_y5378ju8a0d7k3xr.ttf') format('truetype'),
            url('//at.alicdn.com/t/font_y5378ju8a0d7k3xr.svg#iconfont') format('svg');
        }
        .sheet-head{
            width: 100%;
            height: auto;
            background: rgba(0,0,0,0.5);
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
                    .sheet-name{
                        font-size: .8rem;
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
                        width: 88%;
                        position: relative;
                        border-bottom: 1px solid rgb(240,240,240);
                        font-size: .75rem;
                        .song-name{
                            font-size: .65rem;
                            height: 1.5rem;
                            line-height: 1.5rem;
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
            }
        }
    }
</style>