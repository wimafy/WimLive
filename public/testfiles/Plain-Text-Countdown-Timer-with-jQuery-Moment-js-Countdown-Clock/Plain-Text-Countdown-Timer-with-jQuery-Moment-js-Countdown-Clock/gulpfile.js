'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');

gulp.task('default', function () {

    // Compile SCSS
    gulp.src('src/countdown-clock.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/'))
        .pipe(rename(function(path){
            path.extname = '.min.css'
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest('build/'));

    // Minify JS
    gulp.src('src/countdown-clock.js')
        .pipe(gulp.dest('build/'))
        .pipe(rename(function(path){
            path.extname = '.min.js'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('build/'));

});