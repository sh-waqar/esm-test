export default function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('articles', {
      url: '/articles',
      template: require('./articles.html'),
      controller: 'ArticlesController',
      controllerAs: 'vm',
    });
}
