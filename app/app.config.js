'use strict';

angular.
    module('meetAngular').
        config(['$locationProvider' ,'$routeProvider',
            function config($locationProvider, $routeProvider) {

                $locationProvider.
                    hashPrefix('!');

                $routeProvider.
                    when('/home', {
                        template: '<home-page></home-page>'
                    }).
                    when('/about', {
                        template: '<about-me></about-me>'
                    }).
                    when('/blog', {
                        template: '<blog-index></blog-index>'
                    }).
                    when('/blog/:postId', {
                        template: '<blog-post></blog-post>'
                    }).
                    when('/categorie', {
                        template: '<blog-categories></blog-categories>'
                    }).
                    when('/categorie/:categoryId', {
                        template: '<blog-category></blog-category>'
                    }).
                    otherwise('/home');
            }
]);