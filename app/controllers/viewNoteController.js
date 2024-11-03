var noteApp = angular.module('noteApp')

.controller('viewNoteController', function($scope, $routeParams, $location) {
    const notes = JSON.parse(localStorage.getItem('notes'));
    $scope.note = notes[$routeParams.id];
    
    $scope.editNote = function(id) {
        $location.path('/edit/' + id);
    };
});