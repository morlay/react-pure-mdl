export default (conf) => {
  return {
    entry: [
      `${conf.src}/*/*.js`,
      `!${conf.src}/utils/*.js`
    ],
    src: [
      `${conf.src}/*/*.js`,
      `${conf.src}/*/__examples__/*.js`
    ],
    output: `${conf.docs}/__generated`
  };
};
