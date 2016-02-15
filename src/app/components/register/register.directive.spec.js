(function() {
  'use strict';


  describe('directive register', function() {
    var vm;
    var el;

    beforeEach(module('yeomanSecondTask'));
    beforeEach(inject(function($compile, $rootScope) {

      el = angular.element('<register></register>');

      $compile(el)($rootScope.$new());
      $rootScope.$digest();
      vm = el.isolateScope();
    }));

    it('should be compiled', function() {
      expect(el.html()).not.toEqual(null);
    });

    // it('should have isolate scope object with instanciate members', function() {
    //   expect(vm).toEqual(jasmine.any(Object));
    // });
  });
})();
