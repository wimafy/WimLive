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

      //sets the interval of the time to re-sync
      setInterval( function(){$scope.timeresync()}, 5000);
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
      {color: '#f44336', timeMS: 100},
      {color: '#E91E63', timeMS: 200},
      {color: '#9C27B0', timeMS: 300},
      {color: '#673AB7', timeMS: 400},
      {color: '#3F51B5', timeMS: 500},
      {color: '#2196F3', timeMS: 600},
      {color: '#03A9F4', timeMS: 700},
      {color: '#00BCD4', timeMS: 800},
      {color: '#009688', timeMS: 900},
      {color: '#4CAF50', timeMS: 1000},
      {color: '#8BC34A', timeMS: 1100},
      {color: '#CDDC39', timeMS: 1200},
      {color: '#FFEB3B', timeMS: 1300},
      {color: '#FFC107', timeMS: 1400},
      {color: '#FF9800', timeMS: 1500},
      {color: '#FF5722', timeMS: 1600},
      {color: '#795548', timeMS: 1700},
      {color: '#9E9E9E', timeMS: 1800},
      {color: '#607D8B', timeMS: 1900},
      {color: '#d32f2f', timeMS: 2000},
      {color: '#f44336', timeMS: 3100},
      {color: '#E91E63', timeMS: 3200},
      {color: '#9C27B0', timeMS: 3300},
      {color: '#673AB7', timeMS: 3400},
      {color: '#3F51B5', timeMS: 3500},
      {color: '#2196F3', timeMS: 3600},
      {color: '#03A9F4', timeMS: 3700},
      {color: '#00BCD4', timeMS: 3800},
      {color: '#009688', timeMS: 3900},
      {color: '#4CAF50', timeMS: 3000},
      {color: '#8BC34A', timeMS: 3100},
      {color: '#CDDC39', timeMS: 3200},
      {color: '#FFEB3B', timeMS: 3300},
      {color: '#FFC107', timeMS: 3400},
      {color: '#FF9800', timeMS: 3500},
      {color: '#FF5722', timeMS: 3600},
      {color: '#795548', timeMS: 3700},
      {color: '#9E9E9E', timeMS: 3800},
      {color: '#607D8B', timeMS: 3900},
      {color: '#d32f2f', timeMS: 3000},
      {color: '#4CAF50', timeMS: 1000},
      {color: '#8BC34A', timeMS: 1100},
      {color: '#CDDC39', timeMS: 1200},
      {color: '#FFEB3B', timeMS: 1300},
      {color: '#FFC107', timeMS: 1400},
      {color: '#FF9800', timeMS: 1500},
      {color: '#FF5722', timeMS: 1600},
      {color: '#795548', timeMS: 1700},
      {color: '#9E9E9E', timeMS: 1800},
      {color: '#607D8B', timeMS: 1900},
      {color: '#d32f2f', timeMS: 2000},
      {color: '#f44336', timeMS: 3100},
      {color: '#E91E63', timeMS: 3200},
      {color: '#9C27B0', timeMS: 3300},
      {color: '#673AB7', timeMS: 3400},
      {color: '#3F51B5', timeMS: 3500},
      {color: '#2196F3', timeMS: 3600},
      {color: '#03A9F4', timeMS: 3700},
      {color: '#00BCD4', timeMS: 3800},
      {color: '#009688', timeMS: 3900},
      {color: '#4CAF50', timeMS: 3000},
      {color: '#8BC34A', timeMS: 3100},
      {color: '#CDDC39', timeMS: 3200},
      {color: '#FFEB3B', timeMS: 3300},
      {color: '#FFC107', timeMS: 3400},
      {color: '#FF9800', timeMS: 3500},
      {color: '#FF5722', timeMS: 3600},
      {color: '#795548', timeMS: 3700},
      {color: '#9E9E9E', timeMS: 3800},
      {color: '#607D8B', timeMS: 3900},
      {color: '#d32f2f', timeMS: 3000},

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
    if($scope.onKeyDownResult == "87") {
      //alert("up");
      $scope.gotoTime($scope.lastbigdaddy - 1);
    }
    if($scope.onKeyDownResult == "83") {
      //alert("down");
      $scope.gotoTime($scope.lastbigdaddy + 1);
    }
    if($scope.onKeyDownResult == "13") {
      //alert("add");
      $scope.addTimeMillsec();
    }
    if($scope.onKeyDownResult == "16") {
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
    if($scope.onKeyDownResult == "65") {
      $scope.addPreset();
    }
    if($scope.onKeyDownResult == "68") {
      $scope.cancelPreset();
    }
    if($scope.onKeyDownResult == "79") {
      $scope.stadiumPic = false;
    }
    if($scope.onKeyDownResult == "80") {
      $scope.stadiumPic = true;
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
    {"c": "#EEEEEE", "hk": "2"},
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
  $scope.selectrangeYarray = ["AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AQ", "AR", "AS", "AT", "AU", "AV", "AW", "AX", "AY", "AZ", "BA", "BB", "BC", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BK", "BL", "BM", "BN"]
  $scope.selectrangeXarray = [
      "00", "01", "02", "03", "4", "05", "06", "07", "08", "09",
      "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
      "20", "21", "22", "23", "24", "25", "26", "27", "28", "29",
      "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40"
    ]
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



$scope.highlightSelector = function(parent, squarei) {
  $scope.highlightSelectorvar = "highlightdivlilsquare" + squarei;
  $scope.presetSelectorSquare = parent + squarei;
  document.getElementById($scope.highlightSelectorvar).style.opacity = 1;

}

$scope.highlightDeSelector = function(parent, squarei) {
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

    document.getElementById("runtestbutton").disabled = true;
    $timeout(function () {
      document.getElementById("runtestbutton").disabled = false;
    }, 200);

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
          { "i":"AA00", "c": ""},
          { "i":"AA01", "c": ""},
          { "i":"AA02", "c": ""},
          { "i":"AA03", "c": ""},
          { "i":"AA04", "c": ""},
          { "i":"AA05", "c": ""},
          { "i":"AA06", "c": ""},
          { "i":"AA07", "c": ""},
          { "i":"AA08", "c": ""},
          { "i":"AA09", "c": ""},
          { "i":"AA10", "c": ""},
          { "i":"AA11", "c": ""},
          { "i":"AA12", "c": ""},
          { "i":"AA13", "c": ""},
          { "i":"AA14", "c": ""},
          { "i":"AA15", "c": ""},
          { "i":"AA16", "c": ""},
          { "i":"AA17", "c": ""},
          { "i":"AA18", "c": ""},
          { "i":"AA19", "c": ""},
          { "i":"AA20", "c": ""},
          { "i":"AA22", "c": ""},
          { "i":"AA23", "c": ""},
          { "i":"AA24", "c": ""},
          { "i":"AA25", "c": ""},
          { "i":"AA26", "c": ""},
          { "i":"AA27", "c": ""},
          { "i":"AA38", "c": ""},
          { "i":"AA29", "c": ""},
          { "i":"AA30", "c": ""},
          { "i":"AA31", "c": ""},
          { "i":"AA32", "c": ""},
          { "i":"AA33", "c": ""},
          { "i":"AA34", "c": ""},
          { "i":"AA35", "c": ""},
          { "i":"AA36", "c": ""},
          { "i":"AA37", "c": ""},
          { "i":"AA38", "c": ""},
          { "i":"AA39", "c": ""},
          { "i":"AA40", "c": ""},
          { "i":"AB00", "c": ""},
          { "i":"AB01", "c": ""},
          { "i":"AB02", "c": ""},
          { "i":"AB03", "c": ""},
          { "i":"AB04", "c": ""},
          { "i":"AB05", "c": ""},
          { "i":"AB06", "c": ""},
          { "i":"AB07", "c": ""},
          { "i":"AB08", "c": ""},
          { "i":"AB09", "c": ""},
          { "i":"AB10", "c": ""},
          { "i":"AB11", "c": ""},
          { "i":"AB12", "c": ""},
          { "i":"AB13", "c": ""},
          { "i":"AB14", "c": ""},
          { "i":"AB15", "c": ""},
          { "i":"AB16", "c": ""},
          { "i":"AB17", "c": ""},
          { "i":"AB18", "c": ""},
          { "i":"AB19", "c": ""},
          { "i":"AB20", "c": ""},
          { "i":"AB22", "c": ""},
          { "i":"AB23", "c": ""},
          { "i":"AB24", "c": ""},
          { "i":"AB25", "c": ""},
          { "i":"AB26", "c": ""},
          { "i":"AB27", "c": ""},
          { "i":"AB38", "c": ""},
          { "i":"AB29", "c": ""},
          { "i":"AB30", "c": ""},
          { "i":"AB31", "c": ""},
          { "i":"AB32", "c": ""},
          { "i":"AB33", "c": ""},
          { "i":"AB34", "c": ""},
          { "i":"AB35", "c": ""},
          { "i":"AB36", "c": ""},
          { "i":"AB37", "c": ""},
          { "i":"AB38", "c": ""},
          { "i":"AB39", "c": ""},
          { "i":"AB40", "c": ""},
          { "i":"AC00", "c": ""},
          { "i":"AC01", "c": ""},
          { "i":"AC02", "c": ""},
          { "i":"AC03", "c": ""},
          { "i":"AC04", "c": ""},
          { "i":"AC05", "c": ""},
          { "i":"AC06", "c": ""},
          { "i":"AC07", "c": ""},
          { "i":"AC08", "c": ""},
          { "i":"AC09", "c": ""},
          { "i":"AC10", "c": ""},
          { "i":"AC11", "c": ""},
          { "i":"AC12", "c": ""},
          { "i":"AC13", "c": ""},
          { "i":"AC14", "c": ""},
          { "i":"AC15", "c": ""},
          { "i":"AC16", "c": ""},
          { "i":"AC17", "c": ""},
          { "i":"AC18", "c": ""},
          { "i":"AC19", "c": ""},
          { "i":"AC20", "c": ""},
          { "i":"AC22", "c": ""},
          { "i":"AC23", "c": ""},
          { "i":"AC24", "c": ""},
          { "i":"AC25", "c": ""},
          { "i":"AC26", "c": ""},
          { "i":"AC27", "c": ""},
          { "i":"AC38", "c": ""},
          { "i":"AC29", "c": ""},
          { "i":"AC30", "c": ""},
          { "i":"AC31", "c": ""},
          { "i":"AC32", "c": ""},
          { "i":"AC33", "c": ""},
          { "i":"AC34", "c": ""},
          { "i":"AC35", "c": ""},
          { "i":"AC36", "c": ""},
          { "i":"AC37", "c": ""},
          { "i":"AC38", "c": ""},
          { "i":"AC39", "c": ""},
          { "i":"AC40", "c": ""},
          { "i":"AD00", "c": ""},
          { "i":"AD01", "c": ""},
          { "i":"AD02", "c": ""},
          { "i":"AD03", "c": ""},
          { "i":"AD04", "c": ""},
          { "i":"AD05", "c": ""},
          { "i":"AD06", "c": ""},
          { "i":"AD07", "c": ""},
          { "i":"AD08", "c": ""},
          { "i":"AD09", "c": ""},
          { "i":"AD10", "c": ""},
          { "i":"AD11", "c": ""},
          { "i":"AD12", "c": ""},
          { "i":"AD13", "c": ""},
          { "i":"AD14", "c": ""},
          { "i":"AD15", "c": ""},
          { "i":"AD16", "c": ""},
          { "i":"AD17", "c": ""},
          { "i":"AD18", "c": ""},
          { "i":"AD19", "c": ""},
          { "i":"AD20", "c": ""},
          { "i":"AD22", "c": ""},
          { "i":"AD23", "c": ""},
          { "i":"AD24", "c": ""},
          { "i":"AD25", "c": ""},
          { "i":"AD26", "c": ""},
          { "i":"AD27", "c": ""},
          { "i":"AD38", "c": ""},
          { "i":"AD29", "c": ""},
          { "i":"AD30", "c": ""},
          { "i":"AD31", "c": ""},
          { "i":"AD32", "c": ""},
          { "i":"AD33", "c": ""},
          { "i":"AD34", "c": ""},
          { "i":"AD35", "c": ""},
          { "i":"AD36", "c": ""},
          { "i":"AD37", "c": ""},
          { "i":"AD38", "c": ""},
          { "i":"AD39", "c": ""},
          { "i":"AD40", "c": ""},
          { "i":"AE00", "c": ""},
          { "i":"AE01", "c": ""},
          { "i":"AE02", "c": ""},
          { "i":"AE03", "c": ""},
          { "i":"AE04", "c": ""},
          { "i":"AE05", "c": ""},
          { "i":"AE06", "c": ""},
          { "i":"AE07", "c": ""},
          { "i":"AE08", "c": ""},
          { "i":"AE09", "c": ""},
          { "i":"AE10", "c": ""},
          { "i":"AE11", "c": ""},
          { "i":"AE12", "c": ""},
          { "i":"AE13", "c": ""},
          { "i":"AE14", "c": ""},
          { "i":"AE15", "c": ""},
          { "i":"AE16", "c": ""},
          { "i":"AE17", "c": ""},
          { "i":"AE18", "c": ""},
          { "i":"AE19", "c": ""},
          { "i":"AE20", "c": ""},
          { "i":"AE22", "c": ""},
          { "i":"AE23", "c": ""},
          { "i":"AE24", "c": ""},
          { "i":"AE25", "c": ""},
          { "i":"AE26", "c": ""},
          { "i":"AE27", "c": ""},
          { "i":"AE38", "c": ""},
          { "i":"AE29", "c": ""},
          { "i":"AE30", "c": ""},
          { "i":"AE31", "c": ""},
          { "i":"AE32", "c": ""},
          { "i":"AE33", "c": ""},
          { "i":"AE34", "c": ""},
          { "i":"AE35", "c": ""},
          { "i":"AE36", "c": ""},
          { "i":"AE37", "c": ""},
          { "i":"AE38", "c": ""},
          { "i":"AE39", "c": ""},
          { "i":"AE40", "c": ""},
          { "i":"AF00", "c": ""},
          { "i":"AF01", "c": ""},
          { "i":"AF02", "c": ""},
          { "i":"AF03", "c": ""},
          { "i":"AF04", "c": ""},
          { "i":"AF05", "c": ""},
          { "i":"AF06", "c": ""},
          { "i":"AF07", "c": ""},
          { "i":"AF08", "c": ""},
          { "i":"AF09", "c": ""},
          { "i":"AF10", "c": ""},
          { "i":"AF11", "c": ""},
          { "i":"AF12", "c": ""},
          { "i":"AF13", "c": ""},
          { "i":"AF14", "c": ""},
          { "i":"AF15", "c": ""},
          { "i":"AF16", "c": ""},
          { "i":"AF17", "c": ""},
          { "i":"AF18", "c": ""},
          { "i":"AF19", "c": ""},
          { "i":"AF20", "c": ""},
          { "i":"AF22", "c": ""},
          { "i":"AF23", "c": ""},
          { "i":"AF24", "c": ""},
          { "i":"AF25", "c": ""},
          { "i":"AF26", "c": ""},
          { "i":"AF27", "c": ""},
          { "i":"AF38", "c": ""},
          { "i":"AF29", "c": ""},
          { "i":"AF30", "c": ""},
          { "i":"AF31", "c": ""},
          { "i":"AF32", "c": ""},
          { "i":"AF33", "c": ""},
          { "i":"AF34", "c": ""},
          { "i":"AF35", "c": ""},
          { "i":"AF36", "c": ""},
          { "i":"AF37", "c": ""},
          { "i":"AF38", "c": ""},
          { "i":"AF39", "c": ""},
          { "i":"AF40", "c": ""},
          { "i":"AG00", "c": ""},
          { "i":"AG01", "c": ""},
          { "i":"AG02", "c": ""},
          { "i":"AG03", "c": ""},
          { "i":"AG04", "c": ""},
          { "i":"AG05", "c": ""},
          { "i":"AG06", "c": ""},
          { "i":"AG07", "c": ""},
          { "i":"AG08", "c": ""},
          { "i":"AG09", "c": ""},
          { "i":"AG10", "c": ""},
          { "i":"AG11", "c": ""},
          { "i":"AG12", "c": ""},
          { "i":"AG13", "c": ""},
          { "i":"AG14", "c": ""},
          { "i":"AG15", "c": ""},
          { "i":"AG16", "c": ""},
          { "i":"AG17", "c": ""},
          { "i":"AG18", "c": ""},
          { "i":"AG19", "c": ""},
          { "i":"AG20", "c": ""},
          { "i":"AG22", "c": ""},
          { "i":"AG23", "c": ""},
          { "i":"AG24", "c": ""},
          { "i":"AG25", "c": ""},
          { "i":"AG26", "c": ""},
          { "i":"AG27", "c": ""},
          { "i":"AG38", "c": ""},
          { "i":"AG29", "c": ""},
          { "i":"AG30", "c": ""},
          { "i":"AG31", "c": ""},
          { "i":"AG32", "c": ""},
          { "i":"AG33", "c": ""},
          { "i":"AG34", "c": ""},
          { "i":"AG35", "c": ""},
          { "i":"AG36", "c": ""},
          { "i":"AG37", "c": ""},
          { "i":"AG38", "c": ""},
          { "i":"AG39", "c": ""},
          { "i":"AG40", "c": ""},
          { "i":"AH00", "c": ""},
          { "i":"AH01", "c": ""},
          { "i":"AH02", "c": ""},
          { "i":"AH03", "c": ""},
          { "i":"AH04", "c": ""},
          { "i":"AH05", "c": ""},
          { "i":"AH06", "c": ""},
          { "i":"AH07", "c": ""},
          { "i":"AH08", "c": ""},
          { "i":"AH09", "c": ""},
          { "i":"AH10", "c": ""},
          { "i":"AH11", "c": ""},
          { "i":"AH12", "c": ""},
          { "i":"AH13", "c": ""},
          { "i":"AH14", "c": ""},
          { "i":"AH15", "c": ""},
          { "i":"AH16", "c": ""},
          { "i":"AH17", "c": ""},
          { "i":"AH18", "c": ""},
          { "i":"AH19", "c": ""},
          { "i":"AH20", "c": ""},
          { "i":"AH22", "c": ""},
          { "i":"AH23", "c": ""},
          { "i":"AH24", "c": ""},
          { "i":"AH25", "c": ""},
          { "i":"AH26", "c": ""},
          { "i":"AH27", "c": ""},
          { "i":"AH38", "c": ""},
          { "i":"AH29", "c": ""},
          { "i":"AH30", "c": ""},
          { "i":"AH31", "c": ""},
          { "i":"AH32", "c": ""},
          { "i":"AH33", "c": ""},
          { "i":"AH34", "c": ""},
          { "i":"AH35", "c": ""},
          { "i":"AH36", "c": ""},
          { "i":"AH37", "c": ""},
          { "i":"AH38", "c": ""},
          { "i":"AH39", "c": ""},
          { "i":"AH40", "c": ""},
          { "i":"AI00", "c": ""},
          { "i":"AI01", "c": ""},
          { "i":"AI02", "c": ""},
          { "i":"AI03", "c": ""},
          { "i":"AI04", "c": ""},
          { "i":"AI05", "c": ""},
          { "i":"AI06", "c": ""},
          { "i":"AI07", "c": ""},
          { "i":"AI08", "c": ""},
          { "i":"AI09", "c": ""},
          { "i":"AI10", "c": ""},
          { "i":"AI11", "c": ""},
          { "i":"AI12", "c": ""},
          { "i":"AI13", "c": ""},
          { "i":"AI14", "c": ""},
          { "i":"AI15", "c": ""},
          { "i":"AI16", "c": ""},
          { "i":"AI17", "c": ""},
          { "i":"AI18", "c": ""},
          { "i":"AI19", "c": ""},
          { "i":"AI20", "c": ""},
          { "i":"AI22", "c": ""},
          { "i":"AI23", "c": ""},
          { "i":"AI24", "c": ""},
          { "i":"AI25", "c": ""},
          { "i":"AI26", "c": ""},
          { "i":"AI27", "c": ""},
          { "i":"AI38", "c": ""},
          { "i":"AI29", "c": ""},
          { "i":"AI30", "c": ""},
          { "i":"AI31", "c": ""},
          { "i":"AI32", "c": ""},
          { "i":"AI33", "c": ""},
          { "i":"AI34", "c": ""},
          { "i":"AI35", "c": ""},
          { "i":"AI36", "c": ""},
          { "i":"AI37", "c": ""},
          { "i":"AI38", "c": ""},
          { "i":"AI39", "c": ""},
          { "i":"AI40", "c": ""},
          { "i":"AJ00", "c": ""},
          { "i":"AJ01", "c": ""},
          { "i":"AJ02", "c": ""},
          { "i":"AJ03", "c": ""},
          { "i":"AJ04", "c": ""},
          { "i":"AJ05", "c": ""},
          { "i":"AJ06", "c": ""},
          { "i":"AJ07", "c": ""},
          { "i":"AJ08", "c": ""},
          { "i":"AJ09", "c": ""},
          { "i":"AJ10", "c": ""},
          { "i":"AJ11", "c": ""},
          { "i":"AJ12", "c": ""},
          { "i":"AJ13", "c": ""},
          { "i":"AJ14", "c": ""},
          { "i":"AJ15", "c": ""},
          { "i":"AJ16", "c": ""},
          { "i":"AJ17", "c": ""},
          { "i":"AJ18", "c": ""},
          { "i":"AJ19", "c": ""},
          { "i":"AJ20", "c": ""},
          { "i":"AJ22", "c": ""},
          { "i":"AJ23", "c": ""},
          { "i":"AJ24", "c": ""},
          { "i":"AJ25", "c": ""},
          { "i":"AJ26", "c": ""},
          { "i":"AJ27", "c": ""},
          { "i":"AJ38", "c": ""},
          { "i":"AJ29", "c": ""},
          { "i":"AJ30", "c": ""},
          { "i":"AJ31", "c": ""},
          { "i":"AJ32", "c": ""},
          { "i":"AJ33", "c": ""},
          { "i":"AJ34", "c": ""},
          { "i":"AJ35", "c": ""},
          { "i":"AJ36", "c": ""},
          { "i":"AJ37", "c": ""},
          { "i":"AJ38", "c": ""},
          { "i":"AJ39", "c": ""},
          { "i":"AJ40", "c": ""},
          { "i":"AK00", "c": ""},
          { "i":"AK01", "c": ""},
          { "i":"AK02", "c": ""},
          { "i":"AK03", "c": ""},
          { "i":"AK04", "c": ""},
          { "i":"AK05", "c": ""},
          { "i":"AK06", "c": ""},
          { "i":"AK07", "c": ""},
          { "i":"AK08", "c": ""},
          { "i":"AK09", "c": ""},
          { "i":"AK10", "c": ""},
          { "i":"AK11", "c": ""},
          { "i":"AK12", "c": ""},
          { "i":"AK13", "c": ""},
          { "i":"AK14", "c": ""},
          { "i":"AK15", "c": ""},
          { "i":"AK16", "c": ""},
          { "i":"AK17", "c": ""},
          { "i":"AK18", "c": ""},
          { "i":"AK19", "c": ""},
          { "i":"AK20", "c": ""},
          { "i":"AK22", "c": ""},
          { "i":"AK23", "c": ""},
          { "i":"AK24", "c": ""},
          { "i":"AK25", "c": ""},
          { "i":"AK26", "c": ""},
          { "i":"AK27", "c": ""},
          { "i":"AK38", "c": ""},
          { "i":"AK29", "c": ""},
          { "i":"AK30", "c": ""},
          { "i":"AK31", "c": ""},
          { "i":"AK32", "c": ""},
          { "i":"AK33", "c": ""},
          { "i":"AK34", "c": ""},
          { "i":"AK35", "c": ""},
          { "i":"AK36", "c": ""},
          { "i":"AK37", "c": ""},
          { "i":"AK38", "c": ""},
          { "i":"AK39", "c": ""},
          { "i":"AK40", "c": ""},
          { "i":"AL00", "c": ""},
          { "i":"AL01", "c": ""},
          { "i":"AL02", "c": ""},
          { "i":"AL03", "c": ""},
          { "i":"AL04", "c": ""},
          { "i":"AL05", "c": ""},
          { "i":"AL06", "c": ""},
          { "i":"AL07", "c": ""},
          { "i":"AL08", "c": ""},
          { "i":"AL09", "c": ""},
          { "i":"AL10", "c": ""},
          { "i":"AL11", "c": ""},
          { "i":"AL12", "c": ""},
          { "i":"AL13", "c": ""},
          { "i":"AL14", "c": ""},
          { "i":"AL15", "c": ""},
          { "i":"AL16", "c": ""},
          { "i":"AL17", "c": ""},
          { "i":"AL18", "c": ""},
          { "i":"AL19", "c": ""},
          { "i":"AL20", "c": ""},
          { "i":"AL22", "c": ""},
          { "i":"AL23", "c": ""},
          { "i":"AL24", "c": ""},
          { "i":"AL25", "c": ""},
          { "i":"AL26", "c": ""},
          { "i":"AL27", "c": ""},
          { "i":"AL38", "c": ""},
          { "i":"AL29", "c": ""},
          { "i":"AL30", "c": ""},
          { "i":"AL31", "c": ""},
          { "i":"AL32", "c": ""},
          { "i":"AL33", "c": ""},
          { "i":"AL34", "c": ""},
          { "i":"AL35", "c": ""},
          { "i":"AL36", "c": ""},
          { "i":"AL37", "c": ""},
          { "i":"AL38", "c": ""},
          { "i":"AL39", "c": ""},
          { "i":"AL40", "c": ""},
          { "i":"AM00", "c": ""},
          { "i":"AM01", "c": ""},
          { "i":"AM02", "c": ""},
          { "i":"AM03", "c": ""},
          { "i":"AM04", "c": ""},
          { "i":"AM05", "c": ""},
          { "i":"AM06", "c": ""},
          { "i":"AM07", "c": ""},
          { "i":"AM08", "c": ""},
          { "i":"AM09", "c": ""},
          { "i":"AM10", "c": ""},
          { "i":"AM11", "c": ""},
          { "i":"AM12", "c": ""},
          { "i":"AM13", "c": ""},
          { "i":"AM14", "c": ""},
          { "i":"AM15", "c": ""},
          { "i":"AM16", "c": ""},
          { "i":"AM17", "c": ""},
          { "i":"AM18", "c": ""},
          { "i":"AM19", "c": ""},
          { "i":"AM20", "c": ""},
          { "i":"AM22", "c": ""},
          { "i":"AM23", "c": ""},
          { "i":"AM24", "c": ""},
          { "i":"AM25", "c": ""},
          { "i":"AM26", "c": ""},
          { "i":"AM27", "c": ""},
          { "i":"AM38", "c": ""},
          { "i":"AM29", "c": ""},
          { "i":"AM30", "c": ""},
          { "i":"AM31", "c": ""},
          { "i":"AM32", "c": ""},
          { "i":"AM33", "c": ""},
          { "i":"AM34", "c": ""},
          { "i":"AM35", "c": ""},
          { "i":"AM36", "c": ""},
          { "i":"AM37", "c": ""},
          { "i":"AM38", "c": ""},
          { "i":"AM39", "c": ""},
          { "i":"AM40", "c": ""},
          { "i":"AN00", "c": ""},
          { "i":"AN01", "c": ""},
          { "i":"AN02", "c": ""},
          { "i":"AN03", "c": ""},
          { "i":"AN04", "c": ""},
          { "i":"AN05", "c": ""},
          { "i":"AN06", "c": ""},
          { "i":"AN07", "c": ""},
          { "i":"AN08", "c": ""},
          { "i":"AN09", "c": ""},
          { "i":"AN10", "c": ""},
          { "i":"AN11", "c": ""},
          { "i":"AN12", "c": ""},
          { "i":"AN13", "c": ""},
          { "i":"AN14", "c": ""},
          { "i":"AN15", "c": ""},
          { "i":"AN16", "c": ""},
          { "i":"AN17", "c": ""},
          { "i":"AN18", "c": ""},
          { "i":"AN19", "c": ""},
          { "i":"AN20", "c": ""},
          { "i":"AN22", "c": ""},
          { "i":"AN23", "c": ""},
          { "i":"AN24", "c": ""},
          { "i":"AN25", "c": ""},
          { "i":"AN26", "c": ""},
          { "i":"AN27", "c": ""},
          { "i":"AN38", "c": ""},
          { "i":"AN29", "c": ""},
          { "i":"AN30", "c": ""},
          { "i":"AN31", "c": ""},
          { "i":"AN32", "c": ""},
          { "i":"AN33", "c": ""},
          { "i":"AN34", "c": ""},
          { "i":"AN35", "c": ""},
          { "i":"AN36", "c": ""},
          { "i":"AN37", "c": ""},
          { "i":"AN38", "c": ""},
          { "i":"AN39", "c": ""},
          { "i":"AN40", "c": ""},
          { "i":"AO00", "c": ""},
          { "i":"AO01", "c": ""},
          { "i":"AO02", "c": ""},
          { "i":"AO03", "c": ""},
          { "i":"AO04", "c": ""},
          { "i":"AO05", "c": ""},
          { "i":"AO06", "c": ""},
          { "i":"AO07", "c": ""},
          { "i":"AO08", "c": ""},
          { "i":"AO09", "c": ""},
          { "i":"AO10", "c": ""},
          { "i":"AO11", "c": ""},
          { "i":"AO12", "c": ""},
          { "i":"AO13", "c": ""},
          { "i":"AO14", "c": ""},
          { "i":"AO15", "c": ""},
          { "i":"AO16", "c": ""},
          { "i":"AO17", "c": ""},
          { "i":"AO18", "c": ""},
          { "i":"AO19", "c": ""},
          { "i":"AO20", "c": ""},
          { "i":"AO22", "c": ""},
          { "i":"AO23", "c": ""},
          { "i":"AO24", "c": ""},
          { "i":"AO25", "c": ""},
          { "i":"AO26", "c": ""},
          { "i":"AO27", "c": ""},
          { "i":"AO38", "c": ""},
          { "i":"AO29", "c": ""},
          { "i":"AO30", "c": ""},
          { "i":"AO31", "c": ""},
          { "i":"AO32", "c": ""},
          { "i":"AO33", "c": ""},
          { "i":"AO34", "c": ""},
          { "i":"AO35", "c": ""},
          { "i":"AO36", "c": ""},
          { "i":"AO37", "c": ""},
          { "i":"AO38", "c": ""},
          { "i":"AO39", "c": ""},
          { "i":"AO40", "c": ""},
          { "i":"AP00", "c": ""},
          { "i":"AP01", "c": ""},
          { "i":"AP02", "c": ""},
          { "i":"AP03", "c": ""},
          { "i":"AP04", "c": ""},
          { "i":"AP05", "c": ""},
          { "i":"AP06", "c": ""},
          { "i":"AP07", "c": ""},
          { "i":"AP08", "c": ""},
          { "i":"AP09", "c": ""},
          { "i":"AP10", "c": ""},
          { "i":"AP11", "c": ""},
          { "i":"AP12", "c": ""},
          { "i":"AP13", "c": ""},
          { "i":"AP14", "c": ""},
          { "i":"AP15", "c": ""},
          { "i":"AP16", "c": ""},
          { "i":"AP17", "c": ""},
          { "i":"AP18", "c": ""},
          { "i":"AP19", "c": ""},
          { "i":"AP20", "c": ""},
          { "i":"AP22", "c": ""},
          { "i":"AP23", "c": ""},
          { "i":"AP24", "c": ""},
          { "i":"AP25", "c": ""},
          { "i":"AP26", "c": ""},
          { "i":"AP27", "c": ""},
          { "i":"AP38", "c": ""},
          { "i":"AP29", "c": ""},
          { "i":"AP30", "c": ""},
          { "i":"AP31", "c": ""},
          { "i":"AP32", "c": ""},
          { "i":"AP33", "c": ""},
          { "i":"AP34", "c": ""},
          { "i":"AP35", "c": ""},
          { "i":"AP36", "c": ""},
          { "i":"AP37", "c": ""},
          { "i":"AP38", "c": ""},
          { "i":"AP39", "c": ""},
          { "i":"AP40", "c": ""},
          { "i":"AQ00", "c": ""},
          { "i":"AQ01", "c": ""},
          { "i":"AQ02", "c": ""},
          { "i":"AQ03", "c": ""},
          { "i":"AQ04", "c": ""},
          { "i":"AQ05", "c": ""},
          { "i":"AQ06", "c": ""},
          { "i":"AQ07", "c": ""},
          { "i":"AQ08", "c": ""},
          { "i":"AQ09", "c": ""},
          { "i":"AQ10", "c": ""},
          { "i":"AQ11", "c": ""},
          { "i":"AQ12", "c": ""},
          { "i":"AQ13", "c": ""},
          { "i":"AQ14", "c": ""},
          { "i":"AQ15", "c": ""},
          { "i":"AQ16", "c": ""},
          { "i":"AQ17", "c": ""},
          { "i":"AQ18", "c": ""},
          { "i":"AQ19", "c": ""},
          { "i":"AQ20", "c": ""},
          { "i":"AQ22", "c": ""},
          { "i":"AQ23", "c": ""},
          { "i":"AQ24", "c": ""},
          { "i":"AQ25", "c": ""},
          { "i":"AQ26", "c": ""},
          { "i":"AQ27", "c": ""},
          { "i":"AQ38", "c": ""},
          { "i":"AQ29", "c": ""},
          { "i":"AQ30", "c": ""},
          { "i":"AQ31", "c": ""},
          { "i":"AQ32", "c": ""},
          { "i":"AQ33", "c": ""},
          { "i":"AQ34", "c": ""},
          { "i":"AQ35", "c": ""},
          { "i":"AQ36", "c": ""},
          { "i":"AQ37", "c": ""},
          { "i":"AQ38", "c": ""},
          { "i":"AQ39", "c": ""},
          { "i":"AQ40", "c": ""},
          { "i":"AR00", "c": ""},
          { "i":"AR01", "c": ""},
          { "i":"AR02", "c": ""},
          { "i":"AR03", "c": ""},
          { "i":"AR04", "c": ""},
          { "i":"AR05", "c": ""},
          { "i":"AR06", "c": ""},
          { "i":"AR07", "c": ""},
          { "i":"AR08", "c": ""},
          { "i":"AR09", "c": ""},
          { "i":"AR10", "c": ""},
          { "i":"AR11", "c": ""},
          { "i":"AR12", "c": ""},
          { "i":"AR13", "c": ""},
          { "i":"AR14", "c": ""},
          { "i":"AR15", "c": ""},
          { "i":"AR16", "c": ""},
          { "i":"AR17", "c": ""},
          { "i":"AR18", "c": ""},
          { "i":"AR19", "c": ""},
          { "i":"AR20", "c": ""},
          { "i":"AR22", "c": ""},
          { "i":"AR23", "c": ""},
          { "i":"AR24", "c": ""},
          { "i":"AR25", "c": ""},
          { "i":"AR26", "c": ""},
          { "i":"AR27", "c": ""},
          { "i":"AR38", "c": ""},
          { "i":"AR29", "c": ""},
          { "i":"AR30", "c": ""},
          { "i":"AR31", "c": ""},
          { "i":"AR32", "c": ""},
          { "i":"AR33", "c": ""},
          { "i":"AR34", "c": ""},
          { "i":"AR35", "c": ""},
          { "i":"AR36", "c": ""},
          { "i":"AR37", "c": ""},
          { "i":"AR38", "c": ""},
          { "i":"AR39", "c": ""},
          { "i":"AR40", "c": ""},
          { "i":"AS00", "c": ""},
          { "i":"AS01", "c": ""},
          { "i":"AS02", "c": ""},
          { "i":"AS03", "c": ""},
          { "i":"AS04", "c": ""},
          { "i":"AS05", "c": ""},
          { "i":"AS06", "c": ""},
          { "i":"AS07", "c": ""},
          { "i":"AS08", "c": ""},
          { "i":"AS09", "c": ""},
          { "i":"AS10", "c": ""},
          { "i":"AS11", "c": ""},
          { "i":"AS12", "c": ""},
          { "i":"AS13", "c": ""},
          { "i":"AS14", "c": ""},
          { "i":"AS15", "c": ""},
          { "i":"AS16", "c": ""},
          { "i":"AS17", "c": ""},
          { "i":"AS18", "c": ""},
          { "i":"AS19", "c": ""},
          { "i":"AS20", "c": ""},
          { "i":"AS22", "c": ""},
          { "i":"AS23", "c": ""},
          { "i":"AS24", "c": ""},
          { "i":"AS25", "c": ""},
          { "i":"AS26", "c": ""},
          { "i":"AS27", "c": ""},
          { "i":"AS38", "c": ""},
          { "i":"AS29", "c": ""},
          { "i":"AS30", "c": ""},
          { "i":"AS31", "c": ""},
          { "i":"AS32", "c": ""},
          { "i":"AS33", "c": ""},
          { "i":"AS34", "c": ""},
          { "i":"AS35", "c": ""},
          { "i":"AS36", "c": ""},
          { "i":"AS37", "c": ""},
          { "i":"AS38", "c": ""},
          { "i":"AS39", "c": ""},
          { "i":"AS40", "c": ""},
          { "i":"AT00", "c": ""},
          { "i":"AT01", "c": ""},
          { "i":"AT02", "c": ""},
          { "i":"AT03", "c": ""},
          { "i":"AT04", "c": ""},
          { "i":"AT05", "c": ""},
          { "i":"AT06", "c": ""},
          { "i":"AT07", "c": ""},
          { "i":"AT08", "c": ""},
          { "i":"AT09", "c": ""},
          { "i":"AT10", "c": ""},
          { "i":"AT11", "c": ""},
          { "i":"AT12", "c": ""},
          { "i":"AT13", "c": ""},
          { "i":"AT14", "c": ""},
          { "i":"AT15", "c": ""},
          { "i":"AT16", "c": ""},
          { "i":"AT17", "c": ""},
          { "i":"AT18", "c": ""},
          { "i":"AT19", "c": ""},
          { "i":"AT20", "c": ""},
          { "i":"AT22", "c": ""},
          { "i":"AT23", "c": ""},
          { "i":"AT24", "c": ""},
          { "i":"AT25", "c": ""},
          { "i":"AT26", "c": ""},
          { "i":"AT27", "c": ""},
          { "i":"AT38", "c": ""},
          { "i":"AT29", "c": ""},
          { "i":"AT30", "c": ""},
          { "i":"AT31", "c": ""},
          { "i":"AT32", "c": ""},
          { "i":"AT33", "c": ""},
          { "i":"AT34", "c": ""},
          { "i":"AT35", "c": ""},
          { "i":"AT36", "c": ""},
          { "i":"AT37", "c": ""},
          { "i":"AT38", "c": ""},
          { "i":"AT39", "c": ""},
          { "i":"AT40", "c": ""},
          { "i":"AU00", "c": ""},
          { "i":"AU01", "c": ""},
          { "i":"AU02", "c": ""},
          { "i":"AU03", "c": ""},
          { "i":"AU04", "c": ""},
          { "i":"AU05", "c": ""},
          { "i":"AU06", "c": ""},
          { "i":"AU07", "c": ""},
          { "i":"AU08", "c": ""},
          { "i":"AU09", "c": ""},
          { "i":"AU10", "c": ""},
          { "i":"AU11", "c": ""},
          { "i":"AU12", "c": ""},
          { "i":"AU13", "c": ""},
          { "i":"AU14", "c": ""},
          { "i":"AU15", "c": ""},
          { "i":"AU16", "c": ""},
          { "i":"AU17", "c": ""},
          { "i":"AU18", "c": ""},
          { "i":"AU19", "c": ""},
          { "i":"AU20", "c": ""},
          { "i":"AU22", "c": ""},
          { "i":"AU23", "c": ""},
          { "i":"AU24", "c": ""},
          { "i":"AU25", "c": ""},
          { "i":"AU26", "c": ""},
          { "i":"AU27", "c": ""},
          { "i":"AU38", "c": ""},
          { "i":"AU29", "c": ""},
          { "i":"AU30", "c": ""},
          { "i":"AU31", "c": ""},
          { "i":"AU32", "c": ""},
          { "i":"AU33", "c": ""},
          { "i":"AU34", "c": ""},
          { "i":"AU35", "c": ""},
          { "i":"AU36", "c": ""},
          { "i":"AU37", "c": ""},
          { "i":"AU38", "c": ""},
          { "i":"AU39", "c": ""},
          { "i":"AU40", "c": ""},
          { "i":"AV00", "c": ""},
          { "i":"AV01", "c": ""},
          { "i":"AV02", "c": ""},
          { "i":"AV03", "c": ""},
          { "i":"AV04", "c": ""},
          { "i":"AV05", "c": ""},
          { "i":"AV06", "c": ""},
          { "i":"AV07", "c": ""},
          { "i":"AV08", "c": ""},
          { "i":"AV09", "c": ""},
          { "i":"AV10", "c": ""},
          { "i":"AV11", "c": ""},
          { "i":"AV12", "c": ""},
          { "i":"AV13", "c": ""},
          { "i":"AV14", "c": ""},
          { "i":"AV15", "c": ""},
          { "i":"AV16", "c": ""},
          { "i":"AV17", "c": ""},
          { "i":"AV18", "c": ""},
          { "i":"AV19", "c": ""},
          { "i":"AV20", "c": ""},
          { "i":"AV22", "c": ""},
          { "i":"AV23", "c": ""},
          { "i":"AV24", "c": ""},
          { "i":"AV25", "c": ""},
          { "i":"AV26", "c": ""},
          { "i":"AV27", "c": ""},
          { "i":"AV38", "c": ""},
          { "i":"AV29", "c": ""},
          { "i":"AV30", "c": ""},
          { "i":"AV31", "c": ""},
          { "i":"AV32", "c": ""},
          { "i":"AV33", "c": ""},
          { "i":"AV34", "c": ""},
          { "i":"AV35", "c": ""},
          { "i":"AV36", "c": ""},
          { "i":"AV37", "c": ""},
          { "i":"AV38", "c": ""},
          { "i":"AV39", "c": ""},
          { "i":"AV40", "c": ""},
          { "i":"AW00", "c": ""},
          { "i":"AW01", "c": ""},
          { "i":"AW02", "c": ""},
          { "i":"AW03", "c": ""},
          { "i":"AW04", "c": ""},
          { "i":"AW05", "c": ""},
          { "i":"AW06", "c": ""},
          { "i":"AW07", "c": ""},
          { "i":"AW08", "c": ""},
          { "i":"AW09", "c": ""},
          { "i":"AW10", "c": ""},
          { "i":"AW11", "c": ""},
          { "i":"AW12", "c": ""},
          { "i":"AW13", "c": ""},
          { "i":"AW14", "c": ""},
          { "i":"AW15", "c": ""},
          { "i":"AW16", "c": ""},
          { "i":"AW17", "c": ""},
          { "i":"AW18", "c": ""},
          { "i":"AW19", "c": ""},
          { "i":"AW20", "c": ""},
          { "i":"AW22", "c": ""},
          { "i":"AW23", "c": ""},
          { "i":"AW24", "c": ""},
          { "i":"AW25", "c": ""},
          { "i":"AW26", "c": ""},
          { "i":"AW27", "c": ""},
          { "i":"AW38", "c": ""},
          { "i":"AW29", "c": ""},
          { "i":"AW30", "c": ""},
          { "i":"AW31", "c": ""},
          { "i":"AW32", "c": ""},
          { "i":"AW33", "c": ""},
          { "i":"AW34", "c": ""},
          { "i":"AW35", "c": ""},
          { "i":"AW36", "c": ""},
          { "i":"AW37", "c": ""},
          { "i":"AW38", "c": ""},
          { "i":"AW39", "c": ""},
          { "i":"AW40", "c": ""},
          { "i":"AX00", "c": ""},
          { "i":"AX01", "c": ""},
          { "i":"AX02", "c": ""},
          { "i":"AX03", "c": ""},
          { "i":"AX04", "c": ""},
          { "i":"AX05", "c": ""},
          { "i":"AX06", "c": ""},
          { "i":"AX07", "c": ""},
          { "i":"AX08", "c": ""},
          { "i":"AX09", "c": ""},
          { "i":"AX10", "c": ""},
          { "i":"AX11", "c": ""},
          { "i":"AX12", "c": ""},
          { "i":"AX13", "c": ""},
          { "i":"AX14", "c": ""},
          { "i":"AX15", "c": ""},
          { "i":"AX16", "c": ""},
          { "i":"AX17", "c": ""},
          { "i":"AX18", "c": ""},
          { "i":"AX19", "c": ""},
          { "i":"AX20", "c": ""},
          { "i":"AX22", "c": ""},
          { "i":"AX23", "c": ""},
          { "i":"AX24", "c": ""},
          { "i":"AX25", "c": ""},
          { "i":"AX26", "c": ""},
          { "i":"AX27", "c": ""},
          { "i":"AX38", "c": ""},
          { "i":"AX29", "c": ""},
          { "i":"AX30", "c": ""},
          { "i":"AX31", "c": ""},
          { "i":"AX32", "c": ""},
          { "i":"AX33", "c": ""},
          { "i":"AX34", "c": ""},
          { "i":"AX35", "c": ""},
          { "i":"AX36", "c": ""},
          { "i":"AX37", "c": ""},
          { "i":"AX38", "c": ""},
          { "i":"AX39", "c": ""},
          { "i":"AX40", "c": ""},
          { "i":"AY00", "c": ""},
          { "i":"AY01", "c": ""},
          { "i":"AY02", "c": ""},
          { "i":"AY03", "c": ""},
          { "i":"AY04", "c": ""},
          { "i":"AY05", "c": ""},
          { "i":"AY06", "c": ""},
          { "i":"AY07", "c": ""},
          { "i":"AY08", "c": ""},
          { "i":"AY09", "c": ""},
          { "i":"AY10", "c": ""},
          { "i":"AY11", "c": ""},
          { "i":"AY12", "c": ""},
          { "i":"AY13", "c": ""},
          { "i":"AY14", "c": ""},
          { "i":"AY15", "c": ""},
          { "i":"AY16", "c": ""},
          { "i":"AY17", "c": ""},
          { "i":"AY18", "c": ""},
          { "i":"AY19", "c": ""},
          { "i":"AY20", "c": ""},
          { "i":"AY22", "c": ""},
          { "i":"AY23", "c": ""},
          { "i":"AY24", "c": ""},
          { "i":"AY25", "c": ""},
          { "i":"AY26", "c": ""},
          { "i":"AY27", "c": ""},
          { "i":"AY38", "c": ""},
          { "i":"AY29", "c": ""},
          { "i":"AY30", "c": ""},
          { "i":"AY31", "c": ""},
          { "i":"AY32", "c": ""},
          { "i":"AY33", "c": ""},
          { "i":"AY34", "c": ""},
          { "i":"AY35", "c": ""},
          { "i":"AY36", "c": ""},
          { "i":"AY37", "c": ""},
          { "i":"AY38", "c": ""},
          { "i":"AY39", "c": ""},
          { "i":"AY40", "c": ""},
          { "i":"AZ00", "c": ""},
          { "i":"AZ01", "c": ""},
          { "i":"AZ02", "c": ""},
          { "i":"AZ03", "c": ""},
          { "i":"AZ04", "c": ""},
          { "i":"AZ05", "c": ""},
          { "i":"AZ06", "c": ""},
          { "i":"AZ07", "c": ""},
          { "i":"AZ08", "c": ""},
          { "i":"AZ09", "c": ""},
          { "i":"AZ10", "c": ""},
          { "i":"AZ11", "c": ""},
          { "i":"AZ12", "c": ""},
          { "i":"AZ13", "c": ""},
          { "i":"AZ14", "c": ""},
          { "i":"AZ15", "c": ""},
          { "i":"AZ16", "c": ""},
          { "i":"AZ17", "c": ""},
          { "i":"AZ18", "c": ""},
          { "i":"AZ19", "c": ""},
          { "i":"AZ20", "c": ""},
          { "i":"AZ22", "c": ""},
          { "i":"AZ23", "c": ""},
          { "i":"AZ24", "c": ""},
          { "i":"AZ25", "c": ""},
          { "i":"AZ26", "c": ""},
          { "i":"AZ27", "c": ""},
          { "i":"AZ38", "c": ""},
          { "i":"AZ29", "c": ""},
          { "i":"AZ30", "c": ""},
          { "i":"AZ31", "c": ""},
          { "i":"AZ32", "c": ""},
          { "i":"AZ33", "c": ""},
          { "i":"AZ34", "c": ""},
          { "i":"AZ35", "c": ""},
          { "i":"AZ36", "c": ""},
          { "i":"AZ37", "c": ""},
          { "i":"AZ38", "c": ""},
          { "i":"AZ39", "c": ""},
          { "i":"AZ40", "c": ""},
          { "i":"BA00", "c": ""},
          { "i":"BA01", "c": ""},
          { "i":"BA02", "c": ""},
          { "i":"BA03", "c": ""},
          { "i":"BA04", "c": ""},
          { "i":"BA05", "c": ""},
          { "i":"BA06", "c": ""},
          { "i":"BA07", "c": ""},
          { "i":"BA08", "c": ""},
          { "i":"BA09", "c": ""},
          { "i":"BA10", "c": ""},
          { "i":"BA11", "c": ""},
          { "i":"BA12", "c": ""},
          { "i":"BA13", "c": ""},
          { "i":"BA14", "c": ""},
          { "i":"BA15", "c": ""},
          { "i":"BA16", "c": ""},
          { "i":"BA17", "c": ""},
          { "i":"BA18", "c": ""},
          { "i":"BA19", "c": ""},
          { "i":"BA20", "c": ""},
          { "i":"BA22", "c": ""},
          { "i":"BA23", "c": ""},
          { "i":"BA24", "c": ""},
          { "i":"BA25", "c": ""},
          { "i":"BA26", "c": ""},
          { "i":"BA27", "c": ""},
          { "i":"BA38", "c": ""},
          { "i":"BA29", "c": ""},
          { "i":"BA30", "c": ""},
          { "i":"BA31", "c": ""},
          { "i":"BA32", "c": ""},
          { "i":"BA33", "c": ""},
          { "i":"BA34", "c": ""},
          { "i":"BA35", "c": ""},
          { "i":"BA36", "c": ""},
          { "i":"BA37", "c": ""},
          { "i":"BA38", "c": ""},
          { "i":"BA39", "c": ""},
          { "i":"BA40", "c": ""},
          { "i":"BB00", "c": ""},
          { "i":"BB01", "c": ""},
          { "i":"BB02", "c": ""},
          { "i":"BB03", "c": ""},
          { "i":"BB04", "c": ""},
          { "i":"BB05", "c": ""},
          { "i":"BB06", "c": ""},
          { "i":"BB07", "c": ""},
          { "i":"BB08", "c": ""},
          { "i":"BB09", "c": ""},
          { "i":"BB10", "c": ""},
          { "i":"BB11", "c": ""},
          { "i":"BB12", "c": ""},
          { "i":"BB13", "c": ""},
          { "i":"BB14", "c": ""},
          { "i":"BB15", "c": ""},
          { "i":"BB16", "c": ""},
          { "i":"BB17", "c": ""},
          { "i":"BB18", "c": ""},
          { "i":"BB19", "c": ""},
          { "i":"BB20", "c": ""},
          { "i":"BB22", "c": ""},
          { "i":"BB23", "c": ""},
          { "i":"BB24", "c": ""},
          { "i":"BB25", "c": ""},
          { "i":"BB26", "c": ""},
          { "i":"BB27", "c": ""},
          { "i":"BB38", "c": ""},
          { "i":"BB29", "c": ""},
          { "i":"BB30", "c": ""},
          { "i":"BB31", "c": ""},
          { "i":"BB32", "c": ""},
          { "i":"BB33", "c": ""},
          { "i":"BB34", "c": ""},
          { "i":"BB35", "c": ""},
          { "i":"BB36", "c": ""},
          { "i":"BB37", "c": ""},
          { "i":"BB38", "c": ""},
          { "i":"BB39", "c": ""},
          { "i":"BB40", "c": ""},

          { "i":"BC00", "c": ""},
          { "i":"BC01", "c": ""},
          { "i":"BC02", "c": ""},
          { "i":"BC03", "c": ""},
          { "i":"BC04", "c": ""},
          { "i":"BC05", "c": ""},
          { "i":"BC06", "c": ""},
          { "i":"BC07", "c": ""},
          { "i":"BC08", "c": ""},
          { "i":"BC09", "c": ""},
          { "i":"BC10", "c": ""},
          { "i":"BC11", "c": ""},
          { "i":"BC12", "c": ""},
          { "i":"BC13", "c": ""},
          { "i":"BC14", "c": ""},
          { "i":"BC15", "c": ""},
          { "i":"BC16", "c": ""},
          { "i":"BC17", "c": ""},
          { "i":"BC18", "c": ""},
          { "i":"BC19", "c": ""},
          { "i":"BC20", "c": ""},
          { "i":"BC22", "c": ""},
          { "i":"BC23", "c": ""},
          { "i":"BC24", "c": ""},
          { "i":"BC25", "c": ""},
          { "i":"BC26", "c": ""},
          { "i":"BC27", "c": ""},
          { "i":"BC38", "c": ""},
          { "i":"BC29", "c": ""},
          { "i":"BC30", "c": ""},
          { "i":"BC31", "c": ""},
          { "i":"BC32", "c": ""},
          { "i":"BC33", "c": ""},
          { "i":"BC34", "c": ""},
          { "i":"BC35", "c": ""},
          { "i":"BC36", "c": ""},
          { "i":"BC37", "c": ""},
          { "i":"BC38", "c": ""},
          { "i":"BC39", "c": ""},
          { "i":"BC40", "c": ""},
          { "i":"BD00", "c": ""},
          { "i":"BD01", "c": ""},
          { "i":"BD02", "c": ""},
          { "i":"BD03", "c": ""},
          { "i":"BD04", "c": ""},
          { "i":"BD05", "c": ""},
          { "i":"BD06", "c": ""},
          { "i":"BD07", "c": ""},
          { "i":"BD08", "c": ""},
          { "i":"BD09", "c": ""},
          { "i":"BD10", "c": ""},
          { "i":"BD11", "c": ""},
          { "i":"BD12", "c": ""},
          { "i":"BD13", "c": ""},
          { "i":"BD14", "c": ""},
          { "i":"BD15", "c": ""},
          { "i":"BD16", "c": ""},
          { "i":"BD17", "c": ""},
          { "i":"BD18", "c": ""},
          { "i":"BD19", "c": ""},
          { "i":"BD20", "c": ""},
          { "i":"BD22", "c": ""},
          { "i":"BD23", "c": ""},
          { "i":"BD24", "c": ""},
          { "i":"BD25", "c": ""},
          { "i":"BD26", "c": ""},
          { "i":"BD27", "c": ""},
          { "i":"BD38", "c": ""},
          { "i":"BD29", "c": ""},
          { "i":"BD30", "c": ""},
          { "i":"BD31", "c": ""},
          { "i":"BD32", "c": ""},
          { "i":"BD33", "c": ""},
          { "i":"BD34", "c": ""},
          { "i":"BD35", "c": ""},
          { "i":"BD36", "c": ""},
          { "i":"BD37", "c": ""},
          { "i":"BD38", "c": ""},
          { "i":"BD39", "c": ""},
          { "i":"BD40", "c": ""},
          { "i":"BE00", "c": ""},
          { "i":"BE01", "c": ""},
          { "i":"BE02", "c": ""},
          { "i":"BE03", "c": ""},
          { "i":"BE04", "c": ""},
          { "i":"BE05", "c": ""},
          { "i":"BE06", "c": ""},
          { "i":"BE07", "c": ""},
          { "i":"BE08", "c": ""},
          { "i":"BE09", "c": ""},
          { "i":"BE10", "c": ""},
          { "i":"BE11", "c": ""},
          { "i":"BE12", "c": ""},
          { "i":"BE13", "c": ""},
          { "i":"BE14", "c": ""},
          { "i":"BE15", "c": ""},
          { "i":"BE16", "c": ""},
          { "i":"BE17", "c": ""},
          { "i":"BE18", "c": ""},
          { "i":"BE19", "c": ""},
          { "i":"BE20", "c": ""},
          { "i":"BE22", "c": ""},
          { "i":"BE23", "c": ""},
          { "i":"BE24", "c": ""},
          { "i":"BE25", "c": ""},
          { "i":"BE26", "c": ""},
          { "i":"BE27", "c": ""},
          { "i":"BE38", "c": ""},
          { "i":"BE29", "c": ""},
          { "i":"BE30", "c": ""},
          { "i":"BE31", "c": ""},
          { "i":"BE32", "c": ""},
          { "i":"BE33", "c": ""},
          { "i":"BE34", "c": ""},
          { "i":"BE35", "c": ""},
          { "i":"BE36", "c": ""},
          { "i":"BE37", "c": ""},
          { "i":"BE38", "c": ""},
          { "i":"BE39", "c": ""},
          { "i":"BE40", "c": ""},
          { "i":"BF00", "c": ""},
          { "i":"BF01", "c": ""},
          { "i":"BF02", "c": ""},
          { "i":"BF03", "c": ""},
          { "i":"BF04", "c": ""},
          { "i":"BF05", "c": ""},
          { "i":"BF06", "c": ""},
          { "i":"BF07", "c": ""},
          { "i":"BF08", "c": ""},
          { "i":"BF09", "c": ""},
          { "i":"BF10", "c": ""},
          { "i":"BF11", "c": ""},
          { "i":"BF12", "c": ""},
          { "i":"BF13", "c": ""},
          { "i":"BF14", "c": ""},
          { "i":"BF15", "c": ""},
          { "i":"BF16", "c": ""},
          { "i":"BF17", "c": ""},
          { "i":"BF18", "c": ""},
          { "i":"BF19", "c": ""},
          { "i":"BF20", "c": ""},
          { "i":"BF22", "c": ""},
          { "i":"BF23", "c": ""},
          { "i":"BF24", "c": ""},
          { "i":"BF25", "c": ""},
          { "i":"BF26", "c": ""},
          { "i":"BF27", "c": ""},
          { "i":"BF38", "c": ""},
          { "i":"BF29", "c": ""},
          { "i":"BF30", "c": ""},
          { "i":"BF31", "c": ""},
          { "i":"BF32", "c": ""},
          { "i":"BF33", "c": ""},
          { "i":"BF34", "c": ""},
          { "i":"BF35", "c": ""},
          { "i":"BF36", "c": ""},
          { "i":"BF37", "c": ""},
          { "i":"BF38", "c": ""},
          { "i":"BF39", "c": ""},
          { "i":"BF40", "c": ""},
          { "i":"BG00", "c": ""},
          { "i":"BG01", "c": ""},
          { "i":"BG02", "c": ""},
          { "i":"BG03", "c": ""},
          { "i":"BG04", "c": ""},
          { "i":"BG05", "c": ""},
          { "i":"BG06", "c": ""},
          { "i":"BG07", "c": ""},
          { "i":"BG08", "c": ""},
          { "i":"BG09", "c": ""},
          { "i":"BG10", "c": ""},
          { "i":"BG11", "c": ""},
          { "i":"BG12", "c": ""},
          { "i":"BG13", "c": ""},
          { "i":"BG14", "c": ""},
          { "i":"BG15", "c": ""},
          { "i":"BG16", "c": ""},
          { "i":"BG17", "c": ""},
          { "i":"BG18", "c": ""},
          { "i":"BG19", "c": ""},
          { "i":"BG20", "c": ""},
          { "i":"BG22", "c": ""},
          { "i":"BG23", "c": ""},
          { "i":"BG24", "c": ""},
          { "i":"BG25", "c": ""},
          { "i":"BG26", "c": ""},
          { "i":"BG27", "c": ""},
          { "i":"BG38", "c": ""},
          { "i":"BG29", "c": ""},
          { "i":"BG30", "c": ""},
          { "i":"BG31", "c": ""},
          { "i":"BG32", "c": ""},
          { "i":"BG33", "c": ""},
          { "i":"BG34", "c": ""},
          { "i":"BG35", "c": ""},
          { "i":"BG36", "c": ""},
          { "i":"BG37", "c": ""},
          { "i":"BG38", "c": ""},
          { "i":"BG39", "c": ""},
          { "i":"BG40", "c": ""},
          { "i":"BH00", "c": ""},
          { "i":"BH01", "c": ""},
          { "i":"BH02", "c": ""},
          { "i":"BH03", "c": ""},
          { "i":"BH04", "c": ""},
          { "i":"BH05", "c": ""},
          { "i":"BH06", "c": ""},
          { "i":"BH07", "c": ""},
          { "i":"BH08", "c": ""},
          { "i":"BH09", "c": ""},
          { "i":"BH10", "c": ""},
          { "i":"BH11", "c": ""},
          { "i":"BH12", "c": ""},
          { "i":"BH13", "c": ""},
          { "i":"BH14", "c": ""},
          { "i":"BH15", "c": ""},
          { "i":"BH16", "c": ""},
          { "i":"BH17", "c": ""},
          { "i":"BH18", "c": ""},
          { "i":"BH19", "c": ""},
          { "i":"BH20", "c": ""},
          { "i":"BH22", "c": ""},
          { "i":"BH23", "c": ""},
          { "i":"BH24", "c": ""},
          { "i":"BH25", "c": ""},
          { "i":"BH26", "c": ""},
          { "i":"BH27", "c": ""},
          { "i":"BH38", "c": ""},
          { "i":"BH29", "c": ""},
          { "i":"BH30", "c": ""},
          { "i":"BH31", "c": ""},
          { "i":"BH32", "c": ""},
          { "i":"BH33", "c": ""},
          { "i":"BH34", "c": ""},
          { "i":"BH35", "c": ""},
          { "i":"BH36", "c": ""},
          { "i":"BH37", "c": ""},
          { "i":"BH38", "c": ""},
          { "i":"BH39", "c": ""},
          { "i":"BH40", "c": ""},

          { "i":"BI00", "c": ""},
          { "i":"BI01", "c": ""},
          { "i":"BI02", "c": ""},
          { "i":"BI03", "c": ""},
          { "i":"BI04", "c": ""},
          { "i":"BI05", "c": ""},
          { "i":"BI06", "c": ""},
          { "i":"BI07", "c": ""},
          { "i":"BI08", "c": ""},
          { "i":"BI09", "c": ""},
          { "i":"BI10", "c": ""},
          { "i":"BI11", "c": ""},
          { "i":"BI12", "c": ""},
          { "i":"BI13", "c": ""},
          { "i":"BI14", "c": ""},
          { "i":"BI15", "c": ""},
          { "i":"BI16", "c": ""},
          { "i":"BI17", "c": ""},
          { "i":"BI18", "c": ""},
          { "i":"BI19", "c": ""},
          { "i":"BI20", "c": ""},
          { "i":"BI22", "c": ""},
          { "i":"BI23", "c": ""},
          { "i":"BI24", "c": ""},
          { "i":"BI25", "c": ""},
          { "i":"BI26", "c": ""},
          { "i":"BI27", "c": ""},
          { "i":"BI38", "c": ""},
          { "i":"BI29", "c": ""},
          { "i":"BI30", "c": ""},
          { "i":"BI31", "c": ""},
          { "i":"BI32", "c": ""},
          { "i":"BI33", "c": ""},
          { "i":"BI34", "c": ""},
          { "i":"BI35", "c": ""},
          { "i":"BI36", "c": ""},
          { "i":"BI37", "c": ""},
          { "i":"BI38", "c": ""},
          { "i":"BI39", "c": ""},
          { "i":"BI40", "c": ""},
          { "i":"BJ00", "c": ""},
          { "i":"BJ01", "c": ""},
          { "i":"BJ02", "c": ""},
          { "i":"BJ03", "c": ""},
          { "i":"BJ04", "c": ""},
          { "i":"BJ05", "c": ""},
          { "i":"BJ06", "c": ""},
          { "i":"BJ07", "c": ""},
          { "i":"BJ08", "c": ""},
          { "i":"BJ09", "c": ""},
          { "i":"BJ10", "c": ""},
          { "i":"BJ11", "c": ""},
          { "i":"BJ12", "c": ""},
          { "i":"BJ13", "c": ""},
          { "i":"BJ14", "c": ""},
          { "i":"BJ15", "c": ""},
          { "i":"BJ16", "c": ""},
          { "i":"BJ17", "c": ""},
          { "i":"BJ18", "c": ""},
          { "i":"BJ19", "c": ""},
          { "i":"BJ20", "c": ""},
          { "i":"BJ22", "c": ""},
          { "i":"BJ23", "c": ""},
          { "i":"BJ24", "c": ""},
          { "i":"BJ25", "c": ""},
          { "i":"BJ26", "c": ""},
          { "i":"BJ27", "c": ""},
          { "i":"BJ38", "c": ""},
          { "i":"BJ29", "c": ""},
          { "i":"BJ30", "c": ""},
          { "i":"BJ31", "c": ""},
          { "i":"BJ32", "c": ""},
          { "i":"BJ33", "c": ""},
          { "i":"BJ34", "c": ""},
          { "i":"BJ35", "c": ""},
          { "i":"BJ36", "c": ""},
          { "i":"BJ37", "c": ""},
          { "i":"BJ38", "c": ""},
          { "i":"BJ39", "c": ""},
          { "i":"BJ40", "c": ""},
          { "i":"BK00", "c": ""},
          { "i":"BK01", "c": ""},
          { "i":"BK02", "c": ""},
          { "i":"BK03", "c": ""},
          { "i":"BK04", "c": ""},
          { "i":"BK05", "c": ""},
          { "i":"BK06", "c": ""},
          { "i":"BK07", "c": ""},
          { "i":"BK08", "c": ""},
          { "i":"BK09", "c": ""},
          { "i":"BK10", "c": ""},
          { "i":"BK11", "c": ""},
          { "i":"BK12", "c": ""},
          { "i":"BK13", "c": ""},
          { "i":"BK14", "c": ""},
          { "i":"BK15", "c": ""},
          { "i":"BK16", "c": ""},
          { "i":"BK17", "c": ""},
          { "i":"BK18", "c": ""},
          { "i":"BK19", "c": ""},
          { "i":"BK20", "c": ""},
          { "i":"BK22", "c": ""},
          { "i":"BK23", "c": ""},
          { "i":"BK24", "c": ""},
          { "i":"BK25", "c": ""},
          { "i":"BK26", "c": ""},
          { "i":"BK27", "c": ""},
          { "i":"BK38", "c": ""},
          { "i":"BK29", "c": ""},
          { "i":"BK30", "c": ""},
          { "i":"BK31", "c": ""},
          { "i":"BK32", "c": ""},
          { "i":"BK33", "c": ""},
          { "i":"BK34", "c": ""},
          { "i":"BK35", "c": ""},
          { "i":"BK36", "c": ""},
          { "i":"BK37", "c": ""},
          { "i":"BK38", "c": ""},
          { "i":"BK39", "c": ""},
          { "i":"BK40", "c": ""},
          { "i":"BL00", "c": ""},
          { "i":"BL01", "c": ""},
          { "i":"BL02", "c": ""},
          { "i":"BL03", "c": ""},
          { "i":"BL04", "c": ""},
          { "i":"BL05", "c": ""},
          { "i":"BL06", "c": ""},
          { "i":"BL07", "c": ""},
          { "i":"BL08", "c": ""},
          { "i":"BL09", "c": ""},
          { "i":"BL10", "c": ""},
          { "i":"BL11", "c": ""},
          { "i":"BL12", "c": ""},
          { "i":"BL13", "c": ""},
          { "i":"BL14", "c": ""},
          { "i":"BL15", "c": ""},
          { "i":"BL16", "c": ""},
          { "i":"BL17", "c": ""},
          { "i":"BL18", "c": ""},
          { "i":"BL19", "c": ""},
          { "i":"BL20", "c": ""},
          { "i":"BL22", "c": ""},
          { "i":"BL23", "c": ""},
          { "i":"BL24", "c": ""},
          { "i":"BL25", "c": ""},
          { "i":"BL26", "c": ""},
          { "i":"BL27", "c": ""},
          { "i":"BL38", "c": ""},
          { "i":"BL29", "c": ""},
          { "i":"BL30", "c": ""},
          { "i":"BL31", "c": ""},
          { "i":"BL32", "c": ""},
          { "i":"BL33", "c": ""},
          { "i":"BL34", "c": ""},
          { "i":"BL35", "c": ""},
          { "i":"BL36", "c": ""},
          { "i":"BL37", "c": ""},
          { "i":"BL38", "c": ""},
          { "i":"BL39", "c": ""},
          { "i":"BL40", "c": ""},
          { "i":"BM00", "c": ""},
          { "i":"BM01", "c": ""},
          { "i":"BM02", "c": ""},
          { "i":"BM03", "c": ""},
          { "i":"BM04", "c": ""},
          { "i":"BM05", "c": ""},
          { "i":"BM06", "c": ""},
          { "i":"BM07", "c": ""},
          { "i":"BM08", "c": ""},
          { "i":"BM09", "c": ""},
          { "i":"BM10", "c": ""},
          { "i":"BM11", "c": ""},
          { "i":"BM12", "c": ""},
          { "i":"BM13", "c": ""},
          { "i":"BM14", "c": ""},
          { "i":"BM15", "c": ""},
          { "i":"BM16", "c": ""},
          { "i":"BM17", "c": ""},
          { "i":"BM18", "c": ""},
          { "i":"BM19", "c": ""},
          { "i":"BM20", "c": ""},
          { "i":"BM22", "c": ""},
          { "i":"BM23", "c": ""},
          { "i":"BM24", "c": ""},
          { "i":"BM25", "c": ""},
          { "i":"BM26", "c": ""},
          { "i":"BM27", "c": ""},
          { "i":"BM38", "c": ""},
          { "i":"BM29", "c": ""},
          { "i":"BM30", "c": ""},
          { "i":"BM31", "c": ""},
          { "i":"BM32", "c": ""},
          { "i":"BM33", "c": ""},
          { "i":"BM34", "c": ""},
          { "i":"BM35", "c": ""},
          { "i":"BM36", "c": ""},
          { "i":"BM37", "c": ""},
          { "i":"BM38", "c": ""},
          { "i":"BM39", "c": ""},
          { "i":"BM40", "c": ""},
          { "i":"BN00", "c": ""},
          { "i":"BN01", "c": ""},
          { "i":"BN02", "c": ""},
          { "i":"BN03", "c": ""},
          { "i":"BN04", "c": ""},
          { "i":"BN05", "c": ""},
          { "i":"BN06", "c": ""},
          { "i":"BN07", "c": ""},
          { "i":"BN08", "c": ""},
          { "i":"BN09", "c": ""},
          { "i":"BN10", "c": ""},
          { "i":"BN11", "c": ""},
          { "i":"BN12", "c": ""},
          { "i":"BN13", "c": ""},
          { "i":"BN14", "c": ""},
          { "i":"BN15", "c": ""},
          { "i":"BN16", "c": ""},
          { "i":"BN17", "c": ""},
          { "i":"BN18", "c": ""},
          { "i":"BN19", "c": ""},
          { "i":"BN20", "c": ""},
          { "i":"BN22", "c": ""},
          { "i":"BN23", "c": ""},
          { "i":"BN24", "c": ""},
          { "i":"BN25", "c": ""},
          { "i":"BN26", "c": ""},
          { "i":"BN27", "c": ""},
          { "i":"BN38", "c": ""},
          { "i":"BN29", "c": ""},
          { "i":"BN30", "c": ""},
          { "i":"BN31", "c": ""},
          { "i":"BN32", "c": ""},
          { "i":"BN33", "c": ""},
          { "i":"BN34", "c": ""},
          { "i":"BN35", "c": ""},
          { "i":"BN36", "c": ""},
          { "i":"BN37", "c": ""},
          { "i":"BN38", "c": ""},
          { "i":"BN39", "c": ""},
          { "i":"BN40", "c": ""}


        ]
      )
    }
  }

  $scope.livepreset = false;
  $scope.showPresets = false;
  $scope.presetFrameCount = 1;

  $scope.closePresetselectordiv = function() {
      $scope.showPresets = false;
  }
  $scope.presets = [
    {"n": "checkard", "funcN": "checkardFunction", "gifpic": "nothing.png"},
    {"n": "blink", "funcN": "blinkFunction", "gifpic": "black.jpg"},
    {"n": "circle out", "funcN": "", "gifpic": "nothing.png"},
    {"n": "solid", "funcN": "allonecolorFunction", "gifpic": "white.png"},
    {"n": "circle odsafdst", "funcN": "", "gifpic": "nothing.png"},
    {"n": "circle oudsafadst", "funcN": "", "gifpic": "nothing.png"},
    {"n": "circledsafsad out", "funcN": "", "gifpic": "nothing.png"},
    {"n": "cadsfircle out", "funcN": "", "gifpic": "nothing.png"}
  ]



  $scope.selectPresetFunc = function(name, funcName, pic) {
      $scope.selectedPreset = name;
      $scope.selectedPresetFuncName = funcName;
      $scope.selectedPresetPic = pic;
      $scope.livepreset = true;
      $scope.showPresets = false;

  }

  $scope.addPreset = function() {
    $scope.livepreset = true;
  }

  $scope.cancelPreset = function() {
      $scope.livepreset = false;
  }

  $scope.applyPreset = function(parentindex, squarei) {

  if($scope.livepreset == true){

    if($scope.selectedPresetFuncName == "allonecolorFunction"){
      $scope.allonecolorFunction();
    }else if($scope.selectedPresetFuncName == "blinkFunction"){
      $scope.blinkFunction();
    }else if($scope.selectedPresetFuncName == "checkardFunction"){
      $scope.checkardFunction();
    }


    }
    $scope.livepreset = false;
  }



  //preset functions
  $scope.allonecolorFunction = function() {
    for (i = 0; i < $scope.selectrangeXarray.length; i++) {
        //console.log( $scope.actualXrange[i]);
        this.xvalue = $scope.selectrangeXarray[i];
        //console.log(this.xvalue);
        //y range
        for (y = 0; y < $scope.selectrangeYarray.length; y++) {
            //console.log( $scope.actualXrange[i]);
            //console.log($scope.outselectrangebigi + $scope.actualYrange[y] + this.xvalue);
            $scope.setSquare($scope.outselectrangebigi, $scope.selectrangeYarray[y] + this.xvalue);
        }
    }
  }

  $scope.blinkFunction = function() {
    //alert($scope.presetFrameCount);
    //alert($scope.outselectrangebigi);

    for (i = 0; i < $scope.presetFrameCount; i++) {
      if(i % 2 == 0){
        //alert(i + $scope.outselectrangebigi);
        for (q = 0; q < $scope.selectrangeXarray.length; q++) {
            //console.log( $scope.actualXrange[i]);
            this.xvalue = $scope.selectrangeXarray[q];
            for (y = 0; y < $scope.selectrangeYarray.length; y++) {
                $scope.setSquare($scope.outselectrangebigi + i, $scope.selectrangeYarray[y] + this.xvalue);
            }
        }
      }
    }
  }

  $scope.checkardFunction = function() {
    //alert($scope.presetFrameCount);
    //alert($scope.outselectrangebigi);

    for (i = 0; i < $scope.presetFrameCount; i++) {
      if(i % 2 == 0){
        //alert(i + $scope.outselectrangebigi);
        for (q = 0; q < $scope.selectrangeXarray.length; q++) {
            //console.log( $scope.actualXrange[i]);
            //alert(q);
            if(q % 2 == 1){
              //alert(q);
              this.xoscilatevar = 1;
            }else{
              this.xoscilatevar = 0;
            }
            this.xvalue = $scope.selectrangeXarray[q];
            for (y = 0; y < $scope.selectrangeYarray.length; y++) {
              if(this.xoscilatevar == 1){
                if(y % 2 == 0){
                $scope.setSquare($scope.outselectrangebigi + i, $scope.selectrangeYarray[y] + this.xvalue);
                }
              }else{
                if(y % 2 == 1){
                $scope.setSquare($scope.outselectrangebigi + i, $scope.selectrangeYarray[y] + this.xvalue);
                }
              }

            }
        }
      }else {
        for (q = 0; q < $scope.selectrangeXarray.length; q++) {
            //console.log( $scope.actualXrange[i]);
            //alert(q);
            if(q % 2 == 1){
              //alert(q);
              this.xoscilatevar = 1;
            }else{
              this.xoscilatevar = 0;
            }
            this.xvalue = $scope.selectrangeXarray[q];
            for (y = 0; y < $scope.selectrangeYarray.length; y++) {
              if(this.xoscilatevar == 1){
                if(y % 2 == 1){
                $scope.setSquare($scope.outselectrangebigi + i, $scope.selectrangeYarray[y] + this.xvalue);
                }
              }else{
                if(y % 2 == 0){
                $scope.setSquare($scope.outselectrangebigi + i, $scope.selectrangeYarray[y] + this.xvalue);
                }
              }

            }
        }
      }



    }
  }

});
