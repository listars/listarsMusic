<template>
    <div class="page-head">
        <header class="home-head">
            <ul>
                <li class="list"></li>
                <li class="music"></li>
                <li class="logo"></li>
                <li class="user"></li>
                <li class="search"></li>
            </ul>
        </header>
    </div>
</template>

<script>
</script>

<style lang="less" rel="stylesheet/less">
    .page-head{
        .home-head{
            ul{
                list-style: none;
                height: 2.5rem;
                background: red;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            li{
                float: left;
                width: 2.5rem;
                height: 2.5rem;
            }
            .list{
                background: url("../../assets/icon-list.png") no-repeat;
                background-size: 1rem 1rem;
                background-position: .5rem;
                margin-right: -.7rem;
                margin-left: .5rem;
            }
            .music{
                background: url("../../assets/icon-music.png") no-repeat;
                background-size: 1rem 1rem;
                background-position: .6rem;
                margin-right: -2rem;
            }
            .user{
                background: url("../../assets/icon-user.png") no-repeat;
                background-size: 1.2rem 1.2rem;
                background-position: .6rem;
                margin-left: -2rem;
            }
            .logo{
                background: url("../../assets/icon-logo.png") no-repeat;
                background-size: 1.4rem 1.4rem;
                background-position: .5rem .5rem;
            }
            .search{
                background: url("../../assets/icon-search.png") no-repeat;
                background-size: 1.4rem 1.4rem;
                background-position: .5rem .5rem;
                margin-right: .5rem;
            }
        }
    }
</style>