import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import articles from './articles/articles';
import profile from './profile/profile';

import common from './common/common';

export default angular
  .module('esmTest', [
    ngResource,
    uirouter,

    common,
    articles,
    profile
  ])
  .name;
