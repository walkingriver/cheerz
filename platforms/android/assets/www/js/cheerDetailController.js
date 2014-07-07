(function () {
    'use strict';

    var controllerId = 'cheerDetailController';

    //TODO: Put your dependencies here
    angular.module('cheerz')
        .controller(controllerId, ['$stateParams', 'cheerContext', cheerDetailController]);

    function cheerDetailController($stateParams, cheerContext) {
        var vm = this;
        vm.cheer = cheerContext.get($stateParams.cheerId);

        vm.activate = activate;
        vm.title = 'cheerDetailController';

        activate();

        function activate() {
        }
    }
})();