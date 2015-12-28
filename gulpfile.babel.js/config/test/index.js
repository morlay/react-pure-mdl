import { argv } from 'yargs';

export default (conf) => {
  process.env.BABEL_ENV = 'node';

  return {
    src: [
      `${conf.src}/**/__tests__/*.spec.js`
    ],
    options: {
      R: 'dot',
      compilers: '.:babel-register',
      istanbul: !!argv.coverage ? {
        bin: require.resolve('./bin/babel-istanbul')
      } : false
    }
  };
};
