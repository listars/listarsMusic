## 自定义 vue filter

### 集成 moment

[moment](http://momentjs.com) Parse, validate, manipulate, and display dates in javascript. 

``` $ npm moment --save ```

```javascript
/*
*@usage  1486707859762 | moment('YYYY-MM-DD HH:mm'
* */
Vue.filter('moment', (value, formatString) => {
    formatString = formatString || 'YYYY-MM-DD HH:mm:ss'
    return moment(value).format(formatString)
})
```

在模板中使用
```html
1486707859762 | moment('YYYY-MM-DD HH:mm')
```