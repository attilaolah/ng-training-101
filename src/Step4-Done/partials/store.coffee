"use strict"

angular.module("demo.store", [
  "demo.services"
]).controller("StoreCtrl", [
  "$scope"
  "storeService"
  "$routeParams"
  ($scope, storeService, $routeParams) ->
    $scope.store = []
    storeService.productList (result) ->
      $scope.store.products = result.data
    @ # important
])
