import gulp from 'gulp';

function copy(taskConf) {
  return gulp.src(taskConf.src)
    .pipe(gulp.dest(taskConf.output));
}

copy.watch = function copyWatch(taskConf, taskFn) {
  gulp.watch(taskConf.src, taskFn);
};

export default copy;
