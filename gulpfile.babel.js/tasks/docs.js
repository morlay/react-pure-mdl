import gulp from 'gulp';
import gulpDocGenUi from 'react-docgen-ui';

function docs(taskConf) {
  return gulp.src(taskConf.entry)
    .pipe(gulpDocGenUi({
      cwd: process.cwd()
    }))
    .on('error', console.log.bind(gulp))
    .pipe(gulp.dest(taskConf.output));
}

docs.watch = function copyWatch(taskConf, taskFn) {
  gulp.watch([].concat(taskConf.src || []), taskFn);
};

export default docs;
