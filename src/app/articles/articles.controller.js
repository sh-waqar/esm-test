import {
  getCount,
  add,
  addCount,
  subtractCount
} from '../common/some.esm.js';

function ArticlesController() {
  'ngInject';
  var vm = this;

  vm.count = getCount() || 0;
  vm.numberA = 0;
  vm.numberB = 0;
  vm.total = 0;

  vm.addNumbers = function() {
    vm.total = add(vm.numberA, vm.numberB)
  }

  vm.addCount = function() {
    addCount()
    vm.count = getCount()
  }

  vm.subtractCount = function() {
    subtractCount()
    vm.count = getCount()
  }

}

export { ArticlesController };
