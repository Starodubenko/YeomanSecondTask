(function () {
  'use strict';

  angular
    .module('yeomanSecondTask')
    .config(routerConfig)
    .controller('routerAnimateController', routerAnimateController);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('register', {
        url: '/sign-up',
        template: '<register></register>'
      });

    $urlRouterProvider.otherwise('/');
  }
})();
