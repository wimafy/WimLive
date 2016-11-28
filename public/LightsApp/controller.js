var app = angular.module('myApp', []);






app.controller('myCtrl', function($scope, $timeout, $interval, $scope, $http) {



    //all of this mess is time syncing

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
       //console.log($scope.tplus2);
       //console.log($scope.actualtimestring);
       $scope.tplus3 ++;
         document.getElementById("colordiv3").innerHTML = $scope.tplus3;
    }

    $scope.updatetime2 = function() {
      setInterval( function(){$scope.timeupdater2()}, 100);
      setInterval( function(){$scope.timeresync()}, 15000);
    }

//end of time syncing


//begin color changing


    //time countdown function
    $scope.timecountdownfunction = function(inittime) {
      if((inittime - $scope.actualtime) > 0){
        document.getElementById("LightsAppColorDiv").innerHTML = (inittime - $scope.actualtime).toString().slice(0,-3);
      }
      $timeout(function () {
        if((inittime - $scope.actualtime) > 0){
          document.getElementById("LightsAppColorDiv").innerHTML = (inittime - $scope.actualtime).toString().slice(0,-3);
        }
      }, 1000);
      $timeout(function () {
        if((inittime - $scope.actualtime) > 0){
          document.getElementById("LightsAppColorDiv").innerHTML = (inittime - $scope.actualtime).toString().slice(0,-3);
        }
      }, 2000);
      $timeout(function () {
        if((inittime - $scope.actualtime) > 0){
          document.getElementById("LightsAppColorDiv").innerHTML = (inittime - $scope.actualtime).toString().slice(0,-3);
        }
      }, 3000);
      $timeout(function () {
        if((inittime - $scope.actualtime) > 0){
          document.getElementById("LightsAppColorDiv").innerHTML = (inittime - $scope.actualtime).toString().slice(0,-3);
        }
      }, 4000);
      $timeout(function () {
        if((inittime - $scope.actualtime) > 0){
          document.getElementById("LightsAppColorDiv").innerHTML = (inittime - $scope.actualtime).toString().slice(0,-3);
        }
      }, 5000);
      $timeout(function () {
        if((inittime - $scope.actualtime) > 0){
          document.getElementById("LightsAppColorDiv").innerHTML = (inittime - $scope.actualtime).toString().slice(0,-3);
        }
      }, 6000);
      $timeout(function () {
        if((inittime - $scope.actualtime) > 0){
          document.getElementById("LightsAppColorDiv").innerHTML = (inittime - $scope.actualtime).toString().slice(0,-3);
        }
      }, 7000);
      $timeout(function () {
        if((inittime - $scope.actualtime) > 0){
          document.getElementById("LightsAppColorDiv").innerHTML = (inittime - $scope.actualtime).toString().slice(0,-3);
        }
      }, 8000);
      $timeout(function () {
        if((inittime - $scope.actualtime) > 0){
          document.getElementById("LightsAppColorDiv").innerHTML = (inittime - $scope.actualtime).toString().slice(0,-3);
        }
      }, 9000);

    }


    //changing colors and stuff
    var lightsChangeArray = [
      {color: '#f44336', timeMS: 0000},
      {color: '#E91E63', timeMS: 4000},
      {color: '#9C27B0', timeMS: 7000},
      {color: '#673AB7', timeMS: 10000},
      {color: '#3F51B5', timeMS: 16000},
      {color: '#2196F3', timeMS: 18000},
      {color: '#03A9F4', timeMS: 21000},
      {color: '#00BCD4', timeMS: 25000},
      {color: '#009688', timeMS: 32000},
      {color: '#4CAF50', timeMS: 38000},
      {color: '#8BC34A', timeMS: 39000},
      {color: '#CDDC39', timeMS: 40000},
      {color: '#FFEB3B', timeMS: 42000},
      {color: '#FFC107', timeMS: 45000},
      {color: '#FF9800', timeMS: 50000},
      {color: '#FF5722', timeMS: 52000},
      {color: '#795548', timeMS: 54000},
      {color: '#9E9E9E', timeMS: 60000},
      {color: '#607D8B', timeMS: 62000},
      {color: '#d32f2f', timeMS: 64000},
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

    //millisecond that show will start
    $scope.lightsChangeArrayInitTime =   1480347521221        ;

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

          //console.log(key);
          if(key == 0){
            console.log(this.timeMSforeachSubtract);
            if(this.timeMSforeachSubtract > 0) {
              $scope.timecountdownfunction($scope.lightsChangeArrayInitTime);
            }else{
              document.getElementById("LightsAppColorDiv").innerHTML = "";
            }
          }


              //console.log("things");
              $timeout(function () {
                //alert("Test complete");
                //console.log( lightsChangeArray.color );
                //console.log($scope.actualtime);
                //console.log(this.timeMSforeach);
                document.getElementById("LightsAppColorDiv").style.backgroundColor = lightsChangeArray.color;
                document.getElementById("LightsAppColorDiv").innerHTML = "";
              }, this.timeMSforeachSubtract );


        }, 2000 );

      });
      //  $timeout(function () {
      //    console.log("endofall");
      //  }, 3000);
      }

    if($scope.booliean == true){
      $scope.iffunction();
      //runs funciton every 10 seconds to ensure syncing is up to date
      setInterval( function(){$scope.iffunction()}, 10000);
    }



//end color changing


});
