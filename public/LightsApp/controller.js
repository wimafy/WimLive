var app = angular.module('myApp', []);


app.service('getcurrenttime', function() {

  var t = Date.parse(new Date());
  console.log(t);
  var milliseconds = Math.floor((t) % 60);
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));

  this.totaltime = t;
  this.daystime = days;
  this.hourstime = hours;
  this.minutestime = minutes;
  this.secondstime = seconds;
  this.millisecondstime = milliseconds;
  this.currenttime = "The current time is NOW";

});




app.controller('myCtrl', function($scope, $timeout, $interval, getcurrenttime, $rootScope, $http) {

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
      $rootScope.currenttime2 = Number($scope.servergettime) + Number($scope.timedifference);

      //alert("wee");
    });

    $scope.tplus2 = 0;

    $scope.timeupdater2 = function() {
      $scope.tplus2 += 100;
      $scope.actualtime = $rootScope.currenttime2 + $scope.tplus2;
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
       document.getElementById("colordiv").style.backgroundColor = "yellow";
    }

    $scope.updatetime2 = function() {
      setInterval( function(){$scope.timeresync()}, 5000);
      setInterval( function(){$scope.timeupdater2()}, 100);

    }


    $scope.alertfunction = function() {

          alert("theings");

    }


    $scope.showwords = function(){

        document.getElementById('clicktobegin').style.zIndex = -3;
        document.getElementById('testDiv').style.backgroundColor = "white";
      $interval(function () {
        document.getElementById('testDiv').style.backgroundColor = "white";
          $timeout(function () {
            document.getElementById('testDiv').style.backgroundColor = "black";

          }, 500);
      }, 2000);


    };


    $scope.testsarray = [
      {testname: 'Test One', redirectlink: '/TestOne', completed: true},
      {testname: 'Test Two', redirectlink: '/TestTwo', completed: true},
      {testname: 'Test Three', redirectlink: '/TestThree', completed: true},
      {testname: 'Test Four', redirectlink: '/TestFour', completed: true},
      {testname: 'Test Five', redirectlink: '/TestFive', completed: true},
      {testname: 'Test Six', redirectlink: '/TestSix', completed: true},

    ];




    $scope.getTimeRemaining = function(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      console.log(t);
      var milliseconds = Math.floor((t) % 60);
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
        'milliseconds': milliseconds
      };
    }


    $scope.initializeClock = function(id, clockID, endtime) {
      var clock = document.getElementById(id);
      var daysSpan = clock.querySelector('.days');
      var hoursSpan = clock.querySelector('.hours');
      var minutesSpan = clock.querySelector('.minutes');
      var secondsSpan = clock.querySelector('.seconds');
      var millisecondsSpan = clock.querySelector('.milliseconds');

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      millisecondsSpan.innerHTML = ('0' + t.milliseconds).slice(-2);

    }

    $scope.randomnumber = function(){
      document.getElementById("demo").innerHTML = Math.random();
    }

    $scope.changenumber = function() {
      setInterval( function(){$scope.randomnumber()}, 100);
    }



    $scope.currentTimeHolder = getcurrenttime.totaltime;
    $scope.currentTimeHolderdays = getcurrenttime.daystime;
    $scope.currentTimeHolderhours = getcurrenttime.hourstime;
    $scope.currentTimeHolderminutes = getcurrenttime.minutestime;
    $scope.currentTimeHolderseconds = getcurrenttime.secondstime;
    $scope.currentTimeHoldermilliseconds = getcurrenttime.millisecondstime;

/*
    $scope.changecolor = function() {
      alert("dsda");
      document.getElementById('colordiv').style.backgroundColor = "blue";
    }


    $rootScope.currenttime = getcurrenttime.totaltime;
    $scope.tplus = 0;

    $scope.timeupdater = function() {
      $scope.tplus += 100;
      $scope.actualtime = $rootScope.currenttime + $scope.tplus;
      document.getElementById("colordiv").innerHTML = $scope.actualtime ;


    }

    $scope.updatetime = function() {
      setInterval( function(){$scope.timeupdater()}, 1000);

    }
*/

    //var deadline = 'August 14 2016 15:55:59 GMT-0700';
    //initializeClock('clockdiv', deadline);




});
