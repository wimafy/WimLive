var app = angular.module('myApp', []);






app.controller('myCtrl', function($scope, $timeout, $interval, $scope, $http) {

    //$http.get('http://127.0.0.1/BraxAttack.github.io/LightsApp/sysdate.php')
    //sets date of current time on machine (next two lines)
    $scope.currenttimeLocalinit = new Date();
    $scope.currenttimeLocal = $scope.currenttimeLocalinit.getTime();
    //pulls data from server


/*xampp
       $http.get('http://52.41.37.153/sysdate.php')
       .success(function(response) {


         $scope.phprespone = response;
         //sets variable as root so the variable can be accessed and added to
         $scope.servergettime = Number(response);
*/

         //xamarin for offline work

         //gets time from server in millsec from epoc
         $scope.phprespone =  $scope.currenttimeLocal;
         //sets variable as root so the variable can be accessed and added to
         $scope.servergettime = Number( $scope.currenttimeLocal);

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

/*xampp
    });
*/

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
/*xampp
       $http.get('http://52.41.37.153/sysdate.php')
       .success(function(response) {


         $scope.phprespone = response;
         //sets variable as root so the variable can be accessed and added to
         $scope.servergettime = Number(response);
*/

         //xamarin for offline work

         //gets time from server in millsec from epoc
         $scope.phprespone =  $scope.currenttimeLocal;
         //sets variable as root so the variable can be accessed and added to
         $scope.servergettime = Number( $scope.currenttimeLocal);

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


    /*xampp
       });

*/




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
      {color: '#D81B60', timeMS: 62000},
      {color: '#D81B60', timeMS: 63000},
      {color: '#D81B60', timeMS: 64000},
      {color: '#D81B60', timeMS: 65000},
      {color: '#D81B60', timeMS: 66000},
      {color: '#D81B60', timeMS: 67000},
      {color: '#D81B60', timeMS: 68000},
      {color: '#D81B60', timeMS: 69000},
      {color: '#D81B60', timeMS: 70000},
      {color: '#D81B60', timeMS: 71000},
      {color: '#D81B60', timeMS: 72000},
      {color: '#D81B60', timeMS: 73000},
      {color: '#D81B60', timeMS: 74000},
      {color: '#D81B60', timeMS: 75000},
      {color: '#D81B60', timeMS: 76000},
      {color: '#D81B60', timeMS: 77000},
      {color: '#D81B60', timeMS: 78000},
      {color: '#D81B60', timeMS: 79000},
      {color: '#D81B60', timeMS: 80000},
      {color: '#D81B60', timeMS: 81000},
      {color: '#D81B60', timeMS: 85000}
    ]

    $scope.lightsChangeArrayInitTime =   1480216670405       ;

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

          $timeout(function () {
            //alert("Test complete");
            //console.log( lightsChangeArray.color );
            //console.log($scope.actualtime);
            //console.log(this.timeMSforeach);
            document.getElementById("LightsAppColorDiv").style.backgroundColor = lightsChangeArray.color;
          }, this.timeMSforeachSubtract );

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
