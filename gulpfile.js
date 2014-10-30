//引入gulp
var gulp = require('gulp');

// 引入组件
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var handleError = function(err) { console.log(err); if (this.emit) { this.emit('end'); } };

//test
gulp.task('test', function() {
    return gulp.src('./snippets/starry_sky/starry_sky.scss')
    .pipe(plumber())
    .pipe(sass({ onError: handleError }))
    .pipe(gulp.dest('./snippets/starry_sky/starry_sky.css'));
});

//编译sass
gulp.task('sass', function() {
    // place code for your default task here
    gulp.src('./snippets/starry_sky/starry_sky.scss')
    	.pipe(sass())
        .pipe(gulp.dest('./snippets/starry_sky'));
});

gulp.task('default', function() {
    //
});

//监听sass
gulp.task('watch', function() {
    gulp.watch('./snippets/starry_sky/starry_sky.scss',['sass']);
});
