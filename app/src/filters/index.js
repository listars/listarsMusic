/**
 * Created by Jackie on 2017/2/22.
 */

function install(Vue) {

    /*
     * 注册 tofixed
     * formats a number using fixed-point notation.
     * value 是被过滤的值
     * digits 被过滤的参数, 默认为 2
     * {{ 1 | tofixed(3) }} 将会输出 1.000
     * @usage {{ 100 | tofixed }} , {{ 100 | tofixed(3) }}
     * @return {String}  A string representing the given number using fixed-point notation.
     * */
    Vue.filter('tofixed', (value, digits = 2) => {
        try {
            value = parseInt(value, 10)
        } catch (e) {
            throw Error(e)
        }
        return value.toFixed(digits)
    })

}

export default install
