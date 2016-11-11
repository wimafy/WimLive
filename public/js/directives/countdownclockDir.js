angular.module('wimControllers.directives.countdownClock', [])
.directive('countdownClock', function() {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        controller: function($scope) {
          console.log($scope.data);
        }
    };
});
