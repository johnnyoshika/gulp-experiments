var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');
var plumber = require('gulp-plumber');

gulp.task('watch', function () {
   gulp.watch('./css/**/*.less', ['less']);
});

gulp.task('less', function () {
  return gulp.src('./css/**/[^_]*.less')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(less({
        paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'));
});
