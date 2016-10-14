var gulp = require ('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass'),
    minifyCSS = require('gulp-minify-css');

gulp.task('compass', function() {
  gulp.src('rps-game/sass/*.scss')
  .pipe(compass({
    config_file: 'rps-game/config.rb',
    css: 'rps-game/stylesheets/',
    sass: 'rps-game/sass'
  }))
  .pipe(minifyCSS())
  .pipe(gulp.dest('rps-game/stylesheets/'));
});

gulp.task('watch', function(){
  gulp.watch('rps-game/sass/*.scss', ['compass']);
  console.log('Gulp Watching...');
})
