function ArticlesController(someService) {
  'ngInject';
  var vm = this;

  vm.count = 0
  vm.numberA = 0;
  vm.numberB = 0;

  someService.setCount(vm.count);

  vm.addNumbers = function() {
    vm.count = articlesService.adds(vm.numberA, vm.numberB)
  }

  vm.addCount = function() {
    someService.addCount()
    vm.count = someService.getCount()
  }

  vm.subtractCount = function() {
    someService.subtractCount()
    vm.count = someService.getCount()
  }

}

export { ArticlesController };
