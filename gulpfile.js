var gulp = require('gulp');
var less = require('gulp-less');

/*在用less+gulp开发时，有时候代码还没写完整，不小心保存了一下，然后gulp就开始执行gulp-less的task。
但是代码是有问题的，这时候会输出一个Potentially unhandled rejection，告诉你哪里出问题了，然后，
然后就挂了！！pipe就会停止输入数据，整个task就停止了。
特别是我用Sublime，设置了失去焦点自动保存，很容易出现这个问题。*/
/*
gulp-plumber插件解决了这个问题。
插件作者的想法 Error management in gulp*/

var plumber = require('gulp-plumber');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({browsers: ['last 10 versions']});

var paths = {
    less: ['./less/*.less']
};

gulp.task('less', function () {
    return gulp.src('./less/style.less')
        .pipe(plumber())  //加上这句
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest('./css'));
});


gulp.task('watch', function () {
    gulp.watch(paths.less, ['less']);
});

