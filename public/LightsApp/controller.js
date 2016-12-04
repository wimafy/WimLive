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
      setInterval( function(){$scope.timeresync()}, 10000);
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
      {color: '#607D8B', timeMS: 150000},
      {color: '#d32f2f', timeMS: 155000},
      {color: '#C2185B', timeMS: 160000},
      {color: '#009688', timeMS: 170000},
      {color: '#4CAF50', timeMS: 175000},
      {color: '#8BC34A', timeMS: 180000},
      {color: '#CDDC39', timeMS: 185000},
      {color: '#FFEB3B', timeMS: 190000},
      {color: '#FFC107', timeMS: 195000},
      {color: '#FF9800', timeMS: 200000},
      {color: '#FF5722', timeMS: 205000},
      {color: '#795548', timeMS: 210000},
      {color: '#9E9E9E', timeMS: 215000},
      {color: '#607D8B', timeMS: 220000},
      {color: '#d32f2f', timeMS: 225000},
      {color: '#009688', timeMS: 230000},
      {color: '#4CAF50', timeMS: 235000},
      {color: '#8BC34A', timeMS: 240000},
      {color: '#CDDC39', timeMS: 245000},
      {color: '#FFEB3B', timeMS: 250000},
      {color: '#FFC107', timeMS: 255000},
      {color: '#FF9800', timeMS: 260000},
      {color: '#FF5722', timeMS: 265000},
      {color: '#795548', timeMS: 270000},
      {color: '#9E9E9E', timeMS: 275000},
      {color: '#607D8B', timeMS: 280000},
      {color: '#d32f2f', timeMS: 285000},
      {color: '#009688', timeMS: 290000},
      {color: '#4CAF50', timeMS: 295000},
      {color: '#8BC34A', timeMS: 300000},
      {color: '#CDDC39', timeMS: 305000},
      {color: '#FFEB3B', timeMS: 310000},
      {color: '#FFC107', timeMS: 315000},
      {color: '#FF9800', timeMS: 320000},
      {color: '#FF5722', timeMS: 325000},
      {color: '#795548', timeMS: 330000},
      {color: '#9E9E9E', timeMS: 335000},
      {color: '#607D8B', timeMS: 340000},
      {color: '#d32f2f', timeMS: 345000},
      {color: '#009688', timeMS: 350000},
      {color: '#4CAF50', timeMS: 355000},
      {color: '#8BC34A', timeMS: 360000},
      {color: '#CDDC39', timeMS: 365000},
      {color: '#FFEB3B', timeMS: 370000},
      {color: '#FFC107', timeMS: 375000},
      {color: '#FF9800', timeMS: 380000},
      {color: '#FF5722', timeMS: 385000},
      {color: '#795548', timeMS: 390000},
      {color: '#9E9E9E', timeMS: 395000},
      {color: '#607D8B', timeMS: 400000},
      {color: '#d32f2f', timeMS: 405000},
      {color: '#009688', timeMS: 410000},
      {color: '#4CAF50', timeMS: 415000},
      {color: '#8BC34A', timeMS: 420000},
      {color: '#CDDC39', timeMS: 425000},
      {color: '#FFEB3B', timeMS: 430000},
      {color: '#FFC107', timeMS: 435000},
      {color: '#FF9800', timeMS: 440000},
      {color: '#FF5722', timeMS: 445000},
      {color: '#795548', timeMS: 450000},
      {color: '#9E9E9E', timeMS: 455000},
      {color: '#607D8B', timeMS: 460000},
      {color: '#d32f2f', timeMS: 500000},
      {color: '#FF9800', timeMS: 540000},
      {color: '#FF5722', timeMS: 545000},
      {color: '#795548', timeMS: 550000},
      {color: '#9E9E9E', timeMS: 555000},
      {color: '#607D8B', timeMS: 560000},
      {color: '#d32f2f', timeMS: 500000},
      {color: '#FF9800', timeMS: 540000},
      {color: '#FF5722', timeMS: 545000},
      {color: '#795548', timeMS: 550000},
      {color: '#9E9E9E', timeMS: 555000},
      {color: '#607D8B', timeMS: 560000},
      {color: '#d32f2f', timeMS: 590000}

    ]

    //millisecond that show will start
    $scope.lightsChangeArrayInitTime =   1480522270271    ;

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
            //console.log(this.timeMSforeachSubtract);
            if(this.timeMSforeachSubtract > 0) {
              $scope.timecountdownfunction($scope.lightsChangeArrayInitTime);
            }else{
              document.getElementById("LightsAppColorDiv").innerHTML = "";
            }
          }

          if(this.timeMSforeachSubtract > 0) {
              //console.log("things");
              $timeout(function () {
                //alert("Test complete");
                //console.log( lightsChangeArray.color );
                //console.log($scope.actualtime);
                //console.log(this.timeMSforeach);
                document.getElementById("LightsAppColorDiv").style.backgroundColor = lightsChangeArray.color;
                document.getElementById("LightsAppColorDiv").innerHTML = "";
              }, this.timeMSforeachSubtract );
          }

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
      $scope.gotoTime($scope.lastbigdaddy - 1);
    }
    if($scope.onKeyDownResult == "40") {
      //alert("down");
      $scope.gotoTime($scope.lastbigdaddy + 1);
    }
    if($scope.onKeyDownResult == "13") {
      //alert("add");
      $scope.addTimeMillsec();
    }
    if($scope.onKeyDownResult == "32") {
      //alert("play");
      $scope.runtest();
    }
    if($scope.onKeyDownResult == "49") {
      $scope.setColor("");
    }
    if($scope.onKeyDownResult == "50") {
      $scope.setColor("#FAFAFA");
    }
    if($scope.onKeyDownResult == "51") {
      $scope.setColor("#d32f2f");
    }
    if($scope.onKeyDownResult == "52") {
      $scope.setColor("#C2185B");
    }
    if($scope.onKeyDownResult == "53") {
      $scope.setColor("#7B1FA2");
    }
    if($scope.onKeyDownResult == "54") {
      $scope.setColor("#512DA8");
    }
    if($scope.onKeyDownResult == "55") {
      $scope.setColor("#303F9F");
    }
    if($scope.onKeyDownResult == "56") {
      $scope.setColor("#1976D2");
    }
    if($scope.onKeyDownResult == "57") {
      $scope.setColor("#0288D1");
    }
    if($scope.onKeyDownResult == "58") {
      $scope.setColor("#0097A7");
    }


  };


  //end keyboard commands


  // i == index / c == color hex
  $scope.bigsquares = [

  ];

  //bigi == big-index / t == time
  $scope.timelinemilliseconds = [

  ];

  $scope.colors = [
    {"c": "", "hk": "1"},
    {"c": "#FAFAFA", "hk": "2"},
    {"c": "#d32f2f", "hk": "3"},
    {"c": "#C2185B", "hk": "4"},
    {"c": "#7B1FA2", "hk": "5"},
    {"c": "#512DA8", "hk": "6"},
    {"c": "#303F9F", "hk": "7"},
    {"c": "#1976D2", "hk": "8"},
    {"c": "#0288D1", "hk": "9"},
    {"c": "#0097A7", "hk": "0"},
    {"c": "#00796B", "hk": ""},
    {"c": "#388E3C", "hk": ""},
    {"c": "#689F38", "hk": ""},
    {"c": "#AFB42B", "hk": ""},
    {"c": "#FBC02D", "hk": ""},
    {"c": "#FFA000", "hk": ""},
    {"c": "#F57C00", "hk": ""},
    {"c": "#E64A19", "hk": ""},
    {"c": "#5D4037", "hk": ""},
    {"c": "#616161", "hk": ""},
    {"c": "#455A64", "hk": ""}
  ]

  $scope.selectedColorvar = "#FAFAFA";

  $scope.inselectrange = "stuff";
  $scope.outselectrange = "things";
  $scope.inHighlightrange = "highlight stuff";
  $scope.outHighlightrange = "highlight things";
  $scope.selectrangeYarray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
  $scope.selectrangeXarray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  $scope.pressEntervar = "press ENTER to add your first frame..."


  $scope.inselectrangeFunction = function(parentindex, squarei){
    //console.log(parentindex + " " + squarei);
    $scope.inselectrange = parentindex+squarei;
    $scope.inselectrange2 = parentindex + squarei;
    //$scope.inselectrangeX = $scope.inselectrange.slice(2,3);
    //$scope.inselectrangeY = $scope.inselectrange2.slice(1,2);
    if($scope.inselectrange.length == 3){
      $scope.inselectrangeX = $scope.inselectrange.slice(2,3);
      $scope.inselectrangeY = $scope.inselectrange2.slice(1,2);
    }else if($scope.inselectrange.length == 4){
      //alert($scope.inselectrange.slice(3,4));
      //alert($scope.inselectrange.slice(2,3));
      $scope.inselectrangeX = $scope.inselectrange.slice(3,4);
      $scope.inselectrangeY = $scope.inselectrange2.slice(2,3);
    }else if($scope.inselectrange.length == 5){
      $scope.inselectrangeX = $scope.inselectrange.slice(4,5);
      $scope.inselectrangeY = $scope.inselectrange2.slice(3,4);
    }else{
      alert("your range is too big");
    }


    $scope.inselectrangebigi = parentindex;
    $scope.inselectrangeXindex = $scope.selectrangeXarray.indexOf(Number($scope.inselectrangeX));
    //console.log($scope.inselectrangeXindex);
    $scope.inselectrangeYindex = $scope.selectrangeYarray.indexOf($scope.inselectrangeY);
    //console.log($scope.inselectrangeYindex);
    //console.log("--------------");
  }

  $scope.OUTselectrangeFunction = function(parentindex, squarei){
    //console.log("outselect" + parentindex + " " + squarei);
    $scope.outselectrange = parentindex + squarei;
    $scope.outselectrange2 = parentindex + squarei;
    //alert($scope.outselectrange);
    //alert($scope.outselectrange.length);

    if($scope.outselectrange.length == 3){
      $scope.outselectrangeX = $scope.outselectrange.slice(2,3);
      $scope.outselectrangeY = $scope.outselectrange2.slice(1,2);
    }else if($scope.outselectrange.length == 4){
      //alert($scope.outselectrange.slice(3,4));
      //alert($scope.outselectrange.slice(2,3));
      $scope.outselectrangeX = $scope.outselectrange.slice(3,4);
      $scope.outselectrangeY = $scope.outselectrange2.slice(2,3);
    }else if($scope.outselectrange.length == 5){
      $scope.outselectrangeX = $scope.outselectrange.slice(4,5);
      $scope.outselectrangeY = $scope.outselectrange2.slice(3,4);
    }else{
      alert("your range is too big");
    }

    $scope.outselectrangebigi = parentindex;
    $scope.outselectrangeXindex = $scope.selectrangeXarray.indexOf(Number($scope.outselectrangeX)) + 1;
    //console.log($scope.outselectrangeXindex);
    $scope.outselectrangeYindex = $scope.selectrangeYarray.indexOf($scope.outselectrangeY) + 1;
    //console.log($scope.outselectrangeYindex);
    //console.log("--------end--------")

    if($scope.outselectrangeXindex < $scope.inselectrangeXindex) {
      //alert("x");
      $scope.xadjuster = $scope.outselectrangeXindex;
      $scope.outselectrangeXindex = $scope.inselectrangeXindex + 1;
      $scope.inselectrangeXindex = $scope.xadjuster - 1;
    }

    if($scope.outselectrangeYindex < $scope.inselectrangeYindex) {
      //alert("y");
      $scope.Yadjuster = $scope.outselectrangeYindex;
      $scope.outselectrangeYindex = $scope.inselectrangeYindex + 1;
      $scope.inselectrangeYindex = $scope.Yadjuster - 1;
    }

    $scope.actualXrange = $scope.selectrangeXarray.slice($scope.inselectrangeXindex, $scope.outselectrangeXindex);
    $scope.actualYrange = $scope.selectrangeYarray.slice($scope.inselectrangeYindex, $scope.outselectrangeYindex);
    //alert($scope.actualXrange);
    //alert($scope.actualYrange);

    if($scope.outselectrangebigi == $scope.inselectrangebigi){
      //xrange
      for (i = 0; i < $scope.actualXrange.length; i++) {
          //console.log( $scope.actualXrange[i]);
          this.xvalue = $scope.actualXrange[i];
          //console.log(this.xvalue);
          //y range
          for (y = 0; y < $scope.actualYrange.length; y++) {
              //console.log( $scope.actualXrange[i]);
              //console.log($scope.outselectrangebigi + $scope.actualYrange[y] + this.xvalue);
              $scope.setSquare($scope.outselectrangebigi, $scope.actualYrange[y] + this.xvalue);
          }
      }
    }else{
      alert("inbred");
    }
  }



