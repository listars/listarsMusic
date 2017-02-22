##使用 filter 过滤器

### 注册全局过滤器

1. 在 `src/filters/index.js` 中增加， 
    ```js
    /*
    * value 是被过滤的值
    * digits 被过滤的参数, 默认为 2
    * {{ 1 | tofixed(3) }} 将会输出 1.000  
    */
     Vue.filter('tofixed', (value, digits = 2) => {
        
        value = Number(value)
        return value.toFixed(digits)
    })
    ```

    
