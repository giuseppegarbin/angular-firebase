'use strict';

var meetAngularProjects = angular.module('meetAngularProjects', [
    'firebase'
]);

meetAngularProjects.component('projects', {
    templateUrl: 'app/projects/projects.template.html',
    controller: ['$firebaseObject',
        function meetAngularProjectsController($firebaseObject) {

            const rootRef = firebase.database().ref();
            const refProjects = rootRef.child('projects');
            this.projects = $firebaseObject(refProjects);
        }
    ]
});