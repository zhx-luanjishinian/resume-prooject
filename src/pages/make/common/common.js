import { cloneDeep } from 'lodash';

export const add = (preArr, addEle) => {
  const arr = cloneDeep(preArr);
  arr.push(addEle[0]);
  return arr;
};

export const delet = (deleteEle) => {
  const arr = cloneDeep(deleteEle);
  if (arr.length === 0) {
    return [];
  }
  arr.pop();
  return arr;
};
