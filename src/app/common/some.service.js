import {
  add,
  subtract,
  addCount,
  subtractCount,
  setCount,
  getCount,
  count,
  randomHugeFunc
} from './some.esm';

function someService() {

  return {
    add,
    subtract,
    addCount,
    subtractCount,
    setCount,
    getCount,
    count,
    randomHugeFunc
  }

}

export { someService };
