const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// js编译并压缩
gulp.task('babel', function() {
    //编译
    gulp.src('es6/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('js_src')) //路径可以自行更改,转换为es5
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

gulp.task('uglify',function(){
     //将js_src所有的js资源压缩并复制到js中
    gulp.src('js_src/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

// 监视文件变化，自动执行任务
gulp.task('watch', function() {
    gulp.watch('es6/**.js', ['babel']);
});

// 正式上线编译并压缩js
gulp.task('default',['babel'],function() {
    console.log('js编译和打包完成！');
});
