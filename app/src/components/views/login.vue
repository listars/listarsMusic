<template>
    <div class="page-login">
        <i @click="jumpIndex" class="back-icon">&#xe602;</i>
        <div class="login-con">
            <i class="login-icon">&#xe655;</i>
            <input v-model="phone" placeholder="手机号码" type="text"/>
            <input @keyup.enter="login(phone,password,username)" v-model="password" placeholder="密码" type="password"/>
            <button @click="login(phone,password,username)">登录</button>
        </div>
    </div>
</template>

<script>
    import { mapGetters,mapMutations } from 'vuex'
    import api from '../../api'
    export default{
        data(){
            return{
                phone:'',
                password:'',
                username:'',
                userImg:'',
            }
        },
        methods:{
            ...mapMutations([
                'getUsers'
            ]),
            jumpIndex(){
                this.$router.push({
                    path: '/'
                })
            },
            getLoginResource(){
                api.getLogin(this.phone,this.password).then(res=>{
                    this.username = res.data.profile;
                    window.sessionStorage.setItem('username',this.username.nickname);
                    window.sessionStorage.setItem('userImg',this.username.avatarUrl);
                })
            },
            login(phone,password,username){
                let users ={};
                this.username = username;
                users.nickname = username.nickname;
                users.avatarUrl = username.avatarUrl;
                users.backgroundUrl = username.backgroundUrl;
                this.$store.commit('getUsers',users);
                this.phone = phone;
                this.password = password;
                this.getLoginResource();
                if(this.phone == ''|| this.password == ''){
                    console.log('666')
                }else{
                    this.$router.push({
                        path: '/',
                        query:{
                            phone: phone,
                            password: password
                        }
                    })
                }
            }
        },
        computed:{
            ...mapGetters([
                'users'
            ])
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    .page-login{
        position: relative;
        width: 100%;
        .back-icon{
            font-family: iconfont;
            font-style: normal;
            font-size: .85rem;
            width: 2.5rem;
            line-height: 2.5rem;
            height: 2.5rem;
            text-align: center;
            top: 0;
            left: 0;
            display: block;
        }
        .login-con{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 80%;
            height: 7rem;
            margin: 2rem 10%;
            .login-icon{
                font-family: iconfont;
                font-style: normal;
                font-size: 1.2rem;
                width: 3rem;
                height: 3rem;
                line-height: 2.6rem;
                text-align: center;
                color: red;
                border: 1px solid red;
                border-radius: 50%;
            }
            input{
                width: 100%;
                height: 2rem;
                line-height: 2rem;
                border-radius: .3rem;
                border: 1px solid rgb(250,0,0);
                margin: 1rem 0 0 0;
                outline: none;
                padding-left: .5rem;
                font-size: .75rem;
            }
            button{
                margin-top: 1rem;
                color: #ffffff;
                width: 100%;
                height: 2rem;
                border: none;
                min-height: 2rem;
                border-radius: .3rem;
                background: rgb(255,10,50);
                line-height: 2rem;
            }
        }
    }
</style>