<template>
    <div class="page-history">
        <x-header :left-options="{backText:''}">播放记录</x-header>
        <ul class="history-list">
            <li v-for="(item,index) in recordlist">
                <p class="song-name">{{item.song.name}}</p>
                <p class="song-singer">{{item.song.ar[0].name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import { XHeader } from 'vux'
    import api from '../../api'
    export default{
        components:{
            XHeader
        },
        data(){
            return{
                recordlist:[]
            }
        },
        methods:{
            getRecordResource(){
                this.uid = window.sessionStorage.getItem('uid');
                api.getRecordList(this.uid,1).then(res=>{
                    this.recordlist = res.data.weekData;
                },res=>{
                    console.log(res);
                })
            }
        },
        mounted(){
            this.getRecordResource()
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    .page-history{
        height: auto;
        width: 100%;
        .vux-header{
            background: red !important;
            height: 2.5rem;
        }
        .vux-header-title{
            font-size: .85rem !important;
        }
        .left-arrow:before{
            border: 1px solid #fff !important;
            border-width: 1px 0 0 1px !important;
        }
        .history-list{
            width: 100%;
            height: auto;
            padding: 0 .5rem;
            list-style: none;
            li{
                width: 100%;
                height: auto;
                padding: .25rem .5rem;
                border-bottom: 1px solid rgb(230,230,230);
                .song-name{
                    font-size: .75rem;
                    color: #333333;
                }
                .song-singer{
                    font-size: .65rem;
                    color: #999999;
                    transform: scale(.9);
                    margin-left: -5%;
                }
            }
        }
    }
</style>