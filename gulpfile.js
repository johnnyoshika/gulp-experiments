var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify')
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var browserSync = require('browser-sync');

gulp.task('default', ['watch']);

gulp.task('watch', function () {
  gulp.watch('css/**/*.less', ['less']);
  gulp.watch('js/**/*.js', ['js']);
});

gulp.task('less', function () {
  return gulp.src(['css/**/[^_]*.less', '!css/bar.less'])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(less({
        paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('app/css/'));
});

gulp.task('js', function () {
  return gulp.src('js/*.js')
     .pipe(jshint())
     .pipe(jshint.reporter(stylish))
     .pipe(sourcemaps.init())
     //.pipe(uglify())
     .pipe(babel())
     .pipe(concat('app.js'))
     .pipe(sourcemaps.write('.'))
     .pipe(gulp.dest('app/js'));
});

gulp.task('serve', ['watch'], function () {
   var files = [
      'app/**/*.html',
      'app/css/**/*.css',
      'app/imgs/**/*.png',
      'app/js/**/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './app'
      }
   });
});

gulp.task('serve-bcjobs', function () {
   browserSync.init({
     proxy: 'http://www.bcjobs.local'
   });
});
