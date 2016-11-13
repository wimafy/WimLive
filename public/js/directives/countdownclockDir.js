angular.module('wimControllers.directives.countdownClock', [])
.directive('countdownClock', function() {
    return {
        restrict: 'E',
        scope: {
            //data is found in the div called countdown-clock
            //the syntax is awkward and i'm not sure why it is that way
            data: '='
        },
        //not sure what replace does
        replace: true,
        template: "<h1>{{data.name}}</h1>",
        link: function(scope, element, attrs) {
          //console.log(arguments)
        },
        controller: function($scope, $interval) {
          console.log($scope.data);
          //interval is set at the end of this function
        //  $interval(function() {
            console.log('interval');
            console.log($scope.data.id);














            function getTimeRemaining(endtime) {
              var t = Date.parse(endtime) - Date.parse(new Date());
              var seconds = Math.floor((t / 1000) % 60);
              var minutes = Math.floor((t / 1000 / 60) % 60);
              var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
              var days = Math.floor(t / (1000 * 60 * 60 * 24));
              return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
              };
            }


           function initializeClock(id, clockID, endtime) {
              var clock = document.getElementById(id);
              var daysSpan = clock.querySelector('.days');
              var hoursSpan = clock.querySelector('.hours');
              var minutesSpan = clock.querySelector('.minutes');
              var secondsSpan = clock.querySelector('.seconds');


              function updateClock() {
                var t = getTimeRemaining(endtime);

                daysSpan.innerHTML = t.days;
                hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
                minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
                secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

                if (t.days > 1){
                    document.getElementById(clockID).innerHTML = t.days + " Days";
                }else if (t.days > 0){
                    document.getElementById(clockID).innerHTML = t.days + " Day";
                }else if (('0' + t.hours).slice(-2) > 1){
                     document.getElementById(clockID).innerHTML = ('0' + t.hours).slice(-2) + " Hours";
                }else if (('0' + t.hours).slice(-2) > 0){
                     document.getElementById(clockID).innerHTML = ('0' + t.hours).slice(-2) + " Hour";
                }else if (('0' + t.minutes).slice(-2) > 0){
                     document.getElementById(clockID).innerHTML = ('0' + t.minutes).slice(-2) + " Minutes";
                }else if (('0' + t.seconds).slice(-2) > 0){
                     document.getElementById(clockID).innerHTML = "1 Minute";
                }



                if (t.total <= 0) {
                  //clearInterval(timeinterval);
                  document.getElementById(clockID).innerHTML = "Active Now";
                }
                  console.log("update");


              }


             //var timeinterval = setInterval(updateClock(), 1);
             updateClock()
             setInterval( function(){updateClock()}, 5000);


            }


















            function makething(mywords) {
                  var endingVariable = mywords;

                  return {
                    'variable': endingVariable
                  };
            }


            //var myVariable = "pawowk!";

            initializeClock($scope.data.id, $scope.data.id, 'november 10 2016 17:55:59 GMT-0500')

            var bimpert = makething($scope.data.id);

            //actually changes text to whatever variable is set
            //document.getElementById($scope.data.id).innerHTML = bimpert.variable;
        //  }, 5000);
        }
    };
});
