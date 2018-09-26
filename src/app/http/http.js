import angular from 'angular';
import config from './http.routes.js';

import { HttpController } from './http.controller.js'

export default angular
  .module('esmTest.http', [])
  .config(config)
  .controller('HttpController', HttpController)
  .name;
