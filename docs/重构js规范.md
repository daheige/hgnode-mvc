```
1.关于编辑器sublime
    配置sublime默认设置
    {
        "auto_complete": true,
        "auto_match_enabled": true,
        "color_scheme": "Packages/Color Scheme - Default/Monokai.tmTheme",
        "default_encoding": "UTF-8",
        "default_line_ending": "unix",
        "draw_minimap_border": true,
        "draw_white_space": "all",
        "ensure_newline_at_eof_on_save": true,
        "expand_tabs_on_save": true,
        "font_face": "Ubuntu Mono",
        "font_size": 12,
        "highlight_line": true,
        "ignored_packages":
        [
            "Vintage"
        ],
        "line_padding_bottom": 1,
        "rulers":
        [
            80,
            100,
            120
        ],
        "tab_size": 4,
        "theme": "Monokai+.sublime-theme",
        "translate_tabs_to_spaces": true,
        "trim_automatic_white_space": true,
        "trim_trailing_white_space_on_save": true,
        "update_check": false,
        "word_wrap": false
    }
2.sublime插件安装
    git
    Gitignore
    Vuejs
    SideBarTools
    SidebarSeparator
    SideBarEnhancements
    AlignTab
    JavaScriptNext
    jQuery
    JsFormat
    CTags
    Autocomplete Javascript
    HTMLAttributes
    JavaScript Snippets
    Alignment
    ES6-Toolkit
    JavaScript & NodeJS Snippets
    DocBlockr
    sublimecode
    html-css-js
3.配置jsformat(用户设置)
    {
        // exposed jsbeautifier options
        "indent_with_tabs": false,
        "preserve_newlines": true,
        "max_preserve_newlines": 2,
        "space_in_paren": false,
        "jslint_happy": false,
        "brace_style": "collapse",
        "keep_array_indentation": false,
        "keep_function_indentation": false,
        "space_before_conditional": true,
        "eval_code": false,
        "unescape_strings": false,
        "break_chained_methods": false,
        "e4x": false,
        "wrap_line_length": 140,
        "indent_level": 0,
        "indent_size": 4,
        "indent_char": " ",

        // jsformat options
        "format_on_save": true,
        "format_selection": true,
        "jsbeautifyrc_files": false,
        "ignore_sublime_settings": true,
        "format_on_save_extensions": ["js", "json"]
    }
4.js打包目录(demo如下)
    public
        es6 存放es6代码
        js_src 存放转换后的js代码
        static   静态资源目录
            act 活动目录
            h5  h5目录
            pc  web pc目录

5.js代码规范
    a.少用全局变量，函数中变量声明尽量都用var来声明。
    b.require.js用来加载js，相关的js请封装成模块。
    c.函数里面的变量，原则上在函数顶部一次声明，如在if...else等条件语句中，声明请用var a = 1方式声明。
    d.js文件中，es5之前，变量在顶部声明，函数全部放在最底下声明。
    e.少用闭包，如需要用闭包，记得销毁大型的变量，防止内存溢出。
    f.页面中大量js，请记得做相关优化，比如滚动需函数节流。
    g.独立的逻辑代码，请用放大模式的模块化方式来书写代码。
    h.用来控制js逻辑的dom元素，请在class或id名称之前加上js前缀，比如<a href="#" id="js-app-wake">APP跳转</a>。
    i.js插件开发，请用原型对象和构造函数的组合模式来开发，变量初始化放在构造函数中，方法放在prototype原型对象上。

6.gulp_babel配置
    更换npm为淘宝镜像 npm install -g cnpm --registry=https://registry.npm.taobao.org
    在第4点的public下新建package.json文件(确保已安装好nodejs8.0.0+)
        {
            "name": "hg_h5",
            "version": "1.0.0",
            "description": "",
            "main": "gulpfile.js",
            "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1"
            },
            "author": "",
            "license": "ISC",
            "dependencies": {
                "babel-cli": "^6.26.0",
                "babel-core": "^6.26.0",
                "babel-preset-es2015": "^6.24.1",
                "deprecated": "^0.0.2",
                "gulp": "^3.9.1",
                "gulp-babel": "^7.0.0",
                "gulp-jshint": "^2.0.4",
                "gulp-uglify": "^3.0.0",
                "gulp-util": "^3.0.8",
                "jshint": "^2.9.5",
                "make-error-cause": "^1.2.2",
                "orchestrator": "^0.3.8",
                "uglify-js": "^3.1.5",
                "vinyl-fs": "^2.4.4",
                "vinyl-sourcemaps-apply": "^0.2.1"
            }
        }
    执行cnpm install --save 初始化打包

7.js打包
        在public目录下新建gulpfile.js文件
            const gulp = require('gulp');
            const babel = require('gulp-babel'); //js转换
            const uglify = require('gulp-uglify'); //js压缩
            // const jshint = require('gulp-jshint'); //js检查,如果不需要检测语法错误请注释掉jshint
            gulp.task('default', function () {
                //将es6转换为es5并压缩
                gulp.src("es6/**/*.js")
                    // .pipe(jshint('.jshintrc'))
                    // .pipe(jshint.reporter('default'))
                    .pipe(babel({
                        presets: ['es2015']
                    }))
                    .pipe(uglify({
                        mangle: false
                    }))
                    .pipe(gulp.dest('js_src'));
            });

            //监听变化
            gulp.task("auto", function () {
                gulp.watch('es6/**/*.js', ['default']);
            });


        执行打包 cd public;gulp
```
