var gulp = require('gulp');
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({browsers: ['last 10 versions']});

var paths = {
    less: ['./less/*.less']
};

gulp.task('less', function () {
    return gulp.src('./less/style.less')
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest('./css'));
});


gulp.task('watch', function () {
    gulp.watch(paths.less, ['less']);
});

