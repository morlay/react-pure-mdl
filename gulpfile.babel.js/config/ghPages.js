export default (conf) => {
  return {
    src: conf.build,
    options: {
      logger: (message) => {
        console.log(message);
      }
    }
  };
};
