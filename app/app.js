var noteApp = angular.module('noteApp', ['ngRoute'])

.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'mainController',
            templateUrl: 'app/templates/main.html'
        })
        .when('/new', {
            controller: 'newNoteController',
            templateUrl: 'app/templates/newNote.html'
        })
        .when('/view/:id', {
            controller: 'viewNoteController',
            templateUrl: 'app/templates/viewNote.html'
        })
        .when('/edit/:id', {
            controller: 'editNoteController',
            templateUrl: 'app/templates/editNote.html'
        })
        .otherwise({ redirectTo: '/'});
});