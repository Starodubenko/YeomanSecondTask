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
    }, function (newValue) {
      if (newValue != '/') {
        var currentNav = newValue.substring(1, newValue.length);
        $scope.currentNav = currentNav;
      } else {
        $scope.currentNav = "home";
      }
      getAnimationCalss($scope.currentNav);
    });
  }
})();
