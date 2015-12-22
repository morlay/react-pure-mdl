import compress from 'compression';

import { argv } from 'yargs';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConf from './webpack';

export default (conf) => {
  let middleware = [
    ...(process.env.NODE_ENV === 'production' ? [compress()] : [])
  ];

  if (!argv.noWebpack) {
    const webpackConfig = webpackConf(conf);

    webpackConfig.entry.app = ['webpack-hot-middleware/client']
      .concat(webpackConfig.entry.app);

    webpackConfig.plugins = [
      ...webpackConfig.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ];

    const bundler = webpack(webpackConfig);

    middleware = [
      ...middleware,
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        stats: webpackConfig.stats
      }),
      webpackHotMiddleware(bundler)
    ];
  }

  return {
    snippetOptions: {
      ignorePaths: 'index.html'
    },
    server: {
      notify: false,
      baseDir: conf.build,
      middleware
    },
    ui: {
      port: 9999
    }
  };
};
