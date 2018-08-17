export default function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('profile', {
      url: '/',
      template: require('./profile.html'),
      controller: 'ProfileController',
      controllerAs: 'vm',
    });
}
