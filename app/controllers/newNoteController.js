var noteApp = angular.module('noteApp')

.controller('newNoteController', function($scope, $location) {
    $scope.saveNote = function() {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push({ title: $scope.title, content: $scope.content });
        localStorage.setItem('notes', JSON.stringify(notes));
        $location.path('/');
    };
});