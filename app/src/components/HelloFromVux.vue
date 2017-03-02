<template>
    <div>

        <div class="vux-demo" @click="showConfirm()">
            <img class="logo" src="../assets/vux_logo.png">
            <h1>{{shownConfirm}} </h1>
        </div>


        <group title="cell demo">
            <!--使用 router-link 跳转 -->
            <router-link to="hello">
                <cell title="Go to hello with router link" value="click me" is-link></cell>
            </router-link>

            <!--使用 router.push 跳转 -->
            <cell title="Go to hello with router push" @click.native="goNext" is-link></cell>

            <cell title="Vux Alert" @click.native="showVuxAlert">
                <slot>{{vshow}}</slot>
            </cell>

            <cell title="custom Alert" @click.native="showAlert">
                <slot>{{show}}</slot>
            </cell>
            <cell title="Counter with vux" @click.native="updateCountStatus">
                <slot>{{count | toFixed(3) }}</slot>
            </cell>

        </group>


        <confirm v-model="shownConfirm" title="confirm deleting the item"
                 @on-cancel="onCancel"
                 @on-confirm="onConfirm">
            <p style="text-align:center;"> Are you sure? </p>
        </confirm>


        <c-alert title="1122" v-model="show" @on-ok="onOk"></c-alert>

    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import {Group, Cell, Confirm, Alert} from 'vux'

    import CAlert from './alert.vue'
    import URLParser from '../tools/URLParser'
    import {MockService} from '../services'

    export default {
        components: {Confirm, Group, Cell, Alert, CAlert},
        data () {

            return {
                // note: changing this line won't causes changes
                // with hot-reload because the reloaded component
                // preserves its current state and we are modifying
                // its initial state.
                msg: 'Hello World!',
                vshow: false,
                show: false,
                shownConfirm: false,
                username: null,
            }
        },
        created(){

//            如何使用 tools
            var myParser = new URLParser('http://www.a.com/b/c/?q=123#top')

            console.log('======URLParser ', myParser)

//            如何发送一个 ajax 请求：
            MockService().get().then(res => {
                console.log('========== ajax', res)
            })
        },
        computed: {
            ...mapState({
                count: state => state.vux.count
            })
        },
        methods: {
            ...mapActions([
                'updateCountStatus'
            ]),
            goNext(){
                this.$router.push({path: 'hello'})
            },
            showVuxAlert(){
                this.$vux.alert.show({
                    title: 'Vux is Cool',
                    content: 'Do you agree?',
                    onShow () {
                        console.log('Plugin: I\'m showing')
                    },
                    onHide () {
                        console.log('Plugin: I\'m hiding')
                    }
                })
            },
            showAlert(){
                this.show = true
            },
            showConfirm(){
                this.shownConfirm = true
                return

                this.$vux.confirm.show({
                    title: 'Title',
                    content: 'Content',
                    onShow () {
                        console.log('plugin show')
                    },
                    onHide () {
                        console.log('plugin hide')
                    },
                    onCancel () {
                        console.log('plugin cancel')
                    },
                    onConfirm () {
                        console.log('plugin confirm')
                    }
                })

            },
            onCancel () {
                console.log('on cancel')
            },
            onConfirm () {
//                debugger
                console.log('on confirm')
            },
            onOk () {
                console.log('on ok')
            },
        }
    }
</script>
<style lang="less" rel="stylesheet/less" scoped>
    .vux-demo {
        text-align: center;
    }
    .logo {
        width: 100px;
        height: 100px
    }
</style>