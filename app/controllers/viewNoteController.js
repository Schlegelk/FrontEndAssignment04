var noteApp = angular.module('noteApp', []);

noteApp.controller('viewNoteController', function($scope, $routeParams) {
    $scope.note = notes[$routeParams.id];

    $scope.saveEdit = function() {
        notes[$routeParams.id] = $scope.note;
        localStorage.setItem('notes', JSON.stringify(notes));
    };
});