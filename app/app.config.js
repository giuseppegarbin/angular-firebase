'use strict';

angular.
    module('meetAngular').
        config(['$locationProvider' ,'$routeProvider',
            function config($locationProvider, $routeProvider) {

                $locationProvider.
                    hashPrefix('!');

                $routeProvider.
                    when('/projects', {
                        template: '<projects></projects>'
                    }).
                    when('/projects/:projectId', {
                        template: '<project-tasks></project-tasks>'
                    }).
                    otherwise('/projects');
            }
]);