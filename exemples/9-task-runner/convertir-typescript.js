var gulp = require('gulp');
var typescript = require('gulp-typescript');

gulp.task('default', function() {
  return gulp.src('**/*.ts')
    .pipe(typescript({
      target: 'es5'
    }))
    .pipe(gulp.dest('out'));
});
