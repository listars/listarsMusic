##js编程规范
1. 规范基于：可读性，接受程度
1. 目的：多人协作时使代码具有一致性
1. 包含：代码风格，编程实践

###一般规范
1. 文件名：使用点和减号来分隔文件名 ,`router-map.js`
1. 缩进：4空格
1. 注释：注释有助于理解代码，当代码中有：复杂逻辑， 修复特殊的bug， 浏览器hack，晦涩难懂的代码时需要注释。
    1. 函数、方法注释
    
    ```js
        /** 
        * 函数说明 
        * @关键字 
        * @param 参数名 {参数类型}  描述信息 
        * @return {返回类型} 描述信息 
        * @example 示例代码 
        */
    ```
    1. 单行注释： 变量注释
    
    ```js
    const MaxWidth = 320 // 最大宽度
    ```
    1. 多行注释，

    ```js
    /*
    * 注释操作说明
    * balabala
    */
    ```    
    1. 文件注释
        1. 文件版本、创建或者修改时间、功能、作者等
    1. 声明注释
        ```js
        // todo： 代码未完成，下一步做什么
        // fixme： 代码有问题，需要被修复或进一步完善
        ```
        
1. 代码检查：使用 webstorm Inspect Code
   1. <p>启用webstorm es6 语法，修改配置： Editor->Inspections->Javascript->Genernal </p>
   2. <p>取消打勾“unresolved javascript fucntions“  <br>
      取消打勾：“unresolved javascript variables“</p>
### ES6编程风格
1. 参考 [es6 手册](http://es6.ruanyifeng.com/#docs/style)

### js
1. 命名
    1. 使用大写驼峰命名法来命名类: ` class  ExceptionService { ... }`
    1. 小写驼峰命名法来命名属性和方法:`  getTemplate(){} ` ，建议前缀使用常见动词：
        1. has： 判断是否含有某个值，返回布尔值
        1. can： 断是否可执行，返回布尔值
        1. is：  判断是否为某个值，返回布尔值
        1. get:  获取，返回需要获取的值
        1. set： 设置，无返回值，或返回链式对象
        1. load： 加载数据
        
        ```js
        function hasClass() { }
        function isObject() { }
        function canScroll() { }
        
        ```
    1. 用大写字母和下划线命名常量，易于检索和阅读
        ```js
        // bad
        // 525600 是什么鬼?
        for (var i = 0; i < 525600; i++) {
        // ...
        }
        
        // good 
        const MINUTES_IN_A_YEAR = 525600;
        // ...
        ```    
1. 分号：可以不使用分号，但要注意个别情况:
    1. 自执行函数前面：不写分号会报错
        ```js
        var i = 1
        ;(function (){})()
        ```
     1.  如果不写分号，foo 总会执行
            ```js
            var bar = function() {
                return -1
            }
            var foo = function() {
                return 1
            }
            var i = [1];
            -1 == bar() || foo()
            ```
      1. `return` 后不要新起一行,下面代码将返回 undefined
      
        ```js
        function getDate(){
           return 
           {
               name: 'C. Zakas'
           }
        }
        ```      
1. 引号：字符串定义使用单引号， `const name='Maldini'` 
1. 空行：适当使用空行分割代码，增加可读性，规则：保持语义相关的代码在一起展现
    1. 方法之间
    1. 流程控制之前，如 `if` 和 `for`
    1. 注释之前
    1. 代码中逻辑片段之间
1. 变量提升：先定义再使用, 把变量声明统一放到函数的起始位置
1. == 与 === ，尽量使用 ===
    1. 这样的一些值表示false：null，undefined，字符串''，数字0，NaN
    1. 在==时，则会有一些让人难以理解的陷阱,如：
        ```js
            var undefined; 
            undefined == null; // true 
            1 == true; //true 
            2 == true; // false 
            0 == false; // true 
            0 == ''; // true 
            NaN == NaN;// false 
            [] == false; // true 
            [] == ![]; // true       
        ```
1. 考虑可读性，避免奇怪的写法
    ```js
    // bad
    2..toFixed(2)
    // good
    (2).toFixed(2)
    ```    
    ```js
    // bad
    var a = 2.;
    // good
    var a = 2;
    ```
1. 花括号： 总是使用花括号， `if`, `for`, `while`, `do while`, `try catch` 
    ```js
    if(test) {
       //...
    }
    ```
1. parseInt ： 字符串转数字， 总是指定第二个参数
    ```js
    parseInt('08', 10) // 8
    ```
1. `[]` 和 `{}` ：用 `[]` 代替 `new Array()` ,用 `{}` 代替 `new Object`
1. #####拼接字符串
    使用数组保存字符串片段， join 拼接
    ```js
    // bad
    var str = ''
    str += '<div>' + 1 + '</div>'
    ```
    ```js
    // good
    var str = []
    var idx = 1
    str.push(`<div>${idx}</div>`) // es6  字符串模板
    str = str.join('')
    ```
1. 检测变量
    1. 使用 Array.isArray 判断是否为数组
    ```js
       // bad
        typeof [] // 'object'
        typeof {} // 'object'
        [] instanceof Array // true
        [] instanceof Object // true
     
       // 使用 Array.isArray 判断是否为数组
       Array.isArray([1, 2, 3]);  // true
       Array.isArray({foo: 123}); // false
    ```
    1. 避免空比较
    ```js
    // bad
    if(value != null){
       // ...
    }
    ```
1. 分离配置数据
    ```js
    // bad
    $http.get('/api/user').then()
    addClass('selected')
 
    // good
    const config = {
       URL_USER: '/api/user' ,
       CLASSNAME_SELECTED: 'selected',
    }
    $http.get(config.URL_USER).then()
    addClass(config.CLASSNAME_SELECTED)

    ```
1. 不要修改原生对象
    ```js
    // bad
    // 删除方法
    document.getElementById = null
    
    // 重写方法
    document.getElementById = function(args) { }
    ```

   
   