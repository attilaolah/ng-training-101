'use strict';

angular.module(
		'demo.store',
		[ 'demo.services' ]
)
.controller('StoreCtrl', ['$scope', 'storeService', '$routeParams',
                          function($scope, storeService, $routeParams) {
	var productId = $routeParams.prdouctId;
	
	$scope.store = [];
	
	storeService.productList(function(result) {
		$scope.store.products = result.data;
	});
	
	$scope.cartAdd = function(productId) {
		storeService.cartAdd(productId, function(result) {
			
		});
	}
	
}])
;
