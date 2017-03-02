<template>
    <div>
        <div class="mask" v-show="showValue">
            <div class="alert">
                <div class="contnet">{{title}}</div>
                <button type="button" @click="onOk">确定</button>
                <input style="display:none" v-model="showValue">
            </div>
        </div>

    </div>

</template>

<script>

    export default {
        props: {
            value: {
                type: Boolean,
                default: false
            },
            title: String
        },
        created () {
            this.showValue = this.show
            if (typeof this.value !== 'undefined') {
                this.showValue = this.value
            }
        },
        watch: {
            value (val) {
                this.showValue = val
            },
            showValue (val) {
                this.$emit('input', val)
            }
        },
        data () {
            return {
                showValue: false
            }
        },
        methods: {
            onOk () {
                this.showValue = false
                this.$emit('on-ok')
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .mask { position: fixed; left: 0; top: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.64); }
    .alert { position: fixed; width: 160px;  background-color: #fff; border: 1px solid #ccc; border-radius: 5px; text-align: center; top: 50%; left: 50%; margin: -20px 0 0 -80px; }
</style>
