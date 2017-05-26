<template>
    <div class="page-anchor">
        <header class="anchor-head"><p>精彩节目推荐</p></header>
        <ul class="anchor-con">
            <li v-for="(item,index) in anchorList">
                <img :src="item.coverUrl"/>
                <div>
                    <p>{{item.name}}</p>
                    <p>{{item.reason}}</p>
                </div>
            </li>
        </ul>
        <header class="anchor-head"><p>热门歌手</p></header>
        <section class="anchor-singer">
            <ul>
                <li v-for="(item,index) in singerList">
                    <img :src="item.picUrl"/>
                    <p>{{item.name}}</p>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    import api from '../../api'
    export default{
        data(){
            return{
                anchorList:[],
                singerList:[]
            }
        },
        methods:{
            getAnchor(){
                api.getAnchorList().then(res=>{
                    this.anchorList = res.data.programs;
                })
            },
            getSinger(){
                api.getSingerList(30,0).then(res=>{
                    this.singerList = res.data.artists;
                })
            }
        },
        mounted(){
            this.getAnchor();
            this.getSinger();
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    .page-anchor{
        background: rgb(245,245,245);
        .anchor-head{
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
        .anchor-con{
            width: 100%;
            height: auto;
            margin-bottom: 1rem;
            list-style: none;
            li{
                width: 100%;
                height: auto;
                margin-bottom: .1rem;
                border-bottom: 1px solid rgb(230,230,230);
                font-size: 0;
                img{
                    vertical-align: top;
                    width: 25%;
                }
                div{
                    display: inline-block;
                    font-size: .75rem;
                    width: 75%;
                    padding: .75rem .5rem;
                    p{
                        width: 100%;
                        height: 1.5rem;
                        line-height: 1.5rem;
                        overflow: hidden;
                    }
                }
            }
        }
        .anchor-singer{
            width: 100%;
            height: auto;
            ul{
                list-style: none;
                font-size: 0;
                display: flex;
                flex-wrap: wrap;
                width: 100%;
                height: auto;
                li{
                    display: inline-block;
                    vertical-align: top;
                    font-size: .65rem;
                    width: 33%;
                    margin-bottom: .15rem;
                    position: relative;
                    img{
                        width: 100%;
                        height: 5.25rem;
                        vertical-align: top;
                    }
                    p{
                        text-indent: .2rem;
                    }
                }
                li:nth-child(2),li:nth-child(3n+2){
                    margin-left: .5%;
                    margin-right: .5%;
                }
                li:nth-child(3n),li:nth-child(3n+1){
                    margin: 0;
                }
            }
        }
    }
</style>