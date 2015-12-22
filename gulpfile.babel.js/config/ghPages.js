export default (conf) => {
  return {
    src: conf.build,
    options: {
      push: false,
      dotfiles: true,
      logger: (message) => {
        console.log(message);
      }
    }
  };
};
