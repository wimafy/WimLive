angular.module('wimControllers.directives.countdownClock', [])
.directive('countdownClock', function() {
    return {
        restrict: 'E',
        controller: function($scope) {
          alert('wee');
        }

    };
});

alert("got em");
