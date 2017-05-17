<template>
    <div class="page-recommend">
        <!--轮播-->
        <swiper class="home-recom">
            <swiper-item class="black"><h2 class="title fadeInUp animated">它无孔不入</h2></swiper-item>
            <swiper-item class="black"><h2 class="title fadeInUp animated">你无处可藏</h2></swiper-item>
            <swiper-item class="black"><h2 class="title fadeInUp animated">不是它可恶</h2></swiper-item>
            <swiper-item class="black"><h2 class="title fadeInUp animated">而是它不懂你</h2></swiper-item>
        </swiper>
        <!--导航-->
        <article class="recom-nav">
            <ul>
                <li>
                    <div class="nav-img fm"></div>
                    <p class="nav-text">私人FM</p>
                </li>
                <li>
                    <div class="nav-img date">
                        <p class="num">11</p>
                    </div>
                    <p class="nav-text">每日歌曲推荐</p>
                </li>
                <li>
                    <div class="nav-img rank"></div>
                    <p class="nav-text">云音乐热榜</p>
                </li>
            </ul>
        </article>
        <!--推荐歌单-->
        <article class="recom-music">
            <header class="music-head"><p>推荐歌单</p><span></span></header>
            <section class="music-con">
                <ul>
                    <li v-for="(item,index) in songSheet">
                        <span>{{item.num}}</span>
                        <img :src="item.img" alt=""/>
                        <p>{{item.text}}</p>
                    </li>
                </ul>
            </section>
        </article>
        <!--独家放送-->
        <article class="recom-music">
            <header class="music-head"><p>独家放送</p><span></span></header>
            <section class="music-sole">
                <ul>
                    <li v-for="(item,index) in soleList">
                        <img :src="item.img" alt=""/>
                        <p>{{item.text}}</p>
                    </li>
                </ul>
            </section>
        </article>
        <!--最新音乐-->
        <article class="recom-music">
            <header class="music-head"><p>最新音乐</p><span></span></header>
            <section class="music-con">
                <ul>
                    <li v-for="(item,index) in newSong">
                        <img :src="item.img" alt=""/>
                        <p>{{item.text}}</p>
                    </li>
                </ul>
            </section>
        </article>
        <!--推荐MV-->
        <article class="recom-music">
            <header class="music-head"><p>推荐MV</p><span></span></header>
            <section class="music-mv">
                <ul>
                    <li v-for="(item,index) in mvList">
                        <span>{{item.num}}</span>
                        <img :src="item.img" alt=""/>
                        <div>
                            <p>{{item.title}}</p>
                            <p style="color: #666666">{{item.name}}</p>
                        </div>
                    </li>
                </ul>
            </section>
        </article>
        <!--精选专栏-->
        <article class="recom-music">
            <header class="music-head"><p>精选专栏</p><span></span></header>
            <section class="music-column">
                <ul>
                    <li v-for="(item,index) in columnList">
                        <div class="column-text">
                            <p class="text1"><span>专栏</span>{{item.text}}</p>
                            <p class="text2">阅读 {{item.num}}</p>
                        </div>
                        <div class="column-img"><img :src="item.img" alt=""/></div>
                    </li>
                </ul>
            </section>
        </article>
        <!--主播电台-->
        <article class="recom-music">
            <header class="music-head"><p>主播电台</p><span></span></header>
            <section class="music-radio">
                <ul>
                    <li v-for="(item,index) in songSheet">
                        <div class="radio-img">
                            <p class="img-text">123</p>
                            <span></span>
                            <img :src="item.img" alt=""/>
                        </div>
                        <p>{{item.text}}</p>
                    </li>
                </ul>
            </section>
        </article>
        <!--自我介绍-->
        <footer class="recom-foot">
            <p>点击了解我的更多信息</p>
            <div>Listars</div>
        </footer>
    </div>
</template>

