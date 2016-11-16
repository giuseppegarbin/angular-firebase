'use strict';

var meetAngularBlog = angular.module('meetAngularBlog', []);

meetAngularBlog.component('blogIndex', {
    templateUrl: 'app/blog/blog.template.html',
    controller: function meetAngularBlogController() {
        this.posts = [
            {
                id: '1',
                title: 'Exploring Repeat Grid In Adobe XD',
                subtitle: 'If you’re a visual designer, you probably spend a majority of your time making small adjustments to multiple visual elements.',
                url: 'exploring-repeat-grid-in-adobe-xd'
            }, {
                id: '2',
                title: 'True Lies Of Optimistic User Interfaces',
                subtitle: 'Three user interfaces (UIs) go to a pub. The first one orders a drink, then several more. A couple of hours later, it asks for the bill and leaves the pub drunk.',
                url: 'true-lies-of-optimistic-user-interfaces'
            }, {
                id: '3',
                title: 'You, Me And The Emoji: Character Sets, Encoding And Emoji',
                subtitle: 'We all recognize emoji. They’ve become the global pop stars of digital communication. But what are they, technically speaking?',
                url: 'character-sets-encoding-emoji'
            }
        ];
    }
});