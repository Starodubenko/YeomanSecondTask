(function () {
  'use strict';

  angular
    .module('yeomanSecondTask')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {
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

    $scope.statuses = function(status){
      return statuses[status];
    };

    $scope.getMessageColor = function(status){
      return messageColors[status];
    };

    //$scope.regNew = function () {
    //  $scope.registredPeople.put({})
    //};
    //
    //$scope.$on('registredUser',function(data){
    //  $scope.registredPeople.push(data);
    //});
  }
})();
