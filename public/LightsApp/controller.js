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
    $scope.currenttimeLocalinit = new Date();
    $scope.currenttimeLocal = $scope.currenttimeLocalinit.getTime();
    $http.get('http://52.41.37.153/sysdate.php')
    .success(function(response) {
      $scope.phprespone = response;

      $rootScope.currenttime2 = Number(response);

      $scope.updatetime2;

      $scope.currenttimeLocalinit2 = new Date();
      $scope.currenttimeLocal2 = $scope.currenttimeLocalinit2.getTime();
      $scope.timedifference = ($scope.currenttimeLocal2 - $scope.currenttimeLocal)/2;
      $scope.currenttimeadded = Number($rootScope.currenttime2) + Number($scope.timedifference);

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
        document.getElementById("colordiv").style.backgroundColor = "red";

      }else {
        document.getElementById("colordiv").style.backgroundColor = "blue";
      }


    }

    $scope.updatetime2 = function() {
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
