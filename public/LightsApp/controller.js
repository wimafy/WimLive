var app = angular.module('myApp', []);






app.controller('myCtrl', function($scope, $timeout, $interval, $scope, $http) {

    //$http.get('http://127.0.0.1/BraxAttack.github.io/LightsApp/sysdate.php')
    //sets date of current time on machine (next two lines)
    $scope.currenttimeLocalinit = new Date();
    $scope.currenttimeLocal = $scope.currenttimeLocalinit.getTime();
    //pulls data from server



       $http.get('http://52.41.37.153/sysdate.php')
       .success(function(response) {


         $scope.phprespone = response;
         //sets variable as root so the variable can be accessed and added to
         $scope.servergettime = Number(response);


         //xamarin for offline work

         //gets time from server in millsec from epoc
         //$scope.phprespone =  $scope.currenttimeLocal;
         //sets variable as root so the variable can be accessed and added to
         //$scope.servergettime = Number( $scope.currenttimeLocal);

         //end offline work



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


         $scope.phprespone = response;
         //sets variable as root so the variable can be accessed and added to
         $scope.servergettime = Number(response);


         //xamarin for offline work

         //gets time from server in millsec from epoc
         //$scope.phprespone =  $scope.currenttimeLocal;
         //sets variable as root so the variable can be accessed and added to
         //$scope.servergettime = Number( $scope.currenttimeLocal);

         //end offline work


         //no idea lol
         $scope.updatetime2;
         //gets second time on machine
         $scope.currenttimeLocalinit2 = new Date();
         $scope.currenttimeLocal2 = $scope.currenttimeLocalinit2.getTime();
         //first time on machine taken minus second time devided by 2 == one way trip
         $scope.timedifference = Math.floor(($scope.currenttimeLocal2 - $scope.currenttimeLocal)/2);
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
      setInterval( function(){$scope.timeresync()}, 15000);
    }



    //changing colors and stuff
    var lightsChangeArray = [
      {color: '#f44336', timeMS: 60000},
      {color: '#E91E63', timeMS: 65000},
      {color: '#9C27B0', timeMS: 70000},
      {color: '#673AB7', timeMS: 75000},
      {color: '#3F51B5', timeMS: 80000},
      {color: '#2196F3', timeMS: 85000},
      {color: '#03A9F4', timeMS: 90000},
      {color: '#00BCD4', timeMS: 95000},
      {color: '#009688', timeMS: 100000},
      {color: '#4CAF50', timeMS: 105000},
      {color: '#8BC34A', timeMS: 110000},
      {color: '#CDDC39', timeMS: 115000},
      {color: '#FFEB3B', timeMS: 120000},
      {color: '#FFC107', timeMS: 125000},
      {color: '#FF9800', timeMS: 130000},
      {color: '#FF5722', timeMS: 135000},
      {color: '#795548', timeMS: 140000},
      {color: '#9E9E9E', timeMS: 145000},
      {color: '#607D8B', timeMS: 1500000},
      {color: '#d32f2f', timeMS: 155000},
      {color: '#C2185B', timeMS: 160000}
    ]

    $scope.lightsChangeArrayInitTime =   1480217436708   ;

    //only fires if booliean is true
    $scope.booliean = true;



    $scope.iffunction = function() {
      angular.forEach(lightsChangeArray, function (lightsChangeArray, key, data) {
        $timeout(function () {
          this.timeMSforeach = $scope.lightsChangeArrayInitTime + lightsChangeArray.timeMS;
          this.timeMSforeachSubtract = this.timeMSforeach - $scope.actualtime;
          //console.log( lightsChangeArray.color );
          //console.log($scope.actualtime);
          //console.log(this.timeMSforeach);
          console.log(this.timeMSforeachSubtract);
          if(this.timeMSforeachSubtract > 0) {
              console.log("things");
              $timeout(function () {
                //alert("Test complete");
                //console.log( lightsChangeArray.color );
                //console.log($scope.actualtime);
                //console.log(this.timeMSforeach);
                document.getElementById("LightsAppColorDiv").style.backgroundColor = lightsChangeArray.color;
              }, this.timeMSforeachSubtract );
          }

        }, 2000 );





        });
        $timeout(function () {
        console.log("endofall");
      }, 3000);
      }

    if($scope.booliean == true){
      $scope.iffunction();
      setInterval( function(){$scope.iffunction()}, 10000);
    }






});
