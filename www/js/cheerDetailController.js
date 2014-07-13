(function () {
    'use strict';

    var controllerId = 'cheerDetailController';

    //TODO: Put your dependencies here
    angular.module('cheerz')
        .controller(controllerId, ['$stateParams', 'cheerContext', cheerDetailController]);

    function cheerDetailController($stateParams, cheerContext) {
        var vm = this;
        var id = $stateParams.cheerId;
        vm.cheer = {};
        vm.save = save;

        activate();

        function activate() {
            vm.cheer = angular.copy(cheerContext.get(id));
        }

        function save() {
            cheerContext.saveCheer(id, vm.cheer);
        }
    }
})();