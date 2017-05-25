<template>
    <div>
        <router-view></router-view>
        <template v-if="footShow">
            <footer class="foot-play">
                <audio :src="audio.location" id="lMusic" autoplay></audio>
                <img @click="showSong" class="foot-img" :src="audio.pic" alt=""/>
                <div class="foot-song">
                    <p class="song-name">{{audio.name}}</p>
                    <p class="song-lyric">{{audio.singer}}</p>
                </div>
                <span class="foot-icon play">&#xe623;</span>
                <span class="foot-icon">&#xe6b7;</span>
            </footer>
        </template>
    </div>
</template>

<script>
    import { mapMutations,mapGetters} from 'vuex'
    export default{
        data(){
            return{
                footShow:false
//                TimeSong:''
            }
        },
        methods:{
//            getMusicTime(){
//                let lAudio = document.getElementById('lMusic');
//                let mTime = parseInt(lAudio.duration);
//                let cTime = parseInt(lAudio.currentTime);
//                let minute = Math.floor(mTime/60);
//                let min =Math.floor(cTime/60);
//                let second = mTime%60;
//                let sec = cTime%60;
//                let startT = min + ':' + sec;
//                let songTime = minute + ':' + second;
//                this.$store.commit('getSongTime',songTime);
//                this.$store.commit('getSongT',mTime);
//                this.$store.commit('getStartTime',startT);
//                console.log(startT);
//                console.log(songTime);
//                console.log(mTime);
//                songTime = this.TimeSong;
//            },
            ...mapMutations([
                'showSong',
//                'getSongTime',
//                'getStartTime'
            ])
        },
        updated(){
//            this.getMusicTime()
        },
        computed:{
            ...mapGetters([
                'audio',
//                'mTime',
//                'songTime',
//                'startT'
            ])
        }
    }
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
                width: 100%;
                line-height: 1.2rem;
                height: 1rem;
                overflow: hidden;
            }
            .song-lyric{
                font-size: .65rem;
                transform: scale(.8);
                color: #777777;
                width: 100%;
                margin-left: -10%;
                height: 1rem;
                overflow: hidden;
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
