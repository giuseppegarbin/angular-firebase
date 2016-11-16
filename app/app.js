'use strict';

var meetAngular = angular.module('meetAngular', [
    'meetAngularProjects',
    'meetAngularTasks',
    'firebase',
    'ngRoute'
]);

var config = {
    apiKey: "AIzaSyAE01ncWIFEQGFfgKMBUmEN5ya69v6OtiI",
    authDomain: "meet-angular.firebaseapp.com",
    databaseURL: "https://meet-angular.firebaseio.com",
    storageBucket: "meet-angular.appspot.com",
    messagingSenderId: "486967478800"
};
firebase.initializeApp(config);

meetAngular.controller('SiteController', function($firebaseObject) {
    const rootRef = firebase.database().ref();
    const refUsers = rootRef.child('users');
    this.object = $firebaseObject(refUsers);
});