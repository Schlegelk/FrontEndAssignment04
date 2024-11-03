var noteApp = angular.module('noteApp', []);

noteApp.controller('mainController', function($scope, $location) {
    $scope.notes = JSON.parse(localStorage.getItem('notes')) || [];

    $scope.goToNewNote = function() {
        $location.path('/new');
    };

    $scope.viewNote = function(id) {
        $location.path('/view/' + id);
    };

    $scope.deleteNote = function(id) {
        $scope.notes.splice(id, 1);
        localStorage.setItem('notes', JSON.stringify($scope.notes));
    };
});