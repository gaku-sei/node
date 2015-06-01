var gulp = require('gulp');

gulp.task('default', function() {
  return gulp.src('**/*.text')
    .pipe(gulp.dest('out'));
});
