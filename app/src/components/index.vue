<template>
    <div class="page-home">
        <m-head></m-head>
        <nav class="home-nav">
            <span :class="{active:navNum == index}"
                  @click="navNum = index"
                  v-for="(item,index) in navList">{{item.name}}</span>
        </nav>
        <article class="home-con">
            <section v-if="navNum==0">
                <recommend></recommend>
            </section>
            <section v-if="navNum==1">666</section>
            <section v-if="navNum==2">3</section>
            <section v-if="navNum==3">4</section>
        </article>
    </div>
</template>

<script>
    import MHead from './views/head.vue'
    import Recommend from './views/recommend.vue'
    export default {
        components:{
            MHead,Recommend
        },
        data(){
            return{
                navNum: 0,
                index: 1,
                navList: [
                    {
                        name: '个性推荐'
                    },
                    {
                        name: '歌单'
                    },
                    {
                        name: '主播电台'
                    },
                    {
                        name: '排行榜'
                    }
                ]
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    .page-home{
        .home-nav{
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