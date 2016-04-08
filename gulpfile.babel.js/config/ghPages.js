export default (conf) => ({
  src: conf.build,
  options: {
    logger: (message) => {
      console.log(message);
    }
  }
});

