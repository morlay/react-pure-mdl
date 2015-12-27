import path from 'path';
import { publish } from 'gh-pages';

import del from 'del';

function ghPages(taskConf) {
  const promisedPublish = () => {
    return new Promise((resolve, reject) => {
      publish(
        path.join(process.cwd(), taskConf.src),
        taskConf.options,
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  };

  return del(['./node_modules/gh-pages/.cache/**'])
    .then(promisedPublish);
}

export default ghPages;
