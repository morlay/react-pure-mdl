export default (conf) => ({
  src: [
    'gulpfile.babel.js/**/*.js{,x}',
    `${conf.src}/**/*.js{,x}`,
    'docs/**/*.js{,x}'
  ]
});
