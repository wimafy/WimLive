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
          //interval is set at the end of this function


          function makething(mywords) {
                var endingVariable = mywords;

                return {
                  'variable': endingVariable
                };
          }

         $interval(function() {
            console.log('interval');
            console.log($scope.data.id);


            //var myVariable = "pawowk!";

            var bimpert = makething($scope.data.id);

            //actually changes text to whatever variable is set
            document.getElementById($scope.data.id).innerHTML = bimpert.variable;
          }, 5000);
        }
    };
});
