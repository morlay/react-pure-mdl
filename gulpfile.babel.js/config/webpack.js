import webpack from 'webpack';
import path from 'path';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
  }
};

const VENDORS = [
  'react',
  'react-dom',
  'classnames'
];

export default (conf) => {
  const DEBUG = process.env.NODE_ENV !== 'production';
  const VERBOSE = false;

  return {
    entry: {
      app: `${conf.docs}/index.js`,
      components: `${conf.docs}/components.js`,
      vendor: VENDORS
    },

    output: {
      path: path.join(process.cwd(), conf.build, '/assets'),
      chunkFilename: 'chunk.[chunkhash].js',
      publicPath: './',
      filename: '[name].js'
    },

    node: {
      fs: 'empty',
      module: 'empty',
      net: 'empty'
    },

    cache: DEBUG,
    debug: DEBUG,
    devtool: DEBUG ? 'inline-source-map' : false,

    resolve: {
      extensions: ['', '.js', '.json'],
      modulesDirectories: [
        process.cwd(),
        'node_modules'
      ]
    },

    module: {
      loaders: [{
        test: /\.scss/,
        loader: ExtractTextPlugin.extract(
          'css-loader?sourceMap!sass-loader!postcss-loader'
        )
      }, {
        test: /\.json/,
        loader: 'json-loader'
      }, {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.(woff2|woff|ttf|eot|svg)$/,
        loader: 'file-loader?name=[name].[ext]'
      }, {
        test: /\.(svg\?embed)$/,
        loader: 'file-loader?name=[name].[ext]'
      }]
    },

    sassLoader: {
      includePaths: [
        'node_modules/material-design-lite/src'
      ]
    },

    postcss: () => [
      autoprefixer({
        browsers: [
          'ie_mob >= 10',
          'ff >= 30',
          'chrome >= 34',
          'safari >= 7',
          'opera >= 23',
          'ios >= 7',
          'android >= 2.3',
          'bb >= 10'
        ]
      })
    ],

    plugins: [
      new webpack.ProvidePlugin({
        React: 'react',
        ReactDOM: 'react-dom'
      }),
      new webpack.DefinePlugin(GLOBALS),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        chunks: ['vendor']
      }),
      new ExtractTextPlugin('app', '[name].css', {
        allChunks: true
      }),
      ...(!DEBUG ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: VERBOSE
          }
        }),
        new webpack.optimize.AggressiveMergingPlugin()
      ] : [])
    ],

    stats: {
      colors: true,
      reasons: DEBUG,
      hash: VERBOSE,
      version: VERBOSE,
      timings: true,
      chunks: VERBOSE,
      chunkModules: VERBOSE,
      cached: VERBOSE,
      cachedAssets: VERBOSE
    }
  };
};
