var app = angular.module('myApp', ['ngMaterial']);

app.controller('SettupController', function($scope, $timeout, $interval, $scope, $http) {

$scope.timevar = 30;

$scope.audioElementVar = document.getElementById('audioElement');

  $scope.musicfunction = function(argument) {

    if(argument == "play"){
      $scope.audioElementVar.play();
    }else if(argument == "pause"){
      $scope.audioElementVar.pause();
    }else if(argument == "volup"){
      $scope.audioElementVar.volume+=0.1;
    }else if(argument == "voldown"){
      $scope.audioElementVar.volume-=0.1;
    }else if(argument == "setTime"){
      $scope.audioElementVar.currentTime=$scope.timevar;
      $scope.audioElementVar.play();
    }


  }


});
