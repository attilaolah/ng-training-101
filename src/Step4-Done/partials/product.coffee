"use strict"

angular.module("demo.product", [
  "demo.services"
]).controller("ProductCtrl", [
  "$scope"
  "storeService"
  "$routeParams"
  ($scope, storeService, $routeParams) ->
    $scope.product = {}
    storeService.productRead $routeParams.productId, (result) ->
      $scope.product = result.data
    @ # important
])
