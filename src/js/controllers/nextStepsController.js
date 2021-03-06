'use strict';

angular.module('owsWalletApp.controllers').controller('nextStepsController', function($scope, nextStepsService, $ionicScrollDelegate, $timeout) {

  $scope.hide = false;
  $scope.services = nextStepsService.get();

  $scope.toggle = function() {
    $scope.hide = !$scope.hide;
    $timeout(function() {
      $ionicScrollDelegate.resize();
      $scope.$apply();
    }, 10);
  };

});
