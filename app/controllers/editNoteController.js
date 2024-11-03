var noteApp = angular.module('noteApp')

.controller('editNoteController', function($scope, $routeParams, $location) {
    const notes = JSON.parse(localStorage.getItem('notes'));
    $scope.note = angular.copy(notes[$routeParams.id]);

    $scope.saveEdit = function() {
        notes[$routeParams.id] = $scope.note;
        localStorage.setItem('notes', JSON.stringify(notes));
        $location.path('/');
    };
});