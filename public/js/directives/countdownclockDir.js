angular.module('wimControllers.directives.countdownClock', [])
.directive('countdownClock', function() {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        template: "<h1>{{friend.name}}",
        controller: function($scope) {
          console.log($scope.data);
        }
    };
});
