var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var salad = require('postcss-salad')(require('./salad.config.json'));

gulp.task('compile', function() {
  return gulp.src('./src/*.*')
  	.pipe(postcss([sass]))
    .pipe(postcss([salad]))
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'));
});

gulp.task('copyfont', function() {
  return gulp.src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/fonts'));
});


gulp.task('build', ['compile', 'copyfont']);
gulp.task('watch', function () {
  gulp.watch('./src/*.scss', ['compile']);
});