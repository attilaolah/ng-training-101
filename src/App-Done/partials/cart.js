'use strict';

angular.module(
		'demo.cart',
		[ 'demo.services' ]
)
.controller('CartCtrl', ['$scope', 'storeService', '$routeParams',
                          function($scope, storeService, $routeParams) {
	var productId = $routeParams.prdouctId;
	
	$scope.cart = {};
	storeService.cartList(function(result) {
		$scope.cart.items = result.data;
	});
	
}])
;
