(function () {
  'use strict';

  angular
    .module('yeomanSecondTask')
    .controller('MainController', MainController)
    .filter('attendingFilter', attendingFilter);

  /** @ngInject */
  function attendingFilter() {
    return function (input) {
      input.forEach(function (e) {

      });
      return input;
    };
  }

  /** @ngInject */
  function MainController($scope) {
    $scope.pageClass = 'right';
    var messageColors = {
      yes: "will-be",
      no: "will-not-be",
      maybe: "maybe-will-be",
      true: "brought"
    };

    var statuses = {
      yes: "Will be there",
      no: "Won't be there",
      maybe: "Will be there, maybe"
    };

    $scope.statuses = function (status) {
      return statuses[status];
    };

    $scope.getMessageColor = function (status) {
      return messageColors[status];
    };

    $scope.stringToBool = function(val){
      if (val == "true") return true;
      if (val == "false") return false;
    };

    $scope.boolToStatus = function(val){
      if (val == true) return "yes";
      if (val == false) return "no";
    }
  }
})();
