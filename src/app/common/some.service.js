import {
  add,
  subtract,
  addCount,
  subtractCount,
  setCount,
  getCount,
  count
} from './some.esm';

function someService() {

  return {
    add,
    subtract,
    addCount,
    subtractCount,
    setCount,
    getCount,
    count
  }

}

export { someService };
