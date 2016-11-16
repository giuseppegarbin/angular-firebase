'use strict';

var meetAngular = angular.module('meetAngular', [
    'meetAngularHome',
    'meetAngularAbout',
    'meetAngularBlog',
    'meetAngularBlogPost',
    'meetAngularBlogCategories',
    'meetAngularBlogCategory',
    'ngRoute'
]);

meetAngular.controller('MenuController', function($scope, $location) {
    $scope.menuClass = function(page) {
        var current = $location.path().substring(1);
        return page === current ? "active" : "";
    };
});