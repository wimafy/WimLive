angular.module('datePickerDemoApp', [
    'ui.router',
    'ui.bootstrap',
    'datePicker'
])

angular.module('datePickerDemoApp').controller('MainCtrl', function ($scope) {
    $scope.selectedDate = new Date();
});