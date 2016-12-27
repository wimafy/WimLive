/*global angular */
(function (angular) {
    'use strict';
    angular.module('mainApp', ['countdownTimer'])
        .controller('bodyController', function ($scope) {
            $scope.dates = [
                'October 27, 2016',
                'December 25, 2016',
                'February 26, 2016'
            ];
            $scope.units = [
                'Days | Hours | Minutes'
            ];
            
        });
        
}(angular));