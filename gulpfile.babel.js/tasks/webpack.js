import webpackOrigin from 'webpack';

function webpack(taskConf) {
  return new Promise((resolve, reject) => {
    function onComplete(err, stats) {
      if (err) {
        return reject(err);
      }
      console.log(stats.toString(taskConf.stats));
      return resolve();
    }

    const bundler = webpackOrigin(taskConf);
    bundler.run(onComplete);
  });
}

export default webpack;
