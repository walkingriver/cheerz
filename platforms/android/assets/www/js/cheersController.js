(function () {
    'use strict';

    var controllerId = 'cheersController';

    //TODO: Put your dependencies here
    angular.module('cheerz')
        .controller(controllerId, ['cheerContext', cheersController]);

    function cheersController(cheerContext) {
        var vm = this;

        // Public properties
        vm.cheers = [];
        vm.title = 'Cheers';

        activate();

        // Private implementations
        function activate() {
            vm.cheers = loadCheers();
        }

        function loadCheers() {
            return cheerContext.all();
        }
    }
})();