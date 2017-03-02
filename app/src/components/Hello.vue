<template>
    <div class="hello">
        <h1>表单验证： validator</h1>
        <h2></h2>
        <ul></ul>

        <validation name="validation1">
            <validity field="username" :validators="{ minlength: 5, required: true }">
                <input id="username" type="text" @input="handleValidate">
            </validity>

            <validity ref="validity" field="lang" :validators="{ required: true }">
                <select @change="$refs.validity.validate()">
                    <option value="">----- select your favorite programming language -----</option>
                    <option value="javascript">JavaScript</option>
                    <option value="ruby">Ruby</option>
                    <option value="python">Python</option>
                    <option value="none">Not a nothing here</option>
                </select>
            </validity>

            <input type="submit" value="send" v-if="valid">


            <div class="errors">
                <p class="username-invalid" v-if="usernameInvalid">Invalid yourname inputting !!</p>
                <p class="password-invalid" v-if="passwordInvalid">Invalid password inputting !!</p>
                <p class="confirm-invalid" v-if="confirmInvalid">Invalid confirm password inputting !!</p>
                <p v-if="langInvalid">language is Required !!</p>
            </div>

            <div class="debug">
                <p>validation result info</p>
                <pre>{{$validation}}</pre>
            </div>
        </validation>


    </div>
</template>

<script>
    import VueValidator from 'vue-validator'

    export default {
        name: 'hello',
        data () {
            return {
                validation: {result: {}},
            }
        },
        computed: {
            ... VueValidator.mapValidation({
                valid: '$validation.validation1.valid',
                usernameInvalid: '$validation.validation1.username.invalid',
                passwordInvalid: '$validation.validation1.password.invalid',
                confirmInvalid: '$validation.validation1.confirm.invalid',
                langInvalid: '$validation.validation1.lang.invalid',
            }),

        },
        methods: {

            handleValidate: function (e) {
                e.target.$validity.validate()
            },
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped></style>
