export default (conf) => {
  return {
    src: [
      'gulpfile.babel.js/**/*.js{,x}',
      `${conf.src}/**/*.js{,x}`,
      `docs/**/*.js{,x}`
    ]
  };
};
