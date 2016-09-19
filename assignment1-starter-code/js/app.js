var app1 = angular.module("myApp", []);

app1.controller("myController", function($scope){
    $scope.dishes = "";
    $scope.countDishes = function() {
        var arr = $scope.dishes.split(",");
        console.log(arr.length);
        if(arr[0] == "" ){
            $scope.message = "Please enter data first";
        } else if(arr.length > 3) {
            $scope.message = "Too Much";
        } else {
            $scope.message = "Enjoy";
        }
    };
    $scope.message = ""
});
