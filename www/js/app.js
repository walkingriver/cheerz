// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'cheerz' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'cheerz.services' is found in services.js
// 'cheerz.controllers' is found in controllers.js
(function () {
    angular.module('cheerz', ['ionic'])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        })

        .config(function ($stateProvider, $urlRouterProvider) {

            // Ionic uses AngularUI Router which uses the concept of states
            // Learn more here: https://github.com/angular-ui/ui-router
            // Set up the various states which the app can be in.
            // Each state's controller can be found in controllers.js
            $stateProvider
                .state('tab', {
                    url: '/tab',
                    abstract: true,
                    templateUrl: 'templates/tabs.html'
                })
                // Each tab has its own nav history stack:
                .state('tab.cheers', {
                    url: '/cheers',
                    views: {
                        'tab-cheers': {
                            templateUrl: 'templates/cheers.html',
                            controller: 'cheersController as vm'
                        }
                    }
                })
                .state('tab.cheer-detail', {
                    url: '/cheer/:cheerId',
                    views: {
                        'tab-cheers': {
                            templateUrl: 'templates/cheer-detail.html',
                            controller: 'cheerDetailController as vm'
                        }
                    }
                })
                .state('tab.home', {
                    url: '/home',
                    views: {
                        'tab-home': {
                            templateUrl: 'templates/home.html',
                            controller: 'homeController as vm'
                        }
                    }
                })
                .state('tab.about', {
                    url: '/about',
                    views: {
                        'tab-about' : {
                            templateUrl: 'templates/about.html'
                        }
                    }
                });

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/tab/home');

        });
})();