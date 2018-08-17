import angular from 'angular';
import config from './articles.routes.js';

export default angular
  .module('esmTest.articles', [])
  .config(config)
  .name;
