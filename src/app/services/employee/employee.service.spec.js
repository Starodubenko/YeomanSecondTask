describe('Service: yeomanSecondTask.EmployeeServic', function () {

    beforeEach(module('yeomanSecondTask'));

    var service;

    beforeEach(inject(function (_EmployeeService_) {
        service = _EmployeeService_;
    }));

    it('should be injected and defined', function () {
        expect(service).toBeDefined();
    });

    it('add user to registered guys', function () {
      var newUser = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'Vasya@epam.com',
        willBeAtTheParty: 'yes',
        bringingOnePlus: false,
        broughtName: 'Jessica Smith'
      };

      expect(service.getRegistredPeopleList().length).toEqual(3);
      service.addRegistredEmployee(newUser);
      expect(service.getRegistredPeopleList().length).toEqual(4);
      expect(service.getRegistredPeopleList()).toContain(newUser);
    });

});
