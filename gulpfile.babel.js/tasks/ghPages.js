import path from 'path';
import { publish } from 'gh-pages';

function ghPages(taskConf) {
  return new Promise((resovle, reject) => {
    publish(
      path.join(process.cwd(), taskConf.src),
      taskConf.options,
      (err) => {
        if (err) {
          reject(err);
        } else {
          resovle();
        }
      }
    );
  });
}

export default ghPages;
