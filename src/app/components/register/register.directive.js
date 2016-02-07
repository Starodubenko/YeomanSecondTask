(function () {
  'use strict';

  angular
    .module('yeomanSecondTask')
    .directive('register', register)
    .filter('possibleNamesFilters', possibleNamesFilters);

  /** @ngInject */
  function possibleNamesFilters() {
    return function (input) {
      var names = [];
      input.forEach(function (e) {
        if (names.indexOf(e.firstName) != -1) {
          var index = input.indexOf(e);
          if (index > -1) {
            input.splice(index, 1);
          }
        }
        names.push(e.firstName);
      });
      return input;
    };
  }

  /** @ngInject */
  function register() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/register/register.html',
      scope: true,
      controller: RegisterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function RegisterController($rootScope, $scope, $location) {

      $scope.getErrorMessage = {
        userNotExist: "There is no such employee",
        require: "You should say to us your %s =)",
        email: "Domain of that mail don't match with epam.com!",
        minlength: "Min length must be not less then %s symbols",
        maxlength: "Max length must be not more then %s symbols"
      };

      $scope.user = {
        firstName: '',
        lastName: '',
        email: '',
        willBeAtTheParty: '',
        bringingOnePlus: false,
        broughtName: ''
      };

      $scope.$watch('form.uEmail.$viewValue', function (newValue, oldValue) {
        if (newValue) {
          var domain = newValue.substring(newValue.indexOf("@") + 1, newValue.leading);
          if (domain != "epam.com") {
            $scope.form.uEmail.$error.email = true;
          }
        }
      })
      ;

      var checkFirstName = function (firstName) {
        var result = false;
        $rootScope.possiblePeople.some(function (e) {
          if (e.firstName == firstName) {
            if ($scope.user.lastName == e.lastName) {
              result = true;
            }
          }
        });
        return result;
      };

      var checkLastName = function (lastName) {
        var result = false;
        $rootScope.possiblePeople.some(function (e) {
          if (e.lastName == lastName) {
            if ($scope.user.firstName == e.firstName) {
              result = true;
            }
          }
        });
        return result;
      };

      $scope.$watch('form.uFirstName.$viewValue', function (newValue, oldValue) {
        if (newValue) {
          $scope.form.$error.userNotExist = !checkFirstName(newValue);
        }
      });

      $scope.$watch('form.uLastName.$viewValue', function (newValue, oldValue) {
        if (newValue) {
          $scope.form.$error.userNotExist = !checkLastName(newValue);
        }
      });

      $scope.selectDroppedFirstName = function(e){
        angular.element(e.target.parentElement.parentElement).removeClass('dropped');
        $scope.user.firstName = e.target.text;
      };
      $scope.selectDroppedLastName = function(e){
        angular.element(e.target.parentElement.parentElement).removeClass('dropped');
        $scope.user.lastName = e.target.text;
      };

      $scope.regUser = function () {
        var success = $rootScope.registredPeople.push($scope.user);
        $location.path('/home').replace();
      };

      $scope.dropDownMenu = function(e){
        var el = angular.element(e.parentElement.parentElement)
      }
    }
  }

})();
