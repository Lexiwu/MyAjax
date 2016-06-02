/// <reference path="../angular.js" />
/// <reference path="myform_main.js" />
/// <reference path="../../jquery-1.12.3.js" />


//1.設定jQuery
//2.jQuery get資料


formapp.controller('formData', ['$scope', function ($scope) {
    $scope.myArray = [];
    $.get("http://localhost/MyAPI/api/myapi/Get")
    .done(function (data) {
       
        for (var i = 0; i < data.length; i++) {
            $scope.myArray.push({
                ID: data[i].ID,
                Name: data[i].Name,
                Email: data[i].Email,
                Subject: data[i].Subject,
                Message: data[i].Message
            });

        }
        $scope.$apply();
    });

    $scope.modify = function (myModifyItem) {
        alert('我按下修改了');
        console.log(myModifyItem);
    }
    //fu(1111,222)
    $scope.delete = function (myDeleteItem,index) {
        
        $.post("http://localhost/MyAPI/api/myapi/Delete?ID=" + myDeleteItem.ID)
        .done(function (removed) {
            console.log("work");
            $scope.myArray.splice(index, 1);
            $scope.$apply();
        });
        


    }

}]);

