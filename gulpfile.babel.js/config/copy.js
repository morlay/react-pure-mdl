import { argv } from 'yargs';

export default (conf) => {
  return {
    files: [
      ...(argv.lib ? [{
        src: [
          `${conf.src}/**/*.*`,
          `!${conf.src}/**/__*__/**.js`,
          `!${conf.src}/**/*.js`
        ],
        output: conf.lib
      }] : []),
      {
        src: [
          `${conf.docs}/index.html`
        ],
        output: conf.build
      }
    ]
  };
};
