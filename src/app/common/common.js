import angular from 'angular';

import { someService } from './some.service'

export default angular
  .module('esmTest.common', [])
  .factory('someService', someService)
  .name;
