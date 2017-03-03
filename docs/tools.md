## Tools

### URLParser
比较完善的url解析
####Usage

```js
import URLParser from '../app/src/tools/URLParser'
let myParser = new URLParser('http://www.a.com/b/?q=123#top')
myParser.setURL('http://www.a.com/?q=123#top')
let host = myParser.getHost() //www.a.com
let q = myParser.getQuery('q') // 123
let Fragment = myParser.getFragment() // top
let path = myParser.getPathname() // /b/
```

### date 日期格式化

```js
import { dateFormat } from 'vux'
dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss')
```

### number 格式化工具
```js
// numberComma用于分割数字，默认为3位分割，一般用于格式化金额。
// numberPad用于按照位数补0
// numberRandom用于生成两个整数范围内的随机整数

import { numberComma, numberPad, numberRandom } from 'vux'
numberComma(21342132) // 21,342,132
numberComma(21342132, 4) // 2134,2132
numberComma(21342132.234) // 21,342,132.234

numberPad(1) // 01
numberPad(234, 4) // 0234

numberRandom(1, 7) // 2
```

###  [Html2canvas](https://github.com/niklasvh/html2canvas)
将html导出到图片

###  [Image viewer](https://github.com/fengyuanchen/viewerjs)
图片预览
 
### [LazyLoad](https://github.com/hilongjw/vue-lazyload)
图片懒加载