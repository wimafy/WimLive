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
          element.click(function() {
              alert('click');
          });
        },
        controller: function($scope, $interval) {
          console.log($scope.data);
        }
    };
});
