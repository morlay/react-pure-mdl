import browserSync from 'browser-sync';

function server(taskConf) {
  return new Promise((resolve, reject) => {
    browserSync(taskConf, (err, bs) => {
      return err ? reject() : resolve(bs);
    });
  });
}

export default server;
