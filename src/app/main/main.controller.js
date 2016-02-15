(function () {
  'use strict';

  angular
    .module('yeomanSecondTask')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(EmployeeService) {
    var vm = this;

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

    vm.registredPeopleList = EmployeeService.getRegistredPeopleList();

    vm.statuses = function (status) {
      return statuses[status];
    };

    vm.getMessageColor = function (status) {
      return messageColors[status];
    };

    vm.stringToBool = function(val){
      if (val == "true") return true;
      if (val == "false") return false;
    };

    vm.boolToStatus = function(val){
      if (val == true) return "yes";
      if (val == false) return "no";
    }
  }
})();
