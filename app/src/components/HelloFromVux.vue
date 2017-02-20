<template>
    <div>
        <div class="vux-demo" @click="showConfirm()">
            <img class="logo" src="../assets/vux_logo.png">
            <h1>{{shownConfirm}} </h1>
        </div>

        <group title="cell demo">
            <router-link to="hello">
                <cell title="Hello" value="Cool" is-link></cell>
            </router-link>

            <cell title="Vux Alert" @click.native="showVuxAlert">
                <slot>{{vshow}}</slot>
            </cell>

            <cell title="custom Alert" @click.native="showAlert">
                <slot>{{show}}</slot>
            </cell>
            <cell title="Counter" @click.native="updateCountStatus">
                <slot>{{count}}</slot>
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
                shownConfirm: false
            }
        },
        created(){
            var myParser = new URLParser('http://www.a.com/b/c/?q=123#top')
debugger
            console.log(myParser)
        },
        computed: mapState({
            count: state => state.vux.count
        }),
        methods: {
            ...mapActions([
                'updateCountStatus'
            ]),
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
<style>
    .vux-demo {
        text-align: center;
    }
    .logo {
        width: 100px;
        height: 100px
    }
</style>