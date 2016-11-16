'use strict';

var meetAngularBlogCategories = angular.module('meetAngularBlogCategories', []);

meetAngularBlogCategories.component('blogCategories', {
    templateUrl: 'app/blog-categories/blog-categories.template.html',
    controller: function meetAngularBlogCategoriesController() {
        this.categories = [
            {
                id: 'automotive',
                name: 'Automotive'
            }, {
                id: 'sport-e-outdoor',
                name: 'Sport & Outdoor'
            }, {
                id: 'fitness',
                name: 'Fitness'
            }, {
                id: 'marine',
                name: 'Marine'
            }
        ];
    }
});