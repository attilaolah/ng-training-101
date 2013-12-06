"use strict"

# Declare app level module which depends on filters, and services
angular.module("demo", [
  "ngRoute"
  "demo.store"
  "demo.cart"
]).config [
  "$routeProvider"
  ($routeProvider) ->
    $routeProvider.when("/store",
      controller: "StoreCtrl"
      templateUrl: "partials/store.html"
    )
    $routeProvider.when("/cart",
      controller: "CartCtrl"
      templateUrl: "partials/cart.html"
    )
    $routeProvider.otherwise
      redirectTo: "store"
]
