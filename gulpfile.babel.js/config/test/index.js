import { argv } from 'yargs';

export default (conf) => {
  return {
    src: [
      `${conf.src}/**/__tests__/*.spec.js`
    ],
    options: {
      R: 'dot',
      compilers: `.:${conf.helpers}/require-hooks.js`,
      istanbul: !!argv.coverage ? {
        bin: require.resolve('./bin/babel-istanbul')
      } : false
    }
  };
};
