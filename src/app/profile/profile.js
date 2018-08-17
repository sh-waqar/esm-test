import angular from 'angular';
import config from './profile.routes.js';

export default angular
  .module('esmTest.profile', [])
  .config(config)
  .name;
