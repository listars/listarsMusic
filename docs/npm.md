##使用 npm 快速构建项目

###开发环境

1. 安装 nodejs 及 npm
1. 设置淘宝镜像 
    ` $ npm config set registry=https://registry.npm.taobao.org/`
    
    查看设置是否成功
    ` $ npm config list` 
1. 下载 [vue2-starter](http://git.oschina.net/fossfe/vue2-starter) 
1. 初始化项目
    ``` 
    $ cd vue2-starter
    $ npm install
    $ npm ren dev
    ```
1. 打包
    ```
    $ npm run build
    ```
1. 第三方依赖安装及卸载 
    ```
   $ npm install vux --save
   $ npm uninstall vux --save
    ```
###vue-starter
1. 目录结构
    1. build，config 打包配置
    1. dist 打包目录
    1. src 源码
        1. assets 静态资源
        1. components 组件
        1. filters 过滤器
        1. plugins 插件
        1. services http 封装
        1. styles 样式
        1. validator 校验
        1. vuex 状态管理
        1. router-map.js 路由 map
        1. main.js vue 配置
        1. App.vue 
    1. .babelrc babel配置
    1. .editorconfig 编辑器配置
    1. .eslintignore，.eslintrc.js  ESLint配置
    1. index.html 入口
    1. package.json npm配置
    
1. 起步
    1. 新增页面： 在 `components` 目录中新建 `.vue` 文件
    1. 修改 router-map.js
    1. 使用 [`<router-link to="home">Home</router-link>`](https://router.vuejs.org/zh-cn/api/router-link.html) 或 [`router.push`](https://router.vuejs.org/zh-cn/essentials/navigation.html) 跳转
    
    

