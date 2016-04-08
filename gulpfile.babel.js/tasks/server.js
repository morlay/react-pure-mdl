import browserSync from 'browser-sync';

function server(taskConf) {
  return new Promise((resolve, reject) => {
    browserSync(taskConf, (err, bs) => {
      if (err) {
        return reject();
      }
      return resolve(bs);
    });
  });
}

export default server;
