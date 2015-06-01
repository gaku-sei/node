var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('uglify', function() {
  return gulp.src('test.js')
    .pipe(uglify())
    .pipe(gulp.dest('out'));
});

gulp.task('default', ['uglify'], function() {
  gulp.watch('test.js', ['uglify']);
});
