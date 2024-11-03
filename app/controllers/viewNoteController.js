var noteApp = angular.module('noteApp')

.controller('viewNoteController', function($scope, $routeParams) {
    const notes = JSON.parse(localStorage.getItem('notes'));
    $scope.note = notes[$routeParams.id];
});