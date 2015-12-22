import gulp from 'gulp';
import requireDir from 'require-dir';
import ConfigRegistry from 'undertaker-config-registry';

const baseConfig = {
  docs: './docs',
  src: './src',
  helpers: './helpers',
  build: './public'
};

const configRegistry = new ConfigRegistry(
  baseConfig,
  requireDir('./config', { recurse: true }),
  requireDir('./tasks')
);

gulp.registry(configRegistry);

gulp.task('build', gulp.series(
  'clean',
  'copy',
  'docs'
));

gulp.task('build:prod', gulp.series(
  'build',
  'webpack'
));

gulp.task('devMode:enable', () => configRegistry.enableDevMode());

gulp.task('dev', gulp.series(
  'devMode:enable',
  'build',
  'server'
));
