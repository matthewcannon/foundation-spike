'use strict';
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    browserify = require('browserify'),
    minify = require('gulp-uglify'),
    util = require('gulp-util');

gulp.task('cd', ['deploy'], function() {
    gulp.watch(['./src/views/**/*.hbs'], ['deploy-views']);
    gulp.watch(['./src/styles/**/*.scss', './src/styles/**/*.css'], ['deploy-styles']);
    gulp.watch(['./src/scripts/**/*.js'], ['deploy-web-scripts']);
    gulp.watch(['./src/app/**/*.js'], ['deploy-app-scripts']);
});

gulp.task('deploy', [
    'deploy-views',
    'deploy-styles',
    'deploy-web-scripts',
    'deploy-app-scripts'
]);

gulp.task('deploy-views', function() {
    gulp.src(['./src/views/**/*.hbs'])
        .pipe(gulp.dest('./pub/views/'));
});

gulp.task('deploy-styles', function() {
    gulp.src(['./src/styles/app.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./pub/css/'));

    gulp.src(['./src/styles/**/*.css'])
        .pipe(gulp.dest('./pub/css/'));
});

gulp.task('deploy-web-scripts', function() {
    browserify('./src/scripts/app.js')
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(minify())
        .pipe(gulp.dest('./pub/js/'));
});

gulp.task('deploy-app-scripts', function() {
    gulp.src(['./src/app/**/*.js'])
        .pipe(gulp.dest('./pub/'));
});
