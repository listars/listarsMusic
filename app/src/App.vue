<template>
    <div>
        <router-view></router-view>
        <footer class="foot-play">
            <img class="foot-img" src="./assets/song-sheet.png" alt=""/>
            <div class="foot-song">
                <p class="song-name">Dragon Night</p>
                <p class="song-lyric">Today is</p>
            </div>
            <span class="foot-icon play">&#xe623;</span>
            <span class="foot-icon">&#xe6b7;</span>
        </footer>
    </div>
</template>

<script>
</script>

<style lang="less" rel="stylesheet/less" >
    @import '~vux/src/styles/reset.less';
    @import './assets/css/common.css';
    body {
        background-color: rgb(248,248,248);
    }
    .foot-play{
        z-index: 100;
        background: #ffffff;
        font-size: 0;
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        align-items: center;
        height: 2.5rem;
        padding: .25rem;
        .foot-img{
            display: inline-block;
            vertical-align: middle;
            width: 10%;
        }
        .foot-song{
            display: inline-block;
            vertical-align: top;
            text-indent: .5rem;
            width: 70%;
            .song-name{
                font-size: .65rem;
                transform: scale(.9);
                margin-left: -5%;
            }
            .song-lyric{
                font-size: .65rem;
                transform: scale(.8);
                color: #777777;
                width: 100%;
                margin-left: -9%;
            }
        }
        .foot-icon{
            font-family: "iconfont";
            font-size: .85rem;
            font-style: normal;
            width: 10%;
            display: inline-block;
            vertical-align: top;
            text-align: center;
            height: 2rem;
            line-height: 2rem;
            position: relative;
        }
        .foot-icon.play{
            color: red;
        }
        .foot-icon.play:after{
            content: '';
            position: absolute;
            width: 1rem;
            height: 1rem;
            display: block;
            border: 1px solid red;
            border-radius: 50%;
            top: 20%;
            left: 20%;
        }
    }
</style>
