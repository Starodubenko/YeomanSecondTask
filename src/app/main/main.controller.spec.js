(function () {
  'use strict';

  describe('controllers', function () {
    var vm;
    var $scope = null;

    beforeEach(module('yeomanSecondTask'));

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $scope = _$rootScope_.$new();
        vm = _$controller_('MainController', {
          $scope: $scope
        })
      })
    );

    it('get "Will be there" status', function(){
      expect(vm.statuses('yes')).toEqual('Will be there');
    });

    it('get "Won\'t be there" status', function(){
      expect(vm.statuses('no')).toEqual('Won\'t be there');
    });

    it('get "Will be there, maybe" status', function(){
      expect(vm.statuses('maybe')).toEqual('Will be there, maybe');
    });



  });
})();
