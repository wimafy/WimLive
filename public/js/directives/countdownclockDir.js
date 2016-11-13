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
        template: "<h1 class='currentwimcountdowntime'></h1>",
        link: function(scope, element, attrs) {
          //console.log(arguments)
        },
        controller: function($scope, $interval, $timeout) {
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
           console.log("start clock");
            var clock = document.getElementById(id);
            var daysSpan = clock.querySelector('.days');
            var hoursSpan = clock.querySelector('.hours');
            var minutesSpan = clock.querySelector('.minutes');
            var secondsSpan = clock.querySelector('.seconds');


            function updateClock() {
              var t = getTimeRemaining(endtime);
              console.log(t);
              daysSpan.innerHTML = t.days;
              hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
              minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
              secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

              if (t.days > 1){
                console.log(t.days + " days");
                document.getElementById($scope.data.id).innerHTML = t.days + " Days";

              }else if (t.days > 0){
                console.log(t.days + " day");
                document.getElementById($scope.data.id).innerHTML = t.days + " Day";

              }else if (('0' + t.hours).slice(-2) > 1){
                console.log(t.hours + " hours");
                document.getElementById($scope.data.id).innerHTML = ('0' + t.hours).slice(-2) + " Hours";

              }else if (('0' + t.hours).slice(-2) > 0){
                console.log(t.hours + " hour");
                document.getElementById($scope.data.id).innerHTML = ('0' + t.hours).slice(-2) + " Hour";

              }else if (('0' + t.minutes).slice(-2) > 0){
                  console.log(t.minutes + " minutes");
                  document.getElementById($scope.data.id).innerHTML = ('0' + t.minutes).slice(-2) + " Minutes";

              }else if (('0' + t.seconds).slice(-2) > 0){
                  console.log(t.minutes + " minute");
                  document.getElementById($scope.data.id).innerHTML = "1 Minute";

              }



              if (t.total <= 0) {
                console.log("Active Now");
                //clearInterval(timeinterval);
                document.getElementById($scope.data.id).innerHTML = "Active Now";
              }
                console.log("update");


            }


           //var timeinterval = setInterval(updateClock(), 1);
           updateClock()
           setInterval( function(){updateClock()}, 1000);
          }



         $timeout(function () {

           var idvar = 'clockdiv'+$scope.data.id;
           var clockIDvar = 'clockdiv'+$scope.data.id;
           console.log(idvar);
           console.log(clockIDvar);

           initializeClock(idvar, clockIDvar, $scope.data.date)
         }, 3000);


/*
         $interval(function() {
            //console.log('interval');
            //console.log($scope.data.id);


            //var myVariable = "pawowk!";

            var bimpert = makething();
            //var updatedclockvar = updateClock()

            //actually changes text to whatever variable is set
            document.getElementById($scope.data.id).innerHTML = bimpert.variable;
          }, 5000); */
        }
    };
});
