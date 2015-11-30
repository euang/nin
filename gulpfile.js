var gulp = require('gulp');
var beautify = require('sass-convert');

gulp.task('default', function() {
  // place code for your default task here
});
 
gulp.task('beautify', function() {
  gulp.src('./_sass/*.scss')
    .pipe(beautify())
    .pipe(gulp.dest('./public/'))
});
