'use strict';

angular.module('owsWalletApp.controllers').controller('mercadoLibreController',
  function($scope, $timeout, $log, mercadoLibreService, externalLinkService, popupService, networkService) {

    $scope.openExternalLink = function(url) {
      externalLinkService.open(url);
    };

    var init = function() {
      mercadoLibreService.getPendingGiftCards(function(err, gcds) {
        if (err) $log.error(err);
        $scope.giftCards = gcds;
        $timeout(function() {
          $scope.$digest();
        });
      });
    };

    $scope.$on("$ionicView.beforeEnter", function(event, data) {
      $scope.networkURI = mercadoLibreService.getNetwork();
      init();
    });

    $scope.isTestnet = function(networkURI) {
      return networkService.isTestnet(networkURI);
    };
  });
