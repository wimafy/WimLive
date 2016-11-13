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
        templateUrl: "public/js/directives/dirTemplates/currentWimIDcard.html",
        link: function(scope, element, attrs) {
          //console.log(arguments)
        },
        controller: function($scope, $interval) {
          console.log($scope.data);
          //interval is set at the end of this function
         $interval(function() {
            console.log('interval');
            console.log($scope.data.id);



















            function makething(mywords) {
                  var endingVariable = mywords;

                  return {
                    'variable': endingVariable
                  };
            }


            //var myVariable = "pawowk!";

            var bimpert = makething($scope.data.id);

            //actually changes text to whatever variable is set
            document.getElementById($scope.data.id).innerHTML = bimpert.variable;
          }, 5000);
        }
    };
});
