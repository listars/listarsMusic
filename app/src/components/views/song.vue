<template>
    <div class="page-song">
        <!--标题-->
        <div class="head-top">
            <span class="icon">&#xe602;</span>
            <div class="top-text">
                <p class="t-name">How Do I Lock</p>
                <p class="t-singer">周柏豪</p>
            </div>
            <span class="icon">&#xe64e;</span>
        </div>
        <!--唱片-->
        <div class="song-disc">
            <div class="disc-con">
                <img src="../../assets/song-sheet1.png" alt=""/>
            </div>
        </div>
        <!--功能1-->
        <ul class="head-nav">
            <li><span class="nav-icon">&#xe696;</span></li>
            <li><span class="nav-icon">&#xe61e;</span></li>
            <li><span class="nav-icon">&#xe669;</span></li>
            <li><span class="nav-icon">&#xe60f;</span></li>
        </ul>
        <!--进度条-->
        <div class="song-bar">
            <span class="bar-time">00:00</span>
            <p>
                <span class="progress"></span>
            </p>
            <span class="bar-time">04:00</span>
        </div>
        <!--功能2-->
        <ul class="song-nav">
            <li class="icon2">&#xe685;</span></li>
            <li class="icon2 big">&#xe6f7;</span></li>
            <li class="icon2 big play">&#xe74a;</span></li>
            <li class="icon2 big">&#xe601;</span></li>
            <li class="icon2">&#xe6b7;</span></li>
        </ul>
    </div>
</template>

<script>

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../assets/css/common.css";
    @keyframes mymove{
        0%   {transform:rotate(0deg);}
        100% {transform:rotate(360deg);}
    }
    .foot-play{
        /*display: none;*/
    }
    .page-song{
        z-index: 999;
        width: 100%;
        height: 100%;
        padding: 0 0 1.5rem 0;
        background: rgba(0,0,0,0.3);
        .song-bar{
            font-size: 0;
            display: flex;
            margin-bottom: .5rem;
            justify-content: space-between;
            width: 100%;
            .bar-time{
                display: inline-block;
                font-size: .5rem;
                color: #ffffff;
                vertical-align: top;
                width: 15%;
                text-align: center;
            }
            p{
                display: flex;
                align-items: center;
                height: auto;
                width: 70%;
                .progress{
                    position: relative;
                    display: inline-block;
                    vertical-align: middle;
                    width: 100%;
                    height: .1rem;
                    background: rgb(230,230,230);
                    border-radius: 2px;
                }
                .progress:after{
                    content: '';
                    position: absolute;
                    left: 0;
                    display: block;
                    width: 50%;
                    height: .1rem;
                    background: red;
                    border-radius: 2px;
                }
                .progress:before{
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: -.2rem;
                    width: .5rem;
                    height: .5rem;
                    display: block;
                    border-radius: 50%;
                    background: #ffffff;
                }
            }
        }
        .song-nav{
            width: 100%;
            list-style: none;
            display: flex;
            align-items: center;
            height: auto;
            font-size: 0;
            .icon2{
                width: 17%;
                font-family: "iconfont";
                font-size: 1rem;
                font-style: normal;
                text-align: center;
                color: rgb(220,220,220);
            }
            .big{
                width: 22%;
                font-size: 1rem;
                color: #ffffff;
            }
            .play{
                position: relative;
            }
            .play:after{
                content: '';
                display: block;
                position: absolute;
                width: 1.8rem;
                height: 1.8rem;
                border: 1px solid #ffffff;
                border-radius: 50%;
                left: 26%;
                top: -10%;
            }
        }
        .head-nav{
            margin: 0 auto .5rem auto;
            width: 80%;
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
                font-size: 1rem;
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
        .song-disc{
            padding: 32.5% 0;
            width: 100%;
            height: auto;
            .disc-con{
                background: url("../../assets/disc.png") no-repeat;
                background-size: 100%;
                width: 12rem;
                height: 12rem;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 auto;
                animation:mymove 8s infinite;
                animation-timing-function: linear;
                img{
                    width: 54%;
                    border-radius: 50%;
                }
            }
        }
        .head-top{
            width: 100%;
            height: 2.5rem;
            border-bottom: 1px solid rgb(220,220,220);
            font-size: 0;
            .top-text{
                display: inline-block;
                width: 76%;
                color: #ffffff;
                padding: .35rem 0 .35rem 0;
                text-indent: .2rem;
                .t-name{
                    font-size: .7rem;
                    line-height: 1rem;
                }
                .t-singer{
                    font-size: .65rem;
                    line-height: .8rem;
                    transform: scale(.9);
                    margin-left: -5%;
                    color: rgb(230,230,230);
                }
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
    }
</style>