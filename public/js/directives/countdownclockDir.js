angular.module('wimControllers.directives.countdownClock', [])
.directive('countdownClock', function() {
    return {
        restrict: 'E',
        scope: {
            data: '=',
        },
        replace: true,
        template: "<h1>{{data.name}}",
        controller: function($scope, $interval) {
          console.log($scope.data);
        }
    };
});
