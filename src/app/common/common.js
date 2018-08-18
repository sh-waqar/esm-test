import angular from 'angular';
import { react2angular } from 'react2angular'

import { someService } from './some.service'
import SomeComponent from './some.component'
import AdvanceComponent from './advance.component'

export default angular
  .module('esmTest.common', [])
  .factory('someService', someService)
  .component('someComponent', react2angular(SomeComponent, ['fooBar', 'baz']))
  .component('advanceComponent', react2angular(AdvanceComponent, ['value']))
  .name;
