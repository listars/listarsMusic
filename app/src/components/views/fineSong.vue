<template>
    <div class="page-fineSong">
        <div class="fine-head">
            <p><a href="javascript:history.go(-1)" class="head-icon">&#xe602;</a>精品歌单</p>
        </div>
        <ul class="fine-list">
            <li v-for="(item,index) in fineSong">
                <div @click="jumpPlaylists(item.id)" class="list-img">
                    <i>&#xe6b8;</i>
                    <span class="fineCount">&#xe63e; {{item.playCount}}</span>
                    <img :src="item.coverImgUrl"/>
                </div>
                <div class="list-text">
                    <p class="t-name">{{item.name}}</p>
                    <p class="t-nickname">by {{item.creator.nickname}}</p>
                    <p class="t-type"><span>{{item.tags[0]}}</span>{{item.copywriter}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import api from '../../api'
    export default{
        components:{
        },
        data(){
            return{
                fineSong:{}
            }
        },
        methods:{
            getFineSong(){
                api.getHighQuality(20,0).then(res=>{
                    this.fineSong = res.data.playlists;
                }).catch(res=>{
                    console.log(res)
                })
            },
            //获取播放数量转换
            getChangeNum(i){
                let fCount = document.getElementsByClassName('fineCount');
//                console.log(this.fineSong[i].playCount);
                let num = (this.fineSong[i].playCount).toString();
                if(num.length > 4){
                    let num2 = num.slice(0,-4);
                    fCount[i].innerHTML = num2 + '万';
                }
            },
            //获取fineSong里的个数，每个都变换
            getNum(){
                let lenght = this.fineSong.length;
                for(let i=0;i<lenght;i++){
                    this.getChangeNum(i);
                }
            },
            jumpPlaylists(id){
                this.$router.push({
                    path: '/playlists/' + id
                })
            }
        },
        mounted(){
            this.getFineSong();
        },
        updated(){
            this.getNum();
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    .page-fineSong{
        overflow: hidden;
        height: auto;
        width: 100%;
        .fine-head{
            position: fixed;
            z-index: 99999;
            width: 100%;
            height: 2.5rem;
            line-height: 2.5rem;
            background: red;
            p{
                color: #ffffff;
                font-size:.85rem;
                .head-icon{
                    color: #ffffff;
                    font-family: iconfont;
                    font-style: normal;
                    width: 2.5rem;
                    height: 2.5rem;
                    line-height: 2.5rem;
                    text-align: center;
                    display: inline-block;
                }
            }
        }
        .fine-list{
            margin-top: 2.5rem;
            width: 100%;
            height: auto;
            list-style: none;
            li{
                padding-top: .1rem;
                width: 100%;
                font-size: 0;
                border-bottom: 1px solid rgb(220,220,220);
                height: auto;
                .list-img{
                    display: inline-block;
                    vertical-align: top;
                    position: relative;
                    overflow: hidden;
                    width: 30%;
                    img{
                        width: 100%;
                    }
                    i{
                        font-family: iconfont;
                        font-style: normal;
                        font-size: .65rem;
                        color: #ffffff;
                        position: absolute;
                        top: -.2rem;
                        left: -.7rem;
                        transform: rotate(-45deg);
                        display: inline-block;
                        width: 2rem;
                        height: 1rem;
                        line-height: 1.2rem;
                        text-align: center;
                        background: orange;
                    }
                    span{
                        position: absolute;
                        display: inline-block;
                        width: 100%;
                        top: 0;
                        text-align: right;

                        padding: .1rem .2rem 0 0;
                        font-size: .65rem;
                        color: #ffffff;
                        font-family: iconfont;
                        font-style: normal;
                    }
                }
                .list-text{
                    width: 70%;
                    height: auto;
                    padding: .65rem .5rem;
                    display: inline-block;
                    font-size: .75rem;
                    .t-name{
                        font-size: .75rem;
                        width: 100%;
                        height: 1.5rem;
                        line-height: 1.5rem;
                        overflow: hidden;
                    }
                    .t-nickname{
                        font-size: .65rem;
                        margin: .2rem 0;
                        color: rgb(200,200,200);
                    }
                    .t-type{
                        font-size: .65rem;
                        color: gray;
                        height: 1.3rem;
                        overflow: hidden;
                        line-height: 1.3rem;
                        span{
                            display: inline-block;
                            vertical-align: top;
                            width: 2rem;
                            height: 1.3rem;
                            font-size: .65rem;
                            line-height: 1.2rem;
                            text-align: center;
                            color: red;
                            border: 1px solid red;
                            transform: scale(.6);
                            margin-left: -3%;
                        }
                    }
                }
            }
        }
    }
</style>