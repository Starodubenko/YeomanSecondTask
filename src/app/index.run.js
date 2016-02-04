(function() {
  'use strict';

  angular
    .module('yeomanSecondTask')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
