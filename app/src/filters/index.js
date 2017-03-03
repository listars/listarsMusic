/**
 * Created by Jackie on 2017/2/22.
 */

// 导入 toFixed
import toFixed from './toFixed'

// 放入 list 中安装
let list = [toFixed]

function install(Vue) {

    list.forEach((item)=> {
        Object.keys(item).forEach((key)=> {
            Vue.filter(key, item[key])
        })
    })

}

export default install
