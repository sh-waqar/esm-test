import angular from 'angular';
import config from './articles.routes.js';

import { ArticlesController } from './articles.controller.js'

export default angular
  .module('esmTest.articles', [])
  .config(config)
  .controller('ArticlesController', ArticlesController)
  .name;
