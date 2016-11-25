var app = angular.module('myApp', []);






app.controller('myCtrl', function($scope, $timeout, $interval, $scope, $http) {

    //$http.get('http://127.0.0.1/BraxAttack.github.io/LightsApp/sysdate.php')
    //sets date of current time on machine (next two lines)
    $scope.currenttimeLocalinit = new Date();
    $scope.currenttimeLocal = $scope.currenttimeLocalinit.getTime();
    //pulls data from server
    $http.get('http://52.41.37.153/sysdate.php')
    .success(function(response) {

      //gets time from server in millsec from epoc
      $scope.phprespone = response;
      //sets variable as root so the variable can be accessed and added to
      $scope.servergettime = Number(response);
      //no idea lol
      $scope.updatetime2;
      //gets second time on machine
      $scope.currenttimeLocalinit2 = new Date();
      $scope.currenttimeLocal2 = $scope.currenttimeLocalinit2.getTime();
      //first time on machine taken minus second time devided by 2 == one way trip
      $scope.timedifference = ($scope.currenttimeLocal2 - $scope.currenttimeLocal)/2;
      //one way trip time is added to the server returned time
      $scope.currenttimeadded = Number($scope.servergettime) + Number($scope.timedifference);
      $scope.currenttime2 = Number($scope.servergettime) + Number($scope.timedifference);

      //alert("wee");
    });

    $scope.tplus2 = 0;
    $scope.tplus3 = 0;

    $scope.timeupdater2 = function() {
      $scope.tplus2 += 100;
      $scope.actualtime = $scope.currenttime2 + $scope.tplus2;
      document.getElementById("colordiv2").innerHTML = $scope.actualtime;
      $scope.actualtimestring = String($scope.actualtime);
      //console.log($scope.actualtimestring);
      $scope.actualtimestring = $scope.actualtimestring.substring(1, 11);
      document.getElementById("colordiv").innerHTML = $scope.actualtimestring;
      $scope.actualtimestringnumber = Number($scope.actualtimestring);

      if($scope.actualtimestringnumber %50 == 0){
        document.getElementById("colordiv").style.backgroundColor = "black";

      }else {
        document.getElementById("colordiv").style.backgroundColor = "blue";
      }


    }


    $scope.timeresync = function() {
       //document.getElementById("colordiv2").innerHTML = "whatever";
       //$scope.currenttime2 = 100;
       $scope.currenttimeLocalinit = new Date();
       $scope.currenttimeLocal = $scope.currenttimeLocalinit.getTime();

       $http.get('http://52.41.37.153/sysdate.php')
       .success(function(response) {

         //gets time from server in millsec from epoc
         $scope.phprespone = response;
         //sets variable as root so the variable can be accessed and added to
         $scope.servergettime = Number(response);
         //no idea lol
         $scope.updatetime2;
         //gets second time on machine
         $scope.currenttimeLocalinit2 = new Date();
         $scope.currenttimeLocal2 = $scope.currenttimeLocalinit2.getTime();
         //first time on machine taken minus second time devided by 2 == one way trip
         $scope.timedifference = ($scope.currenttimeLocal2 - $scope.currenttimeLocal)/2;
         //one way trip time is added to the server returned time
         $scope.currenttimeadded = Number($scope.servergettime) + Number($scope.timedifference);
         $scope.currenttime2 = Number($scope.servergettime) + Number($scope.timedifference);
          $scope.tplus2= 0;
         //alert("wee");
       });
       
       //$scope.currenttime2 = 0;
       console.log($scope.tplus2);
       console.log($scope.actualtimestring);
       $scope.tplus3 ++;
         document.getElementById("colordiv3").innerHTML = $scope.tplus3;
    }

    $scope.updatetime2 = function() {
      setInterval( function(){$scope.timeupdater2()}, 100);
      setInterval( function(){$scope.timeresync()}, 5000);
    }











});
