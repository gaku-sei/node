var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('default', function() {
  return gulp.src('**/*.less')
    .pipe(less())
    .pipe(gulp.dest('out'));
});
