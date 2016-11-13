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
        template: "<h1 class='currentwimcountdowntime'>{{data.name}}</h1>",
        link: function(scope, element, attrs) {
          //console.log(arguments)
        },
        controller: function($scope, $interval) {
          console.log($scope.data);
          console.log('clockdiv'+$scope.data.id);

          //interval is set at the end of this function


          function makething() {
                var endingVariable = $scope.data.date;

                return {
                  'variable': endingVariable
                };
          }



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
                console.log("something else1");
                return {
                  'variable':  t.days + " Days"
                };
              }else if (t.days > 0){
                console.log("something else2");
                  return {
                    'variable':  t.days + " Day"
                  };
              }else if (('0' + t.hours).slice(-2) > 1){
                console.log("something else3");
                  return {
                    'variable':  ('0' + t.hours).slice(-2) + " Hours"
                  };
                   //document.getElementById(clockID).innerHTML = ('0' + t.hours).slice(-2) + " Hours";
              }else if (('0' + t.hours).slice(-2) > 0){
                console.log("something else4");
                  return {
                    'variable':  ('0' + t.hours).slice(-2) + " Hour"
                  };
                   //document.getElementById(clockID).innerHTML = ('0' + t.hours).slice(-2) + " Hour";
              }else if (('0' + t.minutes).slice(-2) > 0){
                  console.log("something else5");
                  return {
                    'variable':  ('0' + t.minutes).slice(-2) + " Minutes"
                  };
                  // document.getElementById(clockID).innerHTML = ('0' + t.minutes).slice(-2) + " Minutes";
              }else if (('0' + t.seconds).slice(-2) > 0){
                  console.log("something else6");
                  return {
                    'variable':  ('0' + t.minutes).slice(-2) + "1 Minute"
                  };
                   //document.getElementById(clockID).innerHTML = "1 Minute";
              }



              if (t.total <= 0) {
                console.log("something else7");
                //clearInterval(timeinterval);
                document.getElementById(clockID).innerHTML = "Active Now";
              }
                console.log("update");


            }


           //var timeinterval = setInterval(updateClock(), 1);
           //updateClock()

          }

         var idvar = 'clockdiv'+$scope.data.id;
         var clockIDvar = 'clockdiv'+$scope.data.id;
         console.log(idvar);
         console.log(clockIDvar);

         //var initializeclockvar = initializeClock(idvar, clockIDvar, $scope.data.date)


         $interval(function() {
            console.log('interval');
            console.log($scope.data.id);


            //var myVariable = "pawowk!";

            var bimpert = makething();
            //var updatedclock = updateClock()

            //actually changes text to whatever variable is set
            document.getElementById($scope.data.id).innerHTML = bimpert.variable;
          }, 5000);
        }
    };
});
