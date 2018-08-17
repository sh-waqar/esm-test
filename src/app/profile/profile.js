import angular from 'angular';
import config from './profile.routes.js';

import { ProfileController } from './profile.controller.js'

export default angular
  .module('esmTest.profile', [])
  .config(config)
  .controller('ProfileController', ProfileController)
  .name;
