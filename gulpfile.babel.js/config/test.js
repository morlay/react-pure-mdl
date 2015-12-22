import { argv } from 'yargs';

export default (conf) => {
  return {
    src: [
      `${conf.shared}/**/__tests__/*.spec.js{,x}`,
      `${conf.src}/**/__tests__/*.spec.js{,x}`
    ],
    options: {
      r: `${conf.shared}/helpers/jsdom.js`,
      R: 'dot',
      compilers: `.:${conf.shared}/helpers/require-hooks.js`,
      istanbul: !!argv.cover
    }
  };
};