<script>
    import {Swiper, SwiperItem} from 'vux'
    export default{
        components:{
            Swiper,SwiperItem
        },
        data(){
            return{
                songSheet:[
                    { num: '1200', img: require('../../assets/song-sheet.png'), text:'私は誰ですか' },
                    { num: '20', img: require('../../assets/song-sheet.png'), text:'吟诗作对膜蛤起，谈笑风生又一年' },
                    { num: '201', img: require('../../assets/song-sheet.png'), text:'膜蛤队长' },
                    { num: '23333', img: require('../../assets/song-sheet.png'), text:'Too Young Too Native' },
                    { num: '1', img: require('../../assets/song-sheet.png'), text:'苟利国家生死以，岂因祸福避趋之' },
                    { num: '20万', img: require('../../assets/song-sheet.png'), text:'呱~呱~呱~呱~呱~呱~' }
                ],
                newSong:[
                    { img: require('../../assets/song-sheet.png'), text:'私は誰ですか' },
                    { img: require('../../assets/song-sheet.png'), text:'吟诗作对膜蛤起，谈笑风生又一年' },
                    { img: require('../../assets/song-sheet.png'), text:'膜蛤队长' },
                    { img: require('../../assets/song-sheet.png'), text:'Too Young Too Native' },
                    { img: require('../../assets/song-sheet.png'), text:'苟利国家生死以，岂因祸福避趋之' },
                    { img: require('../../assets/song-sheet.png'), text:'呱~呱~呱~呱~呱~呱~' }
                ],
                soleList:[
                    { img: require('../../assets/img-sole.png'), text:'hhhh苟利国家生死以，岂因祸福避趋之,23333333' },
                    { img: require('../../assets/img-sole.png'), text:'hhhh苟利国家生死以，岂因祸福避趋之,23333333' },
                    { img: require('../../assets/img-sole.png'), text:'hhhh苟利国家生死以，岂因祸福避趋之,23333333' }
                ],
                mvList:[
                    { num: '1200', img: require('../../assets/img-sole.png'), title:'5x10', name:'岚' },
                    { num: '66万', img: require('../../assets/img-sole.png'), title:'光年之外', name:'邓紫棋' },
                    { num: '41232', img: require('../../assets/img-sole.png'), title:'Supernova', name:'V6' },
                    { num: '233', img: require('../../assets/img-sole.png'), title:'Everything', name:'Arashi' },
                ],
                columnList:[
                    { num: '666', img: require('../../assets/img-sole.png'), text:'原谅大礼包是什么样的滋味，当然是原谅他拉' },
                    { num: '2333', img: require('../../assets/img-sole.png'), text:'欢迎江泽蛤做客膜蛤大讲堂，将为我们带来膜蛤新姿势' },
                    { num: '10487', img: require('../../assets/img-sole.png'), text:'年轻人不要怂，能多续就多续，+1s' },
                ]
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    .page-recommend{
        .home-recom{
            height: 7rem;
        }
        .black {
            background-color: #000;
        }
        .title{
            line-height: 7rem;
            text-align: center;
            color: #fff;
        }
        .animated {
            animation-duration: 1s;
            animation-fill-mode: both;
        }
        @-webkit-keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translate3d(0, 100%, 0);
            }
            100% {
                opacity: 1;
                transform: none;
            }
        }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translate3d(0, 100%, 0);
            }
            100% {
                opacity: 1;
                transform: none;
            }
        }
        .fadeInUp {
            animation-name: fadeInUp;
        }
        .recom-nav{
            padding: 1rem 0 .5rem 0;
            ul{
                list-style: none;
                width: 100%;
                height: auto;
                display: flex;
                justify-content: space-between;
                font-size:0;
                li{
                    text-align: center;
                    display: inline-block;
                    vertical-align: top;
                    width: 33.33%;
                    font-size: .6rem;
                    .nav-img{
                        margin: 0 auto;
                        width: 2rem;
                        height: 2rem;
                        border: 1px solid red;
                        border-radius: 50%;
                    }
                    .fm{
                        background: url("../../assets/icon-radio.png") no-repeat;
                        background-size: 60%;
                        background-position: .4rem .3rem;
                    }
                    .date{
                        background: url("../../assets/icon-calendar.png") no-repeat;
                        background-size: 60%;
                        background-position: .4rem .3rem;
                        position: relative;
                        .num{
                            position: absolute;
                            top: .5rem;
                            left: .5rem;
                            color: red;
                            width: .9rem;
                            height: auto;
                            text-align: center;
                            transform: scale(0.7);
                        }
                    }
                    .rank{
                        background: url("../../assets/icon-rank.png") no-repeat;
                        background-size: 60%;
                        background-position: .4rem .3rem;
                    }
                    .nav-text{
                        margin-top: .1rem;
                    }
                }
            }
        }
        .recom-foot{
            width: 100%;
            height: 4.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-top: .1rem solid rgb(230,230,230);
            p{
                font-size: .75rem;
                margin-top: -.5rem;
                margin-bottom: .25rem;
                color: #999999;
            }
            div{
                width: 5rem;
                height: 1.5rem;
                line-height: 1.3rem;
                text-align: center;
                font-size: .8rem;
                border-radius: 1rem;
                border: .1rem solid red;
                color: #666666;
            }
        }
        .recom-music{
            margin-bottom: .5rem;
            width: 100%;
            height: auto;
            .music-head{
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
                span{
                    display: inline-block;
                    vertical-align: top;
                    width: .8rem;
                    height: .8rem;
                    margin-left: .2rem;
                    background: url("../../assets/icon-arrow.png") no-repeat;
                    background-size: 100% 100%;
                }
            }
            .music-radio{
                width: 100%;
                height: auto;
                ul{
                    list-style: none;
                    font-size: 0;
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;
                    height: auto;
                    li:nth-child(2),li:nth-child(5){
                        margin-left: .5%;
                        margin-right: .5%;
                    }
                    li{
                        display: inline-block;
                        vertical-align: top;
                        font-size: .65rem;
                        width: 33%;
                        .radio-img{
                            position: relative;
                            width: 100%;
                            img{
                                width: 100%;
                                vertical-align: top;
                            }
                            .img-text{
                                position: absolute;
                                bottom: 0;
                                margin-bottom: 0;
                                color: #ffffff;
                                height: 1.5rem;
                                line-height: 1.5rem;
                                background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8));
                                transform: none;
                                width:100%;
                                text-indent: .5rem;
                            }
                            span{
                                position: absolute;
                                display: block;
                                bottom: .25rem;
                                right: .25rem;
                                width: 1rem;
                                height: 1rem;
                                border-radius: 50%;
                                background: url("../../assets/icon-play.png") no-repeat;
                                background-size: 100%;
                                z-index: 1000;
                            }
                        }
                        p{
                            transform: scale(.9);
                            vertical-align: top;
                            margin-bottom: .5rem;
                        }
                    }
                }
            }
            .music-con{
                width: 100%;
                height: auto;
                ul{
                    list-style: none;
                    font-size: 0;
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;
                    height: auto;
                    li:nth-child(2),li:nth-child(5){
                        margin-left: .5%;
                        margin-right: .5%;
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
                        span{
                            position: absolute;
                            display: block;
                            color: #ffffff;
                            top: .1rem;
                            right: .2rem;
                            font-size: .65rem;
                            height: .85rem;
                            line-height: .85rem;
                        }
                        span:after{
                            content: '';
                            position: absolute;
                            left: -1rem;
                            top: .05rem;
                            width: .85rem;
                            height: .85rem;
                            background: url("../../assets/icon-headset.png") no-repeat;
                            background-size: 90%;
                        }
                    }
                }
            }
            .music-column{
                width: 100%;
                height: auto;
                ul{
                    list-style: none;
                    li{
                        display: flex;
                        margin-bottom: .25rem;
                        .column-text{
                            position: relative;
                            width: 62%;
                            padding: .5rem;
                            .text1{
                                font-size: .75rem;
                                span{
                                    display: inline-block;
                                    vertical-align: top;
                                    font-size: .6rem;
                                    width: 2.2rem;
                                    height: 1.1rem;
                                    line-height: .9rem;
                                    text-align: center;
                                    color: red;
                                    border: 1px solid red;
                                    transform: scale(.8);
                                    margin-right: .2rem;
                                }
                            }
                            .text2{
                                position: absolute;
                                bottom: .5rem;
                                left: .8rem;
                                font-size: .65rem;
                                color: #999999;
                                transform: scale(.95);
                            }
                        }
                        .column-img{
                            width: 38%;
                            height: 5rem;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
            }
            .music-mv{
                width: 100%;
                height: auto;
                ul{
                    list-style: none;
                    display: flex;
                    flex-wrap: wrap;
                    font-size: 0;
                    li{
                        display: inline-block;
                        font-size: .75rem;
                        vertical-align: top;
                        position: relative;
                        width: 49.7%;
                        span{
                            position: absolute;
                            display: block;
                            color: #ffffff;
                            top: .1rem;
                            right: .2rem;
                            font-size: .65rem;
                            height: .85rem;
                            line-height: .85rem;
                        }
                        span:after{
                            content: '';
                            position: absolute;
                            left: -1.2rem;
                            width: .85rem;
                            height: .85rem;
                            background: url("../../assets/icon-video.png") no-repeat;
                            background-size: 100%;
                        }
                        img{
                            vertical-align: top;
                            width: 100%;
                        }
                        div{
                            transform: scale(.9);
                            margin-bottom: .25rem;
                        }
                    }
                    li:nth-child(1),li:nth-child(3){
                        margin-right: .5%;
                    }
                }
            }
            .music-sole{
                width: 100%;
                height: auto;
                ul{
                    list-style: none;
                    font-size: 0;
                    li{
                        display: inline-block;
                        font-size: 0;
                        position: relative;
                        width: 49.7%;
                        img{
                            width: 100%;
                            vertical-align: top;
                        }
                        p{
                            display: inline-block;
                            vertical-align: top;
                            height: auto;
                            font-size: .65rem;
                            margin-bottom: .5rem;
                            transform: scale(.9);
                        }
                    }
                    li:nth-child(1){
                        margin-right: .5%;
                    }
                    li:after{
                        content: '';
                        position: absolute;
                        display: block;
                        width: 1rem;
                        height: 1rem;
                        border: 1px solid #f0f0f0;
                        border-radius: 50%;
                        z-index: 99;
                        top: .2rem;
                        left: .4rem;
                        background: url("../../assets/icon-list.png") no-repeat;
                        background-size: 80%;
                        background-position: .1rem;
                        /*transform: scale(.9);*/
                    }
                    li:last-child{
                        margin-bottom: .5rem;
                        width: 100%;
                        img{
                            width: 100%;
                            height: 6.56rem;
                        }
                    }
                }
            }
        }
    }
</style>