## Tools

###URLParser
比较完善的url解析
####Usage

```js
import URLParser from '../app/src/tools/URLParser'
let myParser = new URLParser('http://www.a.com/b/?q=123#top')
myParser.setURL('http://www.a.com/?q=123#top')
let host = myParser.getHost() //www.a.com
let q = myParser.getQuerystring('q') // 123
let Fragment = myParser.getFragment() // top
let path = myParser.getPathname() // /b/
```

### [Html2canvas](https://github.com/niklasvh/html2canvas)
将html导出到图片

###  [Image viewer](https://github.com/fengyuanchen/viewerjs)
图片预览
 
