var app = angular.module('myApp', []);

app.controller('SettupController', function($scope, $timeout, $interval, $scope, $http) {

$scope.frames = [
["one","two","three"],["four","five","six"],["seven","eight","nine"]
];

$scope.columns = [

];

$scope.row = [

];



function printvar(x) {

   //document.write("Info:" + x + "<br />");
   var myname = x.split("_");
   //document.write("Frame:" + myname[0] + " Row:"+ myname[1] + "<br />");
   //$scope.bigarray[this.frame][this.row][this.cell]= "";


}


   for (row=0; row<=10; row++) {
     //console.log(row);
     //$scope.frames[this.frame].push(row);
     $scope.columns.push([]);
     for (seat=0; seat<=10; seat++) {
       //printvar("" + row + "_" + seat + "");
       $scope.columns[row].push([seat]);
     }
   }




});
