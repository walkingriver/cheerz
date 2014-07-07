(function () {
    'use strict';

    var controllerId = 'homeController';

    //TODO: Put your dependencies here
    angular.module('cheerz')
        .controller(controllerId, ['cheerContext', homeController]);

    function homeController(cheerContext) {
        var id = 0;
        var vm = this;
        vm.cheers = _.sortBy(cheerContext.all(), 'order');
        resetCheers();

        vm.activate = activate;
        vm.title = 'Home';
        vm.nextCheer = nextCheer;

        activate();

        function activate() {
        }

        function nextCheer() {
            vm.currentCheer = vm.cheers[++id];
            if (!vm.currentCheer) {
                resetCheers();
            }
        }

        function resetCheers() {
            id = 0;
            vm.currentCheer = vm.cheers[id];
        }
    }
})();