export default function config($stateProvider) {
  'ngInject';

  var params = [
    // 'tagA',
    // 'tagB',
    // 'tagC',
    // 'tagD',
    // 'tagE',
    // 'tagF',
    // 'tagG',
    'q'
  ].join('&');

  $stateProvider
    .state('http', {
      url: `/http?${params}`,
      template: require('./http.html'),
      controller: 'HttpController',
      controllerAs: 'vm',
    });
}
