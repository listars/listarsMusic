<template>
    <div class="page-search">
        <div class="sea-head">
            <a href="javascript:history.go(-1)" class="sea-icon">&#xe602;</a>
            <input @keyup.enter="jumpSearch(keywords)"
                   v-model="keywords"
                   placeholder="请搜索你想要的内容" class="sea-text" type="text"/>
        </div>
        <template v-if="searchShow">
            <ul class="promt">
                <p>热门搜索</p>
                <li @click="jumpSearch(item)" v-for="item of hotPromt">{{item}}</li>
            </ul>
        </template>
        <template v-else>
            <div>
                <ul class="sea-song">
                    <li v-for="(item,index) in searchSong">
                        <p>{{item.name}}</p>
                        <p>{{item.album.name}}</p>
                    </li>
                </ul>
            </div>
        </template>
        <!--<template v-if="suggestShow">-->
            <!--<div class="sea-suggest">-->
                <!--<ul>-->
                    <!--<div>搜索"{{keywords}}"</div>-->
                    <!--<li v-for="(item,index) in suggestList"><i>&#xe672;</i>{{item.name}}</li>-->
                <!--</ul>-->
            <!--</div>-->
        <!--</template>-->
    </div>
</template>

<script>
    import api from '../../api'
    export default{
        data(){
            return{
                keywords:'',
                searchSong: [],
                suggestList: [],
                hotPromt:['ARASHI','周柏豪','Truth','五月天','V6','Breathless','你不是真正的快乐','星空','G.E.M邓紫棋'],
                searchShow:true,
                suggestShow:true
            }
        },
        methods:{
            jumpSearch(keywords){
                this.keywords = keywords;
                if(this.keywords.trim()){
                    this.searchShow = false;
                    this.$router.push({
                        path: '/search',
                        query: {
                            keywords: keywords
                        }
                    })
                }
                this.getSearchResource()
            },
            getSearchResource(){
                api.getSearch(this.keywords,30,0,1).then(res=>{
                    this.searchSong = res.data.result.songs
                })
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    .page-search{
        position: relative;
        width: 100%;
        .sea-suggest{
            position: absolute;
            top: 0;
            width: 95%;
            height: 7rem;
            left: 2.5%;
            background: rgba(0,0,0,0.5);
            ul{
                width: 100%;
                list-style: none;
                height: auto;
                div{
                    width: 100%;
                    padding: .5rem;
                    font-size: .65rem;
                    color: cornflowerblue;
                    background: #ffffff;
                }
                li{
                    width: 100%;
                    padding: .5rem;
                    font-size: .65rem;
                    color: #999999;
                    background: #ffffff;
                    i{
                        display: inline-block;
                        vertical-align: top;
                        margin-right: .5rem;
                        font-size: .65rem;
                        font-family: iconfont;
                        font-style: normal;
                    }
                }
            }
        }
        .sea-song{
            width: 100%;
            height: auto;
            margin-top: 2.5rem;
            list-style: none;
            li{
                font-size: .75rem;
                padding: .35rem .75rem;
                border-bottom: 1px solid rgb(240,240,240);
            }
            p:nth-child(2){
                font-size: .65rem;
            }
        }
        .promt{
            width: 100%;
            height: auto;
            margin-top: 2.5rem;
            padding: .5rem;
            font-size: 0;
            /*background: rgb(245,245,245);*/
            p{
                font-size: .75rem;
                margin-bottom: .5rem;
            }
            li{
                display: inline-block;
                width: auto;
                padding: .15rem .75rem;
                font-size: .65rem;
                border-radius: .7rem;
                border: 1px solid gray;
                margin: 0 .5rem .5rem 0;
            }
        }
        .sea-head{
            background: red;
            position: fixed;
            top: 0;
            width: 100%;
            font-size: 0;
            height: 2.5rem;
            .sea-icon{
                font-family: iconfont;
                font-style: normal;
                font-size: 1rem;
                color: #ffffff;
                height: 2.5rem;
                line-height: 2.5rem;
                width: 15%;
                text-align: center;
                display: inline-block;
                vertical-align: top;
            }
            .sea-text{
                width: 80%;
                height: 2.3rem;
                color: #ffffff;
                background: none;
                border: none;
                outline: none;
                font-size: .75rem;
                border-bottom: 1px solid #ffffff;
            }
            input::-webkit-input-placeholder{
                color: rgba(255,255,255,.7);
                height: 2.3rem;
                line-height: 2.3rem;
                font-size: .75rem;
            }
        }
    }
</style>