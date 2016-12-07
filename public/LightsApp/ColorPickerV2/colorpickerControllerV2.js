var app = angular.module('myApp', []);

app.controller('SettupController', function($scope, $timeout, $interval, $scope, $http) {

$scope.frames = [

];

$scope.columns = [

];

$scope.row = [

];

$scope.addTimeMillsec = function() {
  //alert("things");
  $scope.frames.push([$scope.columns])
}

for(frame=0; frame<10; frame++){
  $scope.frames.push([])
   for (row=0; row<38; row++) {
     //console.log(row);
     //$scope.frames[this.frame].push(row);
     $scope.frames[frame].push([]);
     for (seat=0; seat< 38; seat++) {
       //printvar("" + row + "_" + seat + "");
       $scope.frames[frame][row].push([]);
       $scope.frames[frame][row][seat] = 0;
     }
   }

   //holder for time
   //$scope.frames[frame].push([]);
   $scope.frames[frame][38] = "100";
 }

$scope.colorListArray = ["", "red", "yellow", "green", "orange", "brown", "pink", "maroon"];


//create temp div and do the lookup in there
$scope.currentFrame = 0;

$scope.setCurrentFrame = function(indexvar) {

  $scope.currentFrame = indexvar;
  //itterates through squares in frame
  for (row=0; row<38; row++) {


    for (seat=0; seat< 38; seat++) {

      document.getElementById('display'+row+"."+seat).style.backgroundColor = $scope.colorListArray[$scope.frames[indexvar][row][seat]];
    }
  }

}

$scope.changeSquareColor = function(row, seat) {
  //alert(String(row)+ String(seat));
  $scope.frames[$scope.currentFrame][row][seat] = 5;
  $scope.setCurrentFrame($scope.currentFrame);

}


});
