'use strict';

var meetAngularBlogCategory = angular.module('meetAngularBlogCategory', []);

meetAngularBlogCategory.component('blogCategory', {
    templateUrl: 'app/blog-category/blog-category.template.html',
    controller: function meetAngularBlogCategoryController() {
        this.id = "automotive";
        this.name = "Automotive";
    }
});