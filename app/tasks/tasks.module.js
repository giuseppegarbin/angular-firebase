'use strict';

var meetAngularTasks = angular.module('meetAngularTasks', []);

meetAngularTasks.component('projectTasks', {
    templateUrl: 'app/tasks/tasks.template.html',
        controller: ['$routeParams', '$firebaseObject',
            function meetAngularTasksController($routeParams, $firebaseObject) {

            const rootRef = firebase.database().ref().child('projects').child($routeParams.projectId);
            const refTasks = rootRef.child('tasks');
            this.tasks = $firebaseObject(refTasks);
        }
    ]
});