(function () {
  'use strict';

  angular
    .module('yeomanSecondTask')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: true,
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }

  /** @ngInject */
  function NavbarController($rootScope, $scope, $location) {
    $rootScope.fields = {
      pageClass:''
    };

    var navigation = ["home", "sign-up"];
    var oldNavIndex = -1;

    var getAnimationCalss = function(newNav){
      var newNavIndex = navigation.indexOf(newNav);
      if (newNavIndex < oldNavIndex){
        $rootScope.fields.pageClass = "left";
      } else {
        $rootScope.fields.pageClass = "right";
      }
      oldNavIndex = newNavIndex;
    };

    $scope.$watch(function () {
      return $location.path();
    }, function (newValue, oldValue) {
      if (newValue != '/') {
        var currentNav = newValue.substring(1, newValue.length);
        $scope.currentNav = currentNav;
      } else {
        $scope.currentNav = "home";
      }
      getAnimationCalss($scope.currentNav);
    });

    $rootScope.registredPeople = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'Doe@gmail.com',
        willBeAtTheParty: 'yes',
        bringingOnePlus: true,
        broughtName: 'John Smith'
      },
      {
        firstName: 'Robert',
        lastName: 'Smith',
        email: 'Smith@gmail.com',
        willBeAtTheParty: 'no',
        bringingOnePlus: false,
        broughtName: ''
      },
      {
        firstName: 'Grant',
        lastName: 'Imahara',
        email: 'Imahara@gmail.com',
        willBeAtTheParty: 'maybe',
        bringingOnePlus: false,
        broughtName: ''
      }];

    $rootScope.possiblePeople = [
      {
        firstName: 'Rody',
        lastName: 'Star'
      },
      {
        firstName: 'Michel',
        lastName: 'Orsborn'
      },
      {
        firstName: 'Jerry',
        lastName: 'Cukerman'
      },
      {
        firstName: 'Joshua',
        lastName: 'Malder'
      },
      {
        firstName: 'Judy',
        lastName: 'Colman'
      }];
  }

})();
