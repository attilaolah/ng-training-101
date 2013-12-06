"use strict"

# Declare app level module which depends on filters, and services
angular.module("demo", [
]).controller "MainCtrl", [
    "$scope",
    ($scope) ->
      $scope.someValue = "Set by the controller"
  ]
