'use strict';

var meetAngularAbout = angular.module('meetAngularAbout', []);

meetAngularAbout.component('aboutMe', {
    templateUrl: 'app/about/about.template.html',
    controller: function meetAngularAboutController() {
        this.title = 'Ciao!';
        this.subtitle = 'Questa è la pagina About';
        this.mainbody = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta explicabo itaque laudantium numquam officia omnis provident, quae quos tempora ut? Distinctio illum ipsa, itaque molestiae odio praesentium sunt velit voluptate!';
        this.linklabel = 'Scarica il mio CV';
        this.linkurl = 'http://google.com';
    }
});