/// <reference path="../angular.js" />
/// <reference path="main.js" />
app.controller('FirstCtrl', ['$scope', function ($scope) {
    //$scope.model.studentList
    $scope.studentList = [];
    for (i = 0; i < 50; i++) {
        $scope.studentList.push({ name: 'Name' + i, Numbers: i });
    }

}]);