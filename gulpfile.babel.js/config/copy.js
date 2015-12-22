export default (conf) => {
  return {
    files: [
      {
        src: [
          `${conf.docs}/index.html`
        ],
        output: conf.build
      }
    ]
  };
};
