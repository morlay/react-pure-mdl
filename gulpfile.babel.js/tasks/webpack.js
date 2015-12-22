import webpackOrigin from 'webpack';

function webpack(taskConf) {
  return new Promise((resolve, reject) => {
    const bundler = webpackOrigin(taskConf);

    function onComplete(err, stats) {
      if (err) {
        return reject(err);
      }
      console.log(stats.toString(taskConf.stats));
      return resolve();
    }

    if (taskConf.watch) {
      bundler.watch(200, onComplete);
    } else {
      bundler.run(onComplete);
    }
  });
}

webpack.watch = function bundleWatch(taskConf) {
  taskConf.watch = true;
  taskConf.debug = true;
};

export default webpack;
