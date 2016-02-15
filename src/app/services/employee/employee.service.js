(function () {
  'use strict';

  angular.module('yeomanSecondTask')
    .service('EmployeeService', EmployeeService);

  /** @ngInject */
  function EmployeeService() {
    this.getPossiblePeopleList = function () {
      return possiblePeople;
    };

    this.getRegistredPeopleList = function () {
      return registredPeople;
    };

    this.addRegistredEmployee = function (newRegistredEmployee) {
      return registredPeople.push(newRegistredEmployee);
    };

    var registredPeople = [
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

    var possiblePeople = [
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

