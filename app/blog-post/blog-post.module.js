'use strict';

var meetAngularBlogPost = angular.module('meetAngularBlogPost', ['ngRoute']);

meetAngularBlogPost.component('blogPost', {
    templateUrl: 'app/blog-post/blog-post.template.html',
    controller: ['$routeParams',
        function meetAngularBlogPostController($routeParams) {
            this.id = $routeParams.postId;
            this.title = 'Qesto è il titolo del post con ID ' + this.id;
            this.subtitle = 'Questo è il sottotitolo del post';
            this.categories = [
                'automotive',
                'sport'
            ];
            this.mainbody = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores aut, cumque deserunt et magnam mollitia odio omnis quaerat quam, qui quidem reiciendis tenetur. Ab, alias corporis debitis doloribus ipsum non ratione sapiente voluptas. Eum harum id nisi pariatur repellat sed tenetur vero! Accusantium aperiam assumenda cupiditate dignissimos dolore et harum impedit iusto nam neque, nisi, nostrum officia possimus quam quas, qui quibusdam quod sapiente vero voluptates! Alias aliquam amet animi culpa dolores ea eius, magni mollitia nesciunt, nobis perferendis, perspiciatis placeat quisquam quo rerum tempore totam voluptas. Accusamus dolore error ipsum molestias nihil omnis provident ratione reiciendis sapiente sint.";
        }
    ]
});