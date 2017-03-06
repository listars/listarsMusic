##使用 filter 过滤器

1. 在 `src/filters` 目录中新建目录 `toFixed`
1. 在 `src/filters/toFixed/index.js` 中增加过滤方法， 
    ```js
    export default {
        toFixed(value, digits = 2){
            try {
                value = parseInt(value, 10)
            } catch (e) {
                throw Error(e)
            }
            return value.toFixed(digits)
        }
    }
    ```
1. 在 `src/filters/index.js` 中导入
    ```js
    import toFixed from './toFixed'
    let list = [toFixed]
    ```
1. 在模板中使用 
    ```html
    <div>{{counter | toFixed(2)}}</div>
    ```
