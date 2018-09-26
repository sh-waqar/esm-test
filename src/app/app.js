import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import articles from './articles/articles';
import profile from './profile/profile';
import http from './http/http';

import common from './common/common';

import 'spectre.css';
import 'whatwg-fetch'
import 'promise-polyfill/src/polyfill';

export default angular
  .module('esmTest', [
    ngResource,
    uirouter,
    http,

    common,
    articles,
    profile
  ])
  .name;
