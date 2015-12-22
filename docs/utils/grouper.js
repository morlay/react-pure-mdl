import _ from 'lodash';

function encodeGroupName(string) {
  return _.last(string.split('/'));
}

const grouper = (moduleName) => {
  const result = moduleName.match(/[^\/]+\/[^\/]+$/);
  if (result) {
    return encodeGroupName(result[0]);
  }
  return null;
};


export default grouper;
