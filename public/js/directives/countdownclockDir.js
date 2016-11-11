angular.module('wimControllers.directives.countdownClock', [])
.directive('countdownClock', function() {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        replace: true,
        template: "<h1>{{data.name}}",
        link: function(scope, element, attrs) {
          //console.log(arguments)
        },
        controller: function($scope, $interval) {
          console.log($scope.data);
          $interval(function() {
            console.log('interval');
            console.log(data.id);
          }, 1000);
        }
    };
});
