export default function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('profile', {
      url: '/profile',
      template: require('./profile.html'),
      // controller: 'ProfileController',
      // controllerAs: 'vm',
    });
}
