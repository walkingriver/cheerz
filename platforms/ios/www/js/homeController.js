(function () {
    'use strict';

    var controllerId = 'homeController';

    //TODO: Put your dependencies here
    angular.module('cheerz')
        .controller(controllerId, ['cheerContext', homeController]);

    function homeController(cheerContext) {
        var vm = this;
        vm.currentCheer = cheerContext.currentCheer();
        vm.activate = activate;
        vm.title = 'Home';
        vm.nextCheer = function() {vm.currentCheer = cheerContext.nextCheer();};

        activate();

        function activate() {
        }
    }
})();