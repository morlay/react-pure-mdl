import gulp from 'gulp';
import eslint from 'gulp-eslint';

function lint(fileConf) {
  return gulp.src(fileConf.src)
    .pipe(eslint(fileConf.options))
    .pipe(eslint.formatEach())
    .pipe(eslint.failOnError());
}

export default lint;
