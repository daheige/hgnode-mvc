##jshintrc配置
```
{
    "node": true,
    /**
     * 是否阻止位运算符的使用
     *
     * 有时候为了快速取整或判断，会使用一些位运算符，所以此项设置为 false
     */
    "bitwise": false,
    /**
     * 是否要求变量都使用驼峰命名
     *
     * 默认开启
     * 弃用，见jscs项目
     */
    "camelcase": true,
    /**
     * 是否要求 for/while/if 等循环和条件语句中总是使用花括号
     */
    "curly": false,
    /**
     * 是否强制使用严格等号
     *
     * 有时候需要判断 null，所以默认不严格要求
     */
    "eqeqeq": false,
    /**
     * true: 默认要求所有函数运行在ES5
     * 弃用
     */
    "es5": true,
    "esnext": true,
    /**
     * 选择ES版本，3,5,6
     */
    "esversion": 5,
    /**
     * for-in 语句是否要求过滤原型链上的对象
     * 添加 obj.hasOwnProperty(prop)
     * 默认打开
     */
    "forin": true,
    /**
     * 是否阻止修改或拓展基本对象（Array、Date 等）的原型链
     *
     * 原型链污染比较危险，默认打开
     */
    "freeze": true,
    /**
     * 变量只能在函数域上定义，在代码块上定义的变量给出警告
     */
    "funcscope": false,
    /**
     * 当使用JS保留字时，显示警告
     */
    "futurehostile": true,
    /**
     * 是否要求自执行的方法使用括号括起  (function () { } ());
     * 默认打开
     * 弃用，见jscs项目
     */
    "immed": true,
    /**
     * 指定tab缩进宽度为4个空格
     */
    "indent": 4,
    /**
     * 要求变量在使用前声明，
     */
    "latedef": false,
    /**
     * 代码块嵌套深度
     */
    "maxdepth": 4,
    /**
     * 最大错误提示数量，默认50
     */
    "maxerr": 10000,
    /**
     * 单行最大长度
     *
     * 弃用，见jscs项目
     */
    "maxlen": 200,
    /**
     * 设置函数正式参数的最大数量
     *
     */
    "maxparams": 4,
    /**
     * 一个函数内声明语句的最大数量
     *
     */
    "maxstatements": 1000,
    /**
     * 要求构造函数大写
     *
     * 弃用，见jscs项目
     */
    "newcap": true,
    /**
     * 不允许使用 arguments.callee 和 arguments.caller
     */
    "noarg": true,
    /**
     * 不允许使用逗号
     */
    "nocomma": false,
    /**
     * 不允许空的代码快，默认关闭
     *
     * 弃用，见jscs项目
     */
    "noempty": false,
    /**
     * 不允许使用 "non-breaking whitespace"。
     *
     * 这些字符在非 UTF8 页面会导致代码失效
     */
    "nonbsp": true,
    /**
     * 阻止直接使用 new 调用构造函数的语句（不赋值对象）
     *
     * // OK
     * var a = new Animal();
     *
     * // Warn
     * new Animal();
     */
    "nonew": false,
    /**
     * 阻止直接使用 typeof 操作符
     *
     * 慎用
     */
    "notypeof": false,
    /**
    * 字符串引号
    *
    * 默认要求使用单引号
    true-- 代码字符串禁止单引号双引号混用,
    "single"--只允许单引号
    "double"--只允许双引号。
    * 弃用，见jscs项目
    */
    "quotmark": "single",
    /**
    * 隐藏式声明
    *
    "inner" - check for variables defined in the same scope only
    "outer" - check for variables defined in outer scopes as well
    false - same as inner
    true - allow variable shadowing
    */
    "shadow": "inner",
    /**
     *  禁止在不必要的时候使用分组运算符
     */
    "singleGroups": true,
    /**
     * 是要求否以 strict 模式检查
     *
     * 该选项要求文件有 "use strict;"不全局要求，需要的模块自行开启
     */
    "strict": false,
    /**
     * 提示未定义的变量
     *
     * 未定义的变量会容易造成全局变量，该项开启
     */
    "undef": true,
    /**
     * 提示未使用的变量
     * vars - to only check for variables, not function parameters
     * strict - to check all variables and parameters.
     * 默认开启
     */
    "unused": true,
    /**
     * 是否禁止使用var
     * Use `let` or `const` instead.
     */
    "varstmt": false,
    //
    //Relaxing options
    //
    //When set to true, these options will make JSHint produce fewer warnings about your code.

    /**
     * 不显示缺少分号警告
     */
    "asi": false,
    /**
     *  不显示在 比较处使用了赋值 的警告信息。
     */
    "boss": true,
    /**
     * 不显示代码中使用的 debugger 语句默认给出的警告
     */
    "debug": true,
    /**
     * This option tells JSHint that your code uses ES3 array elision elements, or empty elements (for example, [1, , , 4, , , 7]).
     */
    "elision": true,
    /**
     * 不显示关于 == null的警告
     * 当您想要检查变量是否为空或未定义时，这种比较往往很有用。
     */
    "eqnull": true,
    /**
     * 不显示关于 eval 的警告
     *
     */
    "evil": true,
    /**
     * 不显示 在应该使用复制或函数调用的地方使用了表达式 的警告。
     */
    "expr": true,
    /**
     * 不显示缺少分号的警告
     */
    "lastsemic": false,
    /**
     * 不显示不安全的折行的警告
     *
     * 弃用，见jscs项目
     */
    "laxbreak": true,
    /**
     * 不显示逗号放前面的警告，例如：
     *
     * 弃用，见jscs项目
     */
    "laxcomma": true,
    /**
     * 不显示 在循环语句中定义函数 的警告
     */
    "loopfunc": true,
    /**
     * 不显示 多行字符串 的警告
     */
    "multistr": true,
    /**
     * 不允许使用 ++ 和 -- 运算符
     *
     * 默认关闭
     */
    "plusplus": false,
    /**
     * 禁止关于__proto__属性的警告
     */
    "proto": true,
    /**
     *  true: Prohibit use of empty blocks
     *  该选项控制形如 person['name'] vs. person.name的警告信息的显示
     *  弃用，见jscs项目
     */
    "sub": true,
    //
    // Environments
    //
    // These options let JSHint know about some pre-defined global variables.
    /**
     * 暴露浏览器属性的全局变量，列如 window,document;
    注意:这个选项不暴露变量 alert或 console。
     */
    "browser": true,
    /**
     * 这个选项定义全局暴露的jQuery库。
     */
    "jquery": true,
    "devel": true,
    /**
     *这个选项可以用来指定一个没有正式定义的全局变量的白名单。配置 globals在单个文件,看看内联配置.
     *需要的引用到的js类库的全局变量应该加入进来
     */
    "globals":
    {
        "define": true,
        "module": true,
        "export": true,
        "console": true,
        "THREE": true,
        "TWEEN": true,
        "Stats": true
    }
}
```
