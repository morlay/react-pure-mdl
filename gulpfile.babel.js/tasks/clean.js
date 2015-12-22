import del from 'del';

function clean(taskConf) {
  return del(taskConf.src);
}

export default clean;
