var app = angular.module('myApp', []);

app.controller('SettupController', function($scope, $timeout, $interval, $scope, $http) {

  // Event handlers
  //keyboard commands
  $scope.onKeyDownResult = "";
  $scope.onKeyUpResult = "";
  var getKeyboardEventResult = function (keyEvent, keyEventDesc)
   {
     return (window.event ? keyEvent.keyCode : keyEvent.which);
   };

  $scope.onKeyDown = function ($event) {

    $scope.onKeyDownResult = getKeyboardEventResult($event, "Key down");
    if($scope.onKeyDownResult == "38") {
      //alert("up");
      $scope.upThroughFrames();
    }
    if($scope.onKeyDownResult == "40") {
      //alert("down");
      $scope.downThroughFrames();
    }


  };


//end keyboard commands

// sets number of frames
$scope.numberofFrames = 500;

$scope.frames = [

];

$scope.columns = [

];

$scope.row = [

];

$scope.uponInit = function() {
  $timeout(function () {
      document.getElementById('timeline0').style.backgroundColor = "#4CAF50";


  }, 10);
}

$scope.addTimeMillsec = function() {
  //alert("things");
  $scope.frames.push([$scope.columns])
}

for(frame=0; frame<$scope.numberofFrames; frame++){
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

//sets current color as red to start
$scope.currentColorI = 1;

$scope.colorListArray = [
  "", "#f44336", "#E91E63",
  "#9C27B0", "#673AB7", "#3F51B5",
  "#2196F3", "#03A9F4", "#00BCD4",
  "#009688", "#4CAF50", "#8BC34A",
  "#CDDC39", "#FFEB3B", "#FFC107",
  "#FF9800", "#FF5722", "#795548",
  "#9E9E9E", "#607D8B"];


//create temp div and do the lookup in there

$scope.currentFrame = 0;
$scope.lastCurrentFrame = 0;

$scope.setCurrentFrame = function(indexvar) {

  $scope.currentFrame = indexvar;
  $scope.settimelineScrollClickDiv();
  //itterates through squares in frame
  for (row=0; row<38; row++) {
    for (seat=0; seat< 38; seat++) {
      document.getElementById('display'+row+"."+seat).style.backgroundColor = $scope.colorListArray[$scope.frames[indexvar][row][seat]];
    }
  }

if($scope.testIsRunning == false){
  for (row=0; row<38; row++) {
    for (seat=0; seat< 38; seat++) {
      document.getElementById('displayminusone'+row+"."+seat).style.backgroundColor = $scope.colorListArray[$scope.frames[indexvar - 1][row][seat]];
    }
  }
}else{
  for (row=0; row<38; row++) {
    for (seat=0; seat< 38; seat++) {
      document.getElementById('displayminusone'+row+"."+seat).style.backgroundColor = "";
    }
  }
}


}

$scope.totalFrames = $scope.frames.length - 1;

$scope.changeSquareColor = function(row, seat) {
  //alert(String(row)+ String(seat));
  $scope.frames[$scope.currentFrame][row][seat] = $scope.currentColorI;
  $scope.setCurrentFrame($scope.currentFrame);

}



$scope.settimelineScrollClickDiv = function() {
  document.getElementById('timeline'+$scope.lastCurrentFrame).style.backgroundColor = "#9E9E9E";
  document.getElementById('timeline'+$scope.currentFrame).style.backgroundColor = "#4CAF50";
  $scope.lastCurrentFrame = $scope.currentFrame;
}

$scope.upThroughFrames = function() {
  if($scope.currentFrame > 0) {
    $scope.currentFrame = $scope.currentFrame - 1;
    $scope.settimelineScrollClickDiv();
    $scope.setCurrentFrame($scope.currentFrame);
  }
}
$scope.downThroughFrames = function() {
  if($scope.currentFrame < $scope.totalFrames){
    $scope.currentFrame = $scope.currentFrame + 1;
    $scope.settimelineScrollClickDiv();
    $scope.setCurrentFrame($scope.currentFrame);
  }
}

$scope.setColor = function(color, index) {
  //alert(color + " " + index);
  document.getElementById('selectedColorDiv').style.backgroundColor = color;
  document.getElementById('selectedColorDiv').innerHTML = color;
  $scope.currentColorI = index;

}

//this boolean determines is set to define when the test is running (for the purpose of not showing the last frame while playing)
$scope.testIsRunning = false;
//sets initial frame to start test
$scope.runTestTimevar = 0;

//code for running Test display
$scope.incrimentFrame = function() {

  if ($scope.runTestTimevar >= $scope.frames.length) {
    clearInterval($scope.intervalId);
  } else {
    $scope.setCurrentFrame($scope.runTestTimevar + 1);
    $scope.runTestTimevar++;
    console.log($scope.runTestTimevar);
  }
}

$scope.runtest = function() {

  document.getElementById("runtestbutton").disabled = true;
  $timeout(function () {
    document.getElementById("runtestbutton").disabled = false;
  }, 200);
  $scope.runTestTimevar = 0;
  clearInterval($scope.intervalId);
  //this number is added onto to set a starting point for each next frame
  $scope.intervalId = setInterval($scope.incrimentFrame, 100);

}

$scope.stoptest = function() {

  //this number is added onto to set a starting point for each next frame
  clearInterval($scope.intervalId);
}

$scope.continuetest = function() {
  clearInterval($scope.intervalId);
  $scope.intervalId = setInterval($scope.incrimentFrame, 100);

}


});