$scope.highlightSelector = function(squarei) {
  $scope.highlightSelectorvar = "highlightdivlilsquare" + squarei;
  document.getElementById($scope.highlightSelectorvar).style.opacity = 1;
}

$scope.highlightDeSelector = function(squarei) {
  $scope.highlightSelectorvar = "highlightdivlilsquare" + squarei;
  document.getElementById($scope.highlightSelectorvar).style.opacity = 0;
}




  $scope.setSquare = function(parentindex, idNumber) {
    //alert(String(parentindex)+String(idNumber));
    document.getElementById(String(parentindex)+String(idNumber)).style.backgroundColor = $scope.selectedColorvar;
  }

  $scope.setColor = function(color) {
    //alert(color);
    document.getElementById("colorpickercurrentcolorID").style.backgroundColor = color;
    document.getElementById("colorpickercurrentcolorID").innerHTML = color;
    $scope.selectedColorvar = color;

  }

  $scope.lastbigdaddy = "0";
  $scope.oldhazy = -1;
  $scope.initfunction = function() {
    //initally sets current slide 0 to green when page loads
    $timeout(function () {
      document.getElementById("timelinemillsec0").style.backgroundColor = "#66BB6A";
    }, 100);

  }



  $scope.gotoTime = function(bigi) {
    //alert("bigdaddy"+bigi);
    //console.log("bigi " + bigi);

    $scope.newhazy = Number(bigi) - 1;
    //alert($scope.oldhazy);
    //alert($scope.newhazy);




  //  alert($scope.lastbigdaddyminusone);
  //  alert(Number(bigi - 1));


    document.getElementById("bigdaddy"+$scope.lastbigdaddy).style.zIndex = "0";
    document.getElementById("bigdaddy"+bigi).style.zIndex = "10";

    if($scope.oldhazy != bigi){
      document.getElementById("bigdaddy"+$scope.oldhazy).style.zIndex = "0";
    }
    document.getElementById("bigdaddy"+$scope.newhazy).style.zIndex = "5";

    document.getElementById("timelinemillsec"+$scope.lastbigdaddy).style.backgroundColor = "#BDBDBD";
    document.getElementById("timelinemillsec"+bigi).style.backgroundColor = "#66BB6A";


    $scope.lastbigdaddy = bigi;
    $scope.oldhazy = $scope.newhazy;
    //alert($scope.oldhazy);

    //alert($scope.lastbigdaddy + ", " + $scope.lastbigdaddyminusone);
  }

  $scope.runtestZindexfunction = function(bigi, durration) {
    console.log(durration);
    document.getElementById("bigdaddy"+$scope.lastbigdaddy).style.zIndex = "0";
    document.getElementById("bigdaddy"+bigi).style.zIndex = "10";
    document.getElementById("timelinemillsec"+$scope.lastbigdaddy).style.backgroundColor = "#BDBDBD";
    document.getElementById("timelinemillsec"+bigi).style.backgroundColor = "#66BB6A";
    $scope.lastbigdaddy = bigi;
  }

  //code for running Test display
  $scope.runtest = function() {

    document.getElementById("bigdaddy"+$scope.oldhazy).style.zIndex = "0";
    $scope.runTestTimevar = 0;
    document.getElementById("bigdaddy"+$scope.lastbigdaddy).style.zIndex = "0";
    angular.forEach($scope.timelinemilliseconds, function (value, key) {
            //console.log($scope.runTestTimevar);
            //this is the key (literally "this") it makes it so the value is bound to the for reach itteration
            this.runTestTimethisinsidevar = $scope.runTestTimevar;

            $timeout(function () {
              $scope.runtestZindexfunction(value.bigi, value.t);
            }, this.runTestTimethisinsidevar);
            $scope.runTestTimevar = $scope.runTestTimevar + value.t;

        });




  }


  $scope.newMillisecond = 100;

  $scope.addTimeMillsec = function() {

    $scope.pressEntervar = "";

    document.getElementById("addmilsecbutton").disabled = true;
    $timeout(function () {
      document.getElementById("addmilsecbutton").disabled = false;
    }, 200);

    if($scope.newMillisecond == undefined){
      alert("No Time input");
    }else{
      var arraylength = $scope.timelinemilliseconds.length;
      //alert(arraylength);
      if(arraylength != 0){
        var nextarrayvar =  1 + $scope.timelinemilliseconds[arraylength - 1]["bigi"];

        $timeout(function () {
          document.getElementById("timelinemillsec"+$scope.lastbigdaddy).style.backgroundColor = "#BDBDBD";
          document.getElementById("timelinemillsec"+nextarrayvar).style.backgroundColor = "#66BB6A";
          document.getElementById("bigdaddy"+$scope.lastbigdaddy).style.zIndex = "0";
          document.getElementById("bigdaddy"+nextarrayvar).style.zIndex = "10";

          $scope.newhazy = Number(nextarrayvar) - 1;
          if($scope.oldhazy != nextarrayvar){
            document.getElementById("bigdaddy"+$scope.oldhazy).style.zIndex = "0";
          }
          document.getElementById("bigdaddy"+$scope.newhazy).style.zIndex = "5";
          $scope.oldhazy = $scope.newhazy;

          $scope.lastbigdaddy = nextarrayvar;
        }, 50);

      }else{
        var nextarrayvar = 0;
      }
      //alert(nextarrayvar);
      $scope.timelinemilliseconds.push({"bigi": nextarrayvar, "t": $scope.newMillisecond});

      $scope.bigsquares.push(
        [
          { "i":"A0", "c": ""},
          { "i":"A1", "c": ""},
          { "i":"A2", "c": ""},
          { "i":"A3", "c": ""},
          { "i":"A4", "c": ""},
          { "i":"A5", "c": ""},
          { "i":"A6", "c": ""},
          { "i":"A7", "c": ""},
          { "i":"A8", "c": ""},
          { "i":"A9", "c": ""},
          { "i":"B0", "c": ""},
          { "i":"B1", "c": ""},
          { "i":"B2", "c": ""},
          { "i":"B3", "c": ""},
          { "i":"B4", "c": ""},
          { "i":"B5", "c": ""},
          { "i":"B6", "c": ""},
          { "i":"B7", "c": ""},
          { "i":"B8", "c": ""},
          { "i":"B9", "c": ""},
          { "i":"C0", "c": ""},
          { "i":"C1", "c": ""},
          { "i":"C2", "c": ""},
          { "i":"C3", "c": ""},
          { "i":"C4", "c": ""},
          { "i":"C5", "c": ""},
          { "i":"C6", "c": ""},
          { "i":"C7", "c": ""},
          { "i":"C8", "c": ""},
          { "i":"C9", "c": ""},
          { "i":"D0", "c": ""},
          { "i":"D1", "c": ""},
          { "i":"D2", "c": ""},
          { "i":"D3", "c": ""},
          { "i":"D4", "c": ""},
          { "i":"D5", "c": ""},
          { "i":"D6", "c": ""},
          { "i":"D7", "c": ""},
          { "i":"D8", "c": ""},
          { "i":"D9", "c": ""},
          { "i":"E0", "c": ""},
          { "i":"E1", "c": ""},
          { "i":"E2", "c": ""},
          { "i":"E3", "c": ""},
          { "i":"E4", "c": ""},
          { "i":"E5", "c": ""},
          { "i":"E6", "c": ""},
          { "i":"E7", "c": ""},
          { "i":"E8", "c": ""},
          { "i":"E9", "c": ""},
          { "i":"F0", "c": ""},
          { "i":"F1", "c": ""},
          { "i":"F2", "c": ""},
          { "i":"F3", "c": ""},
          { "i":"F4", "c": ""},
          { "i":"F5", "c": ""},
          { "i":"F6", "c": ""},
          { "i":"F7", "c": ""},
          { "i":"F8", "c": ""},
          { "i":"F9", "c": ""},
          { "i":"G0", "c": ""},
          { "i":"G1", "c": ""},
          { "i":"G2", "c": ""},
          { "i":"G3", "c": ""},
          { "i":"G4", "c": ""},
          { "i":"G5", "c": ""},
          { "i":"G6", "c": ""},
          { "i":"G7", "c": ""},
          { "i":"G8", "c": ""},
          { "i":"G9", "c": ""},
          { "i":"H0", "c": ""},
          { "i":"H1", "c": ""},
          { "i":"H2", "c": ""},
          { "i":"H3", "c": ""},
          { "i":"H4", "c": ""},
          { "i":"H5", "c": ""},
          { "i":"H6", "c": ""},
          { "i":"H7", "c": ""},
          { "i":"H8", "c": ""},
          { "i":"H9", "c": ""},
          { "i":"I0", "c": ""},
          { "i":"I1", "c": ""},
          { "i":"I2", "c": ""},
          { "i":"I3", "c": ""},
          { "i":"I4", "c": ""},
          { "i":"I5", "c": ""},
          { "i":"I6", "c": ""},
          { "i":"I7", "c": ""},
          { "i":"I8", "c": ""},
          { "i":"I9", "c": ""},
          { "i":"J0", "c": ""},
          { "i":"J1", "c": ""},
          { "i":"J2", "c": ""},
          { "i":"J3", "c": ""},
          { "i":"J4", "c": ""},
          { "i":"J5", "c": ""},
          { "i":"J6", "c": ""},
          { "i":"J7", "c": ""},
          { "i":"J8", "c": ""},
          { "i":"J9", "c": ""},
        ]
      )
    }


  }

});
