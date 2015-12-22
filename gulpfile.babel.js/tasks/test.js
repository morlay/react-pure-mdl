import gulp from 'gulp';
import gulpMocha from 'gulp-spawn-mocha';

function test(conf) {
  return gulp.src(conf.src, { read: false })
    .pipe(gulpMocha(conf.options));
}

export default test;
